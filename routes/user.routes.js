import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (req, res) => {
  res.send({ title: "create users" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ title: "Update users" });
});

userRouter.delete("/", (req, res) => {
  res.send({ title: "Delete users" });
});

export default userRouter;
