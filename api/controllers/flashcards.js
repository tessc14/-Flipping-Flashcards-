import Flashcard from "../models/flashcards.js";

export async function index(req, res) {
    try {
        console.log('inside index')
        const flashcards = await Flashcard.getAll();
        res.status(200).json(flashcards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function show(req, res) {
    try {
        const id = parseInt(req.params.id);
        const flashcard = await Flashcard.getOneById(id);
        res.status(200).json(flashcard);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

 export async function create(req, res) {
    try {
        const data = req.body;
        console.log(data)
        // const token = data.token;
        // const tokenData = await Token.getOneByToken(token);
        // data.user_id = tokenData.user_id;
        const newFlashcard = await Flashcard.create(data);
        // const user = await User.getOneById(data.user_id);
        // newFlashcard.username = user.username;
        res.status(201).json(newFlashcard);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}

export async function destroy(req, res) {
    try {
        const id = parseInt(req.params.id);
        const flashcard = await Flashcard.getOneById(id);
        const result = await flashcard.destroy();
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}
