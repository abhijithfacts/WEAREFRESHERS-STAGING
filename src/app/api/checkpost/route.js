import { NextResponse } from "next/server";
import sql from "mssql";
import { getDbConnection } from "@/lib/db";
import jwt from "jsonwebtoken";
import logger from "@/lib/logger";

const JWT_SECRET = process.env.JWT_SECRET;

async function verifyToken(request) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    logger.warn("Authorization header missing or malformed.");
    throw new Error("Authorization token missing or invalid.");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    logger.debug(`Token verified for user: ${decoded?.email || "unknown"}`);
    return decoded;
  } catch (error) {
    logger.warn(`Invalid or expired token: ${error.message}`);

    throw new Error("Invalid or expired token.");
  }
}

export async function POST(request) {
  const requestId = Math.random().toString(36).substring(2, 10);
  logger.info(`[${requestId}] Incoming request to /api/checkpost`);
  try {
    const body = await request.json();
    const { containerId, usr, ...inputParams } = body;

    await verifyToken(request);

    if (!containerId || containerId.length === 0) {
      logger.warn(`[${requestId}] Missing containerId`);
      return NextResponse.json(
        { error: "containerId is required in the request body." },
        { status: 400 }
      );
    }

    const pool = await getDbConnection();
    const routerKey = containerId[0];

    logger.debug(`[${requestId}] Fetching procedure details for ${routerKey}`);

    const getProcudureDetails = await pool
      .request()
      .input("routerKey", sql.NVarChar, routerKey)
      .query(
        "SELECT * FROM UISectionComponents WHERE ContainerId = @routerKey AND CONTROLLER_NAME = 'secure'"
      );

    const resultObject = getProcudureDetails?.recordsets?.[0]?.[0];
    if (!resultObject) {
      logger.warn(`[${requestId}] No data found for containerId: ${routerKey}`);

      return NextResponse.json(
        { error: "No data found for the given containerId." },
        { status: 404 }
      );
    }

    const { DataQuery } = resultObject;
    const procedureDetails = JSON.parse(DataQuery);
    const SPname = procedureDetails?.[0]?.request;
    const parameters = procedureDetails?.[0]?.parameters;

    const createParamString = (params) => {
      return Object.keys(params)
        .map((key) => {
          const value = inputParams[params[key]];
          return typeof value === "string"
            ? `${key} = '${value}'`
            : `${key} = ${value}`;
        })
        .join(", ");
    };

    const query = `EXEC ${SPname} ${
      parameters ? createParamString(parameters) : ""
    }`;

    logger.info(`[${requestId}] Executing stored procedure: ${SPname}`);
    logger.debug(`[${requestId}] Query: ${query}`);

    const execProcedure = await pool.request().query(query);

    logger.info(
      `[${requestId}] Procedure executed successfully. Rows: ${
        execProcedure?.recordsets?.[0]?.length || 0
      }`
    );
    return NextResponse.json(execProcedure?.recordsets?.[0]);
  } catch (error) {
    logger.error(`Error executing procedure: ${error.message}`);
    return NextResponse.json(
      { error: error.message || "Internal server error." },
      { status: 500 }
    );
  }
}
