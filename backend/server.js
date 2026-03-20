import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import ConnectDB from "./src/Config/db.js";

ConnectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
