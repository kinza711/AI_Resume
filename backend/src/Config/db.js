import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database is connected succesfully ");
  } catch (err) {
    console.error("Database not connected", err);
  }
};

export default ConnectDB;
