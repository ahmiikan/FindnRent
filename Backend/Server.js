import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Houses from "../Backend/Routes/Houses.js";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });


console.log("Mongo URL from env:", process.env.mongo);

const mongoURL = process.env.mongo; // ✅ Fixed variable name
const app = express();

app.use(cors());
app.use(express.json());

// ✅ Mount routes here
app.use("/api/houses", Houses);

app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Connect to MongoDB
mongoose.connect(mongoURL)
.then(() => console.log("Database Connected"))
.catch((err) => console.log("Database Connection Error:", err));

app.listen(5000, () => {
    console.log("Server Running on port 5000");
});
