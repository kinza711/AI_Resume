import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../services/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    let folder = "Job_folder";

    // if file is doc or pdf
    if (file.mimetype === "application/pdf") {
      folder = "Resume/CVs";

      return { folder, resource_type: "auto", format: "pdf" }; // ⚡ raw here
    }
    return {
      folder: folder,
      resource_type: "auto",
      allowed_formats: ["jpg", "png", "jpeg", "pdf", "doc", "docx"],
    };
  },
});

const upload = multer({ storage });

export default upload;
