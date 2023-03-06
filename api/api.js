import express from "express";
import cors from "cors";

const api = express();

api.use(cors());
api.use(express.json());

api.get("/", (req, res) => {
  res.json({
    description: "Flipping Flashcards API",
  });
});

export default api;
