import express from "express";
const router = express.Router();
import {
  startInterview,
  replyInterview,
} from "../controllers/interviewController.js";
import upload from "../Middlewares/upload.js";
import varifyToken from "../Middlewares/varifyToken.js";
import varifyRole from "../Middlewares/varifyRole.js";

router.post(
  "/start",
  varifyToken,
  varifyRole("Admin", "user"),
  upload.single("resume"),
  startInterview,
);
router.post(
  "/answer",
  varifyToken,
  varifyRole("Admin", "user"),
  replyInterview,
);

export default router;
