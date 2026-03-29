import express from "express";
const app = express();
import cors from "cors";
import authRoutes from "./Routes/authRoutes.js";
import userRoutes from "./Routes/userRoutes.js";

//import parseRoutes from "./Routes/parseRoutes.js";

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
    credentials: true,
  }),
);

// logic routes
app.use("/", authRoutes);
app.use("/", userRoutes);
//parse-pdf
//app.use("/", parseRoutes);
//default apge
app.get("/", (req, res) => {
  res.send("welcome to the backend kinza");
});

export default app;
