import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import { ServiceRoute } from "./src/Routes/ServiceRoutes.js";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/", ServiceRoute);

mongoose
  .connect(process.env.KEY)
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connected!"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
