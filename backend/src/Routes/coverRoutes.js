import express from "express";
const router = express.Router();

import { Coverlatter } from "../controllers/coverlatter.js";

router.post("/cover", Coverlatter);
export default router;
