import express from "express";
const router = express.Router();

import { Coverlatter } from "../controllers/coverlatter.js";
import upload from "../Middlewares/upload.js";
import varifyToken from "../Middlewares/varifyToken.js";
import varifyRole from "../Middlewares/varifyRole.js";
import { limitCoverUsage } from "../Middlewares/limitCoverUsage.js";
router.post(
  "/cover",
  varifyToken,
  varifyRole("Admin", "user"),
  limitCoverUsage,
  upload.single("resume"),
  Coverlatter,
);
export default router;
