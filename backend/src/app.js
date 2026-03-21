import express from "express";
const app = express();
import cors from "cors";
import authRoutes from "./Routes/authRoutes.js";
import userRoutes from "./Routes/userRoutes.js";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cors setup
const allowedOrigin =
  process.env.NODE_ENV === "production"
    ? process.env.FRONTEND_URL
    : "http://localhost:5173";

app.use(
  cors({
    origin: allowedOrigin,
    Credentials: true,
  }),
);

// logic routes
app.use("/", authRoutes);
app.use("/", userRoutes);
//default apge
app.get("/", (req, res) => {
  res.send("welcome to the backend kinza");
});

export default app;
