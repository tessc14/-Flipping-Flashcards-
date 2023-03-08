import express from "express";
import cors from "cors";
import bodyParser from 'body-parser'
import flashcardsRouter from "./routers/flashcards.js";
import usersRouter from "./routers/user.js";

const api = express();

api.use(cors());
api.use(express.json());
api.use(bodyParser.json())
api.use(bodyParser.urlencoded({ extended: false }))


api.use("/api/flashcards", flashcardsRouter);


api.use("/users", usersRouter);

export default api;
