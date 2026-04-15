import express from "express";
const router = express.Router();

import { Coverlatter } from "../controllers/coverlatter.js";
import upload from "../Middlewares/upload.js";

router.post("/cover", upload.single("resume"), Coverlatter);
export default router;
