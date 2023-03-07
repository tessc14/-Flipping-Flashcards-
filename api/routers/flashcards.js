import { Router } from "express";
import { show, index, create, destroy } from "../controllers/flashcards.js";

const flashcardsRouter = Router();

flashcardsRouter
        .get("/flashcards/:id", show)
        .get("/flashcards", index)
        .post("/flashcards", create)
        .delete('/flashcards/:id', destroy)


export default flashcardsRouter;
