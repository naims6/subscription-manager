import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send("get all subscriptions");
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send("get subscription details");
});

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/", (req, res) => {
  res.send("update subs");
});

subscriptionRouter.delete("/", (req, res) => {
  res.send("delete subs");
});

subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send("cancel subs");
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send("get renewals");
});

export default subscriptionRouter;
