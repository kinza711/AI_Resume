import {
  startInterviewService,
  answerInterviewService,
} from "../services/interviewService.js";
import parser from "../utils/parser.cjs";

const { parseResume } = parser;
import uploadToCloudinary from "../utils/uploadToCloudinary.js";

export const startInterview = async (req, res) => {
  try {
    const { jobDesc } = req.body;

    // 1. file check
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    // 2. resume
    const resumeUrl = await uploadToCloudinary(req.file.buffer);
    // 3.  PARSE (NEW STEP)
    const originalText = await parseResume(req.file);

    console.log("Parsed Text:", originalText.slice(0, 100));

    if (!jobDesc) {
      return res.status(400).json({ message: "Input required" });
    }

    const question = await startInterviewService(jobDesc, originalText);
    res.status(200).json({
      message: "interview started susscessfully",
      question,
    });
  } catch (err) {
    console.error(err, "interview start controller not working");
    res.status(500).json({ message: "interview start controller not working" });
  }
};

// interview reply

export const replyInterview = async (req, res) => {
  try {
    const { messages } = req.body; // ✅ correct

    const reply = await answerInterviewService(messages); // ✅ correct service

    res.json({ reply }); // ✅ better format
  } catch (err) {
    console.error(err, "interview reply controller not working");
    res.status(500).json({ message: "interview reply controller not working" });
  }
};
