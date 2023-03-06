import { Router } from "express";

import flashcardsController from "../controllers/flashcards.js";
const flashcardsRouter = Router();

//flashcardsRouter.get("/", flashcardsController.index);
//currently breaks the app probably the .index
export default flashcardsRouter;
