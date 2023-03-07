import { Router } from "express";

import { index, show, create, update, destroy } from "../controllers/user.js";

const userRouter = Router();

userRouter.get("/", index);
userRouter.get("/:id", show);
userRouter.post("/", create);
userRouter.put("/:id", update);
userRouter.delete("/:id", destroy);

export default userRouter;
