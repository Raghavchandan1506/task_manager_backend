import connectDB from "./DB/db.js";
import dotenv from "dotenv";
import { app } from "./app.js";
import bodyParser from "body-parser";
import cors from 'cors'

dotenv.config({
  path: "./.env",
});


connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("DB connection FAILED", err);
  });
