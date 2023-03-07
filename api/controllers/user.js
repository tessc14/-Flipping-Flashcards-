import User from "../models/users.js";

async function index(req, res) {
  try {
    const users = await User.getAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function show(req, res) {
  console.log("Hi Sho");
  try {
    const id = parseInt(req.params.id);
    console.log(id);
    const user = await User.getOneById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function showByUserName(req, res) {
  try {
    const username = req.params.username;
    const user = await User.getOneByUserName(username);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function destroy(req, res) {
  try {
    const id = parseInt(req.params.id);
    const user = await User.getOneById(id);
    await user.destroy();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

export { index, show, showByUserName, create, destroy };
