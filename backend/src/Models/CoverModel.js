import mongoose from "mongoose";

const CoverSchema = new mongoose.Schema({
  tone: { type: String },
  jobDesc: { type: String, required: true },
  resume: { type: String }, // upload resume
  coverlatter: { type: String },
  coverUsageCount: { type: Number, default: 0 },
  coverUsageDate: { type: Date },
});

export default mongoose.model("Cover", CoverSchema);
