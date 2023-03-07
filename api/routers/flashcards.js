import { Router } from "express";

// import show from "../controllers/flashcards.js";
import { show, index, create } from "../controllers/flashcards.js";

// import * as Controllers from "../controllers/flashcards.js";
const flashcardsRouter = Router();

flashcardsRouter
        .get("/flashcards/:id", show)
        .get("/flashcards", index)
        .post("/flashcards", create)


export default flashcardsRouter;
