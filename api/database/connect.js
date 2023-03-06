import dotenv from "dotenv";
import pg from "pg";
const { Pool } = pg;

dotenv.config();
const db = new Pool({
  connectionString: process.env.DB_URL,
});

console.log("DB connection established.");

export default db;
