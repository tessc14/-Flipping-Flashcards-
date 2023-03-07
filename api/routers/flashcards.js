import { Router } from "express";

import index from "../controllers/flashcards.js";
const flashcardsRouter = Router();

flashcardsRouter.get("/", index);

// flashcardsRouter.get("/:id", show);

export default flashcardsRouter;
