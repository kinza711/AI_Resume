import { useState } from "react";
import { BsStars } from "react-icons/bs";
import { TbCloudUpload } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { FaBolt } from "react-icons/fa6";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function LeftPanel({ setImprovedText }) {
  const [file, setFile] = useState(null);
  const [improvementType, setImprovementType] = useState("full");
  const [jobRole, setJobRole] = useState("");
  const [customRole, setCustomRole] = useState(""); // user-defined
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle drag & drop
  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handle upload
  const handleUpload = async (e) => {
    e.preventDefault(); // prevent form submit reload

    // if (!file) {
    //   alert("Please select a resume first");
    //   return;
    // }

    const roleToSend = jobRole === "other" ? customRole : jobRole;

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("improvementType", improvementType);
    // formData.append("jobRole", jobRole);
    formData.append("jobRole", roleToSend);

    try {
      setLoading(true);
      const res = await api.post("/upload", formData);

      const parsed = JSON.parse(res.data.data.improvedText);
      setImprovedText(parsed); // IMPORTANT
      //setJobRole(parsed);
      alert(res.data.message);
      setFile(null);
      //navigate("/airesume");
    } catch (err) {
      setError("Please select a resume first");
      console.error(err);
      //alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Upload Card */}
      <form
        onSubmit={handleUpload}
        encType="multipart/form-data"
        className="bg-[#ffffff] rounded-3xl p-8 shadow-[0_20px_40px_rgba(25,28,30,0.06)] transition-all"
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[#5f00e3] text-2xl">
            <BsStars />
          </span>
          <h2 className="font-headline font-bold text-xl text-[#000666]">
            New Project
          </h2>
        </div>

        {/* Drag & Drop */}
        <div
          className="border-2 border-dashed border-[#c6c5d4] rounded-xl p-10 flex flex-col items-center justify-center bg-[#f2f4f6]/30 hover:bg-[#f2f4f6] transition-colors cursor-pointer group"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <span className="text-[#767683] text-5xl mb-4 group-hover:text-[#5f00e3] transition-colors">
            <TbCloudUpload />
          </span>
          <p className="text-[#454652] font-medium mb-4 text-center">
            Drag and drop your resume here or
          </p>

          {/* Hidden input */}
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
            id="resume-upload"
          />
          <label
            htmlFor="resume-upload"
            className="px-6 py-2 rounded-full border border-[#000666] text-[#000666] font-bold text-sm hover:bg-[#000666] hover:text-white transition-all cursor-pointer"
          >
            Select Resume
          </label>

          {/* Selected file name */}
          {file && <p className="text-sm mt-2">{file.name}</p>}

          <p className="text-[#767683] text-xs mt-4">
            Supports PDF, DOCX (Max 5MB)
          </p>
          {/* {error && <p className="text-[#767683] text-xs mt-4">{error}</p>} */}
          {error && <p className="text-red-500 font-medium">{error}</p>}
        </div>

        {/* Improvement Type */}
        <div className="mt-8 space-y-4">
          <label className="block text-sm font-bold text-[#000666] mb-1">
            Improvement Type
          </label>
          <div className="relative">
            <select
              value={improvementType}
              onChange={(e) => setImprovementType(e.target.value)}
              className="w-full bg-[#e6e8ea] border-none rounded-xl py-3 px-4 appearance-none focus:ring-2 focus:ring-[#5f00e3]/20 font-medium"
            >
              <option value="full">Full resume improvement</option>
              <option value="text">Text-only improvement</option>
              <option value="ATS">ATS Optimization</option>
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#767683] pointer-events-none">
              <IoIosArrowDown />
            </span>
          </div>
        </div>

        {/* Job Type */}
        <div className="mt-8 space-y-4">
          <label className="block text-sm font-bold text-[#000666] mb-1">
            Job Type
          </label>
          <div className="relative">
            <select
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
              className="w-full bg-[#e6e8ea] border-none rounded-xl py-3 px-4 appearance-none focus:ring-2 focus:ring-[#5f00e3]/20 font-medium"
            >
              <option value="fullstack">Full-Stack Developer</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="react">React Developer</option>
              <option value="ai">AI-Integration</option>
              <option value="wordpress">Wordpress Developer</option>
              <option value="other">Other</option>
            </select>
            {jobRole === "other" && (
              <input
                type="text"
                placeholder="Enter your job role"
                value={customRole}
                onChange={(e) => setCustomRole(e.target.value)}
                className="mt-2 w-full rounded-xl border py-2 px-4"
              />
            )}
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#767683] pointer-events-none">
              <IoIosArrowDown />
            </span>
          </div>
        </div>

        {/* Upload Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full flex items-center justify-center gap-2 bg-gradient-to-tr from-[#5f00e3] to-[#ff5e8e] text-white rounded-full py-4 mt-8 font-bold text-lg shadow-xl glow-hover transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <FaBolt />
          {loading ? "Uploading..." : "Improve Resume"}
        </button>
      </form>

      {/* Info Card */}
      <div className="bg-[#1a237e] text-white p-6 rounded-3xl relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="font-headline font-bold text-lg mb-2">
            AI Pulse Active
          </h3>
          <p className="text-indigo-200 text-sm leading-relaxed">
            Our neural networks are ready to analyze 45+ metrics including
            keyword density, tone impact, and structural clarity.
          </p>
        </div>
        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
