import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    title: { type: String },

    originalFile: { type: String }, // URL or path
    originalText: { type: String },

    improvedText: { type: String },
    improvedFile: { type: String }, // generated PDF

    fileType: { type: String }, // pdf, docx, txt
    improvementType: { type: String, enum: ["text", "full"], default: "text" },

    jobRole: { type: String },

    hasWatermark: { type: Boolean, default: true },

    status: {
      type: String,
      enum: ["processing", "completed", "failed"],
      default: "processing",
    },

    version: { type: Number, default: 1 },

    downloads: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export default mongoose.model("Resume", resumeSchema);
