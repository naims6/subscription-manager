import express from "express";

import connectDB from "./database/mongodb.js";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HEllo WOrkld");
});

app.listen(PORT, async () => {
  console.log(`Server is running on port:`, PORT);
  await connectDB();
});

// export default app
