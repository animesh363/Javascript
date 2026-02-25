import mongoose from "mongoose";
import express from "express";

const app = express();

const dbConnect = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/lpu26a");
  console.log("Database Connected");
};

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  role: { type: String },
});

// ❌ removed await here
const userModel = mongoose.model("users1", userSchema);

// 👇 wrap everything inside async function
const start = async () => {
  await dbConnect();

  app.get("/", async (req, res) => {
    const result = await userModel.find();
    res.json(result);
  });

  app.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
  });
};

start();