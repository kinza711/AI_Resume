import mongoose from "mongoose";

const CoverSchema = new mongoose.Schema({
  tone: { type: String },
  jobDesc: { type: String, required: true },
  resume: { type: String }, // upload resume
  coverlatter: { type: String },
});

export default mongoose.model("Cover", CoverSchema);
