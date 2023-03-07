import express from "express";
import cors from "cors";
import bodyParser from 'body-parser'
import flashcardsRouter from "./routers/flashcards.js";

const api = express();

api.use(cors());
api.use(express.json());
api.use(bodyParser.json())
api.use(bodyParser.urlencoded({ extended: false }))

api.use(flashcardsRouter);

export default api;
