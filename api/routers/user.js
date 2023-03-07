import { Router } from "express";

import {
  index,
  show,
  create,
  destroy,
  showByUserName,
  loginUser,
} from "../controllers/user.js";

const userRouter = Router();

userRouter.post("/register", create);
userRouter.post("/login", loginUser);
userRouter.get("/:id", show);
userRouter.get("/:username", showByUserName);

export default userRouter;
