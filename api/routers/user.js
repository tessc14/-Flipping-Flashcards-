import { Router } from "express";

import { index, show, create, update, destroy } from "../controllers/user.js";

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.get("/login", loginUser);
userRouter.get("/user", findById);

export default userRouter;
