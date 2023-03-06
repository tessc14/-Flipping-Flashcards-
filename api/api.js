import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import flashcardsRouter from "./routers/flashcards.js";

const api = express();

api.use(cors());
api.use(express.json());

api.get("/", (req, res) => {
  res.json({
    description: "Flipping Flashcards API",
  });
});

api.use("/flashcards", flashcardsRouter);

export default api;
