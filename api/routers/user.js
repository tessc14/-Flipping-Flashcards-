import { Router } from "express";

import { index, show, create, update, destroy } from "../controllers/user.js";

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/user/:id", findById);
userRouter.get("/user/:username", findByUsername);

export default userRouter;
