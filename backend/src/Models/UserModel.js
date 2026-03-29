import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    //premium: { type: Boolean, default: false },
    //subscriptionPlan: { type: String, default: "free" },
    //subscriptionExpires: { type: Date },
    role: { type: String, default: "user" },
    phone: { type: String },
    //resumeHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: "Resume" }],
    //lastLogin: { type: Date },
    //usageStats: {
    // resumesImproved: { type: Number, default: 0 },
    // apiCalls: { type: Number, default: 0 },
    //},
    //pic: { type: String },
  },
  { timestamps: true },
);

export default mongoose.model("AIUser", userSchema);
