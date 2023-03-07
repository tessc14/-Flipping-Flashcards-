import express from "express";
import cors from "cors";
import flashcardsRouter from "./routers/flashcards.js";
import usersRouter from "./routers/user.js";

const api = express();

api.use(cors());
api.use(express.json());

api.use("/flashcards", flashcardsRouter);
api.use("/users", usersRouter);

export default api;
