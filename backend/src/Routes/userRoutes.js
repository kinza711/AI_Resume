import express from "express";
import {
  GetUsers,
  DeleteUser,
  UpdateUser,
  EditUsers,
} from "../controllers/userController.js";
import varifyToken from "../Middlewares/varifyToken.js";
import varifyRole from "../Middlewares/varifyRole.js";
const router = express.Router();

router.get("/users", varifyToken, varifyRole("Admin"), GetUsers);
router.delete("/users/:id", varifyToken, varifyRole("Admin"), DeleteUser);
router.put("/update/:id", varifyToken, varifyRole("Admin"), UpdateUser);
router.get("/edit/:id", varifyToken, varifyRole("Admin"), EditUsers);

export default router;
