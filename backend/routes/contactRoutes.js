import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("BODY 👉", req.body); // debug

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields required" });
    }

    const newContact = new Contact({ name, email, message });

    const saved = await newContact.save();

    console.log("SAVED ✅", saved);

    res.status(201).json({
      success: true,
      message: "Message saved successfully ✅"
    });

  } catch (error) {
    console.log("ERROR 👉", error); // 🔥 IMPORTANT

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

export default router;