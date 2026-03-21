import express from "express";
import {
  GetUsers,
  DeleteUser,
  UpdateUser,
  EditUsers,
} from "../controllers/userController.js";
const router = express.Router();

router.get("/users", GetUsers);
router.delete("/users/:id", DeleteUser);
router.put("/update/:id", UpdateUser);
router.get("/edit/:id", EditUsers);

export default router;
