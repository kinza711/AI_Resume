const pdfParse = require("pdf-parse");
const mammoth = require("mammoth");

const parseResume = async (file) => {
  let text = "";

  if (file.mimetype.includes("pdf")) {
    const data = await pdfParse(file.buffer);
    text = data.text;
  } else if (file.mimetype.includes("word")) {
    const result = await mammoth.extractRawText({ buffer: file.buffer });
    text = result.value;
  } else {
    throw new Error("Unsupported file type");
  }

  return text;
};

module.exports = { parseResume };
