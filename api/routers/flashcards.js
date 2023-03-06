import { Router } from "express";

import index from "../controllers/flashcards.js";
const flashcardsRouter = Router();

flashcardsRouter.get("/", index);
//currently breaks the app probably the .index
export default flashcardsRouter;
