import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoutes);


// DB connection
mongoose.connect("mongodb://localhost:27017/portfolioDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

   app.listen(5000, () => {
      console.log("Server running on port 5000");
   });


// test route
app.get("/", (req, res) => {
  res.send("API Running...");
});
