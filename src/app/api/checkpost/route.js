import { NextResponse } from "next/server";
import sql from "mssql";
import { getDbConnection } from "../../../lib/db";

export async function POST(request) {
  try {
    const body = await request.json();
    const { containerId, usr, ...inputParams } = body;

    const pool = await getDbConnection();
    const routerKey = containerId[0];

    const getProcudureDetails = await pool
      .request()
      .input("routerKey", sql.NVarChar, routerKey)
      .query(
        "SELECT * FROM UISectionComponents WHERE ContainerId = @routerKey"
      );

    //   .query(
    //     "SELECT * FROM UISectionComponents WHERE ContainerId = @routerKey AND CONTROLLER_NAME = 'secure'"
    //   );

    const resultObject = getProcudureDetails?.recordsets?.[0]?.[0];
    if (!resultObject) {
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

    const execProcedure = await pool.request().query(query);

    return NextResponse.json(execProcedure?.recordsets?.[0]);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Internal server error." },
      { status: 500 }
    );
  }
}
