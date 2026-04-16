import express from "express";
const router = express.Router();
import {
  startInterview,
  replyInterview,
} from "../controllers/interviewController.js";
import upload from "../Middlewares/upload.js";

router.post("/start", upload.single("resume"), startInterview);
router.post("/answer", replyInterview);

export default router;
