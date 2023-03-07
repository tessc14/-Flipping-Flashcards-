import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import api from "./api.js";

const app = api;
app.use(cors());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

// const __filename = fileURLToPath(import.meta.url);

// const __dirname = path.dirname(__filename);

// // Have Node serve the files for our built React app
// //app.use(express.static(path.resolve(__dirname, '../client/build')));

// app.use(express.static(path.resolve(__dirname, "../client/dist")));
// // Handle GET requests to /api route

// // All other GET requests not handled before will return our React app
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
// });
