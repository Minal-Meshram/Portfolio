import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

// ✅ CORS fix
app.use(cors({
  origin: [
    "https://minalmeshram-portfolio.vercel.app",
    "https://portfolio-git-main-minalmeshram873-8131s-projects.vercel.app"
  ]
}));

app.use(express.json());
app.use("/api/contact", contactRoutes);

// ✅ DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// ✅ PORT fix
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// test route
app.get("/", (req, res) => {
  res.send("API Running...");
});