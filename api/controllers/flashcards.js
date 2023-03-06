import Flashcard from "../models/flashcards.js";

async function index(req, res) {
    try {
        const flashcards = await Flashcard.getAll();
        res.status(200).json(flashcards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function show(req, res) {
    try {
        const id = parseInt(req.params.id);
        const flashcard = await Flashcard.getOneById(id);
        res.status(200).json(flashcard);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}


export default index;

