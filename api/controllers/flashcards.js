import Flashcard from "../models/flashcards.js";

async function index(req, res) {
    try {
        const flashcards = await Flashcard.getAll();
        res.status(200).json(flashcards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export default index;
