import { Router } from "express";

import index from "../controllers/flashcards.js";
const flashcardsRouter = Router();

flashcardsRouter.get("/", index);

// flashcardsRouter.get("/:id", show);

flashcardsRouter.post("/register", register);
flashcardsRouter.post("/login", login);

export default flashcardsRouter;
