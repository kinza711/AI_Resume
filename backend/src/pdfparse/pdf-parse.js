// import { log } from "console";
// import fs from "fs";
// import pdf from "pdf-parse";

// let dataBuffer = fs.readFileSync("../files/Kinza MERN + AI.pdf");
// pdf(dataBuffer).then(function (data) {
//   console.log("pdf parser is", data.text);
// });

// pdfparse/pdfParse.js

// pdfparse/pdfParse.js
// pdfparse/pdfParse.js
import fs from "fs";

export const parsePDF = async (filePath) => {
  try {
    const pdf = (await import("pdf-parse")).default; // dynamic import + default
    // __dirname jaisa equivalent
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    const filePath = path.join(__dirname, "../files", fileName);
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    return data.text; // raw text return
  } catch (err) {
    throw new Error("PDF parse error: " + err.message);
  }
};
