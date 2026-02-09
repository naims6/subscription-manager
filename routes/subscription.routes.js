import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send("get all subscriptions");
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send("get subscription details");
});

subscriptionRouter.post("/", (req, res) => {
  res.send("crate subs");
});

subscriptionRouter.put("/", (req, res) => {
  res.send("update subs");
});

subscriptionRouter.delete("/", (req, res) => {
  res.send("delete subs");
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.send("get all user subs");
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send("cancel subs");
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send("get renewals");
});

export default subscriptionRouter
