const fs = require("fs");
const pdfParse = require("pdf-parse");

const fileBuffer = fs.readFileSync("./kinza.pdf");

pdfParse(fileBuffer)
  .then(data => {
    console.log("------ Parsed PDF Text ------\n");
    console.log(data.text);
  })
  .catch(err => console.error(err));