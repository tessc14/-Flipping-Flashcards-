import express from "express";
import cors from "cors";
import flashcardsRouter from "./routers/flashcards.js";

const api = express();

api.use(cors());
api.use(express.json());

api.use("/flashcards", flashcardsRouter);

export default api;
