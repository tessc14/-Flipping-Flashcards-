import { Router } from "express";
import { show, index, create, destroy, setCategory } from "../controllers/flashcards.js";

const flashcardsRouter = Router();

flashcardsRouter
        .get("/:id", show)
        .get("/categories/:category", setCategory)
        .get("/", index)
        .post("/", create)
        .delete('/:id', destroy)


export default flashcardsRouter;
