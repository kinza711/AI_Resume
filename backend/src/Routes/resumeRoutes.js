import express from "express";
import upload from "../Middlewares/upload.js";
import { UploadResume } from "../controllers/resumeController.js";

const router = express.Router();

router.post("/upload", upload.single("resume"), UploadResume);

export default router;
