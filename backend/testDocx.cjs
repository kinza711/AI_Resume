const fs = require("fs");
const mammoth = require("mammoth");

const fileBuffer = fs.readFileSync("./carwash.docx");

mammoth
  .extractRawText({ buffer: fileBuffer })
  .then((result) => {
    console.log("------ Parsed DOCX Text ------\n");
    console.log(result.value);
  })
  .catch((err) => console.error(err));
