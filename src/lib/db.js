import sql from "mssql";

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  server: process.env.DB_SERVER,
  port: parseInt(process.env.DB_PORT, 10),
  database: process.env.DB_NAME,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

let pool;

export const getDbConnection = async () => {
  if (pool) return pool;
  try {
    pool = await sql.connect(dbConfig);
    console.log("✅ Connected to database successfully");
    return pool;
  } catch (error) {
    console.error("❌ Failed to connect to database:", error.message);
    throw new Error("Database connection failed.");
  }
};

export const closeDbConnection = async () => {
  if (pool) {
    await pool.close();
    pool = null;
    console.log("🔒 Database connection closed");
  }
};
