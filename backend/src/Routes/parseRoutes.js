// PDF parse route
import express from "express";
const router = express.Router();
// import PDF parser function
import { parsePDF } from "../pdfparse/pdf-parse.js";
router.get("/parse-pdf", async (req, res) => {
  try {
    const text = await parsePDF("kinza.pdf"); // exact file name
    res.json({ text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
