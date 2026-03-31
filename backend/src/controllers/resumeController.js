import Resume from "../Models/ResumeModel.js";
import parser from "../utils/parser.cjs";

const { parseResume } = parser;
import uploadToCloudinary from "../utils/uploadToCloudinary.js";

import { improveResume } from "../services/aiservices.js";

export const UploadResume = async (req, res) => {
  try {
    const { improvementType } = req.body;

    // 1. file check
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    // 2. resume
    const resumeUrl = await uploadToCloudinary(req.file.buffer);

    // 3.  PARSE (NEW STEP)
    const originalText = await parseResume(req.file);

    console.log("Parsed Text:", originalText.slice(0, 100));

    // 4.  AI CALL improves text
    const improvedText = await improveResume(originalText, improvementType);

    // ----to fast load resuem comment  step 2 & step 4----

    // const [resumeUrl, improvedText] = await Promise.all([
    //   uploadToCloudinary(req.file.buffer),
    //   improveResume(originalText, improvementType),
    // ]);

    console.log("AI Response:", improvedText.slice(0, 200));

    //5. store do db
    const uplaodresume = await Resume.create({
      resume: resumeUrl,
      improvementType,
      originalText,
      improvedText,
      status: "completed",
    });
    res.status(200).json({
      message: "resuem  uploaded susccessfully",
      data: uplaodresume,
    });
  } catch (err) {
    console.log("FULL ERROR:", err); // yeh add karo
    res.status(500).json({
      message: "resuem not uploaded",
      error: err.message,
    });
  }
};
