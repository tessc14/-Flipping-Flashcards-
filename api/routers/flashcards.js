import { Router } from "express";

import index from "../controllers/flashcards.js";
const flashcardsRouter = Router();

flashcardsRouter.get("/", index);
export default flashcardsRouter;
