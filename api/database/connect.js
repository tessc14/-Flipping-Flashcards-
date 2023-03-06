import { Pool } from "pg";
require("dotenv").config();

const db = new Pool({
    connectionString: process.env.DB_URL
})

console.log("DB connection established.")

export default db;
