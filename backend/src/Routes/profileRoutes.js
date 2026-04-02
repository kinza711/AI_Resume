import express from "express";
const router = express.Router();
import { getProfile, UpdateProfile } from "../controllers/profileController.js";

router.get("/profile/:id", getProfile);
router.put("/profile/update/:id", UpdateProfile);

export default router;
