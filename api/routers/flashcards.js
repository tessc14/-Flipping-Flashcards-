import { Router } from "express";

import flashcardsController from "../controllers/flashcards.js";
const flashcardsRouter = Router();

flashcardsRouter.get("/", flashcardsController.index);

export default flashcardsRouter;
