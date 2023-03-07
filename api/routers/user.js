import { Router } from "express";

import {
  index,
  show,
  create,
  destroy,
  showByUserName,
} from "../controllers/user.js";

const userRouter = Router();

userRouter.post("/register", create);
//userRouter.post("/login", loginUser);
userRouter.get("/user/:id", show);
userRouter.get("/user/:username", showByUserName);

export default userRouter;
