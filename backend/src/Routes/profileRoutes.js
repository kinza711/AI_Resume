import express from "express";
const router = express.Router();
import { getProfile, UpdateProfile } from "../controllers/profileController.js";
import varifyToken from "../Middlewares/varifyToken.js";
import varifyRole from "../Middlewares/varifyRole.js";

router.get("/profile", varifyToken, varifyRole("Admin", "user"), getProfile);
router.put(
  "/profile/update",
  varifyToken,
  varifyRole("Admin", "user"),
  UpdateProfile
);

export default router;
