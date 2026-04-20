import React, { useState } from "react";
import { LuFileUp } from "react-icons/lu";
import { BsStars } from "react-icons/bs";
import api from "../../services/api";

export default function GeneratorForm({ setCoverText }) {
  const [file, setFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [tone, setTone] = useState("professional");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  const handleUpload = async () => {
    if (!file) return alert("Please select a resume");

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("jobDesc", jobDesc);
    formData.append("tone", tone);

    try {
      setLoading(true);

      const res = await api.post("/cover", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // FIX: backend field
      const raw = res.data.data.coverlatter;

      // SAFE PARSE
      const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;

      console.log("FINAL PARSED:", parsed);

      setCoverText(parsed);
      (setFile(""), setJobDesc(""));
    } catch (err) {
      console.error(err);
      setError("Failed to generate cover letter");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Upload (UI only for now) */}

        <div
          className="rounded-3xl p-6 flex flex-col  bg-white transition-colors cursor-pointer group"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <h3 className="font-bold text-[#000666] mb-4">Your Experience</h3>
          <div className="inner border-2 border-dashed border-[#c6c5d4] p-10 text-center flex flex-col items-center justify-center rounded-3xl">
            <span className=" text-[#767683] text-5xl mb-4 group-hover:text-[#5f00e3] transition-colors">
              {/* <TbCloudUpload /> */}
              <LuFileUp size={40} />
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
          </div>
        </div>

        {/* Job Description */}
        <div className="bg-white p-6 rounded-3xl shadow">
          <h3 className="font-bold text-[#000666] mb-4">Job Description</h3>
          <textarea
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
            className="w-full h-[150px] bg-[#e6e8ea] p-4 rounded-3xl outline-none"
            placeholder="Paste job description..."
          />
        </div>
      </div>

      {/* Tone + Button */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Tone */}
        <div className="flex-1 bg-white p-6 rounded-3xl shadow">
          <h3 className="font-bold text-[#000666] mb-4">Tone</h3>

          <div className="flex gap-3 flex-wrap">
            {["professional", "creative", "minimal"].map((t) => (
              <button
                key={t}
                onClick={() => setTone(t)}
                className={`px-4 py-2 rounded-full text-sm transition 
                ${tone === t ? "bg-[#000666] text-white" : "bg-[#e6e8ea]"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={handleUpload}
          className="md:w-1/3 bg-gradient-to-r from-[#5f00e3] to-[#ff5e8e] text-white rounded-3xl font-bold text-lg py-4 px-6 flex items-center justify-center gap-2 hover:scale-105 transition-all duration-200 shadow-lg"
        >
          <BsStars className="text-xl" />
          <span>{loading ? "Generating..." : "Generate Now"}</span>
        </button>
      </div>

      {/* Error */}
      {error && <p className="text-red-500 font-medium">{error}</p>}
    </div>
  );
}
