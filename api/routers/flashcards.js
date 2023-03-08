import { Router } from "express";
import { show, index, create, destroy } from "../controllers/flashcards.js";

const flashcardsRouter = Router();

flashcardsRouter
        .get("/:id", show)
        .get("/", index)
        .post("/", create)
        .delete('/:id', destroy)


export default flashcardsRouter;
