import Cover from "../Models/CoverModel.js";
import { generateCover } from "../services/coverlatterservice.js";

export const Coverlatter = async (req, res) => {
  try {
    const { jobDesc, tone } = req.body;

    // 1. file check
    // if (!req.file) {
    //   return res.status(400).json({ message: "No file uploaded" });
    // }
    // // 2. resume
    // const resumeUrl = await uploadToCloudinary(req.file.buffer);

    // if (!resume && !jobDesc) {
    //   return res.status(400).json({ message: "Input required" });
    // }

    const improvedlatter = await generateCover(tone, jobDesc);

    console.log("AI Response:", improvedlatter.slice(0, 300));

    const generateLatter = await Cover.create({
      tone,
      jobDesc,
      //resume: resumeUrl,
      coverlatter: improvedlatter,
    });

    res.status(200).json({
      message: "details uploaded successfully",
      data: generateLatter,
    });
    console.log("details uploaded successfully");
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Failed to generate cover letter",
    });
  }
};
