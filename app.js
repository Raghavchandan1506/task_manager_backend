import express from "express";

const app = express();

import userRouter from "./Routes/TaskRouter.js";
import bodyParser from "body-parser";
import cors from "cors";
app.use(bodyParser.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // Allow requests from your frontend
    // methods: "GET,POST,PUT,DELETE", // Allowed HTTP methods
    credentials: true, // If you use cookies, add this
  })
);

app.use("/api/v1/Todos", userRouter);
export { app };
