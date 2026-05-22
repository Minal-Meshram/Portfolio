import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // save to DB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(200).json({
      success: true,
      message: "Message saved successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error saving message",
    });
  }
});
export default router;