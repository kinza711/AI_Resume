import jwt from "jsonwebtoken";
import AIUser from "../Models/UserModel.js";

const verifyToken = async (req, res, next) => {
  try {
    // step 1 to set authheader
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "User not logged in" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await AIUser.findById(decoded.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    req.user = user; // attach user to request
    next();
  } catch (err) {
    res.status(401).json({
      message: "Invalid or expired token",
      error: err.message,
    });
  }
};

export default verifyToken;
