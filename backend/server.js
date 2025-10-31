import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://mongo:27017/equipment_db";

app.get("/", (req, res) => res.send("Backend running."));

mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(` Server listening on port ${PORT}`));
  })
  .catch(err => {
    console.error(" MongoDB connection error:", err);
    process.exit(1);
  });
