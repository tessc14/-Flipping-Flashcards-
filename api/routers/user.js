import { Router } from "express";

import {
  index,
  show,
  create,
  update,
  destroy,
  findByUsername,
} from "../controllers/user.js";

const userRouter = Router();

userRouter.post("/register", create);
//userRouter.post("/login", loginUser);
userRouter.get("/user/:id", show);
userRouter.get("/user/:username", findByUsername);

export default userRouter;
