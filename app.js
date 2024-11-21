import express from "express";

const app = express();

import userRouter from "./Routes/TaskRouter.js";
import bodyParser from "body-parser";
import cors from "cors";
app.use(bodyParser.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use("/api/v1/Todos", userRouter);
export { app };
