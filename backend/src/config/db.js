const mysql = require("mysql2/promise");

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD ?? "",
  database: process.env.DB_NAME || "njoyholidayz",
};

const pool = mysql.createPool({
  ...dbConfig,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const testConnection = async () => {
  let connection;

  try {
    connection = await pool.getConnection();
    await connection.ping();
    console.log("MySQL connected");
  } catch (error) {
    if (error && error.code === "ER_ACCESS_DENIED_ERROR") {
      const passwordMessage = dbConfig.password
        ? "MySQL rejected the password in backend/.env."
        : "DB_PASSWORD is empty in backend/.env.";

      throw new Error(
        `${passwordMessage} Update DB_USER and DB_PASSWORD in backend/.env, then run npm run dev again.`,
      );
    }

    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
};

module.exports = {
  pool,
  testConnection,
};
