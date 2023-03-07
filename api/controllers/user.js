import Flashcard from "../models/users.js";

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

async function showByUserName(req, res) {
  try {
    const username = req.params.username;
    const flashcard = await Flashcard.getOneByUserName(username);
    res.status(200).json(flashcard);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function create(req, res) {
  try {
    const flashcard = await Flashcard.create(req.body);
    res.status(201).json(flashcard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function destroy(req, res) {
  try {
    const id = parseInt(req.params.id);
    const flashcard = await Flashcard.getOneById(id);
    await flashcard.destroy();
    res.status(200).json(flashcard);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

export { index, show, showByUserName, create, destroy };
