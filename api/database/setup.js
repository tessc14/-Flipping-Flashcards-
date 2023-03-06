import fs from "fs";
import dotenv from "dotenv";

import db from "./connect";
dotenv.config();

const sql = fs.readFileSync("./database/setup.sql").toString();

db.query(sql)
  .then((data) => console.log("Set-up complete."))
  .catch((error) => console.log(error));
