import React, { useState } from "react";
import { LuFileUp } from "react-icons/lu";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function GeneratorFormData() {
  const [file, setFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [tone, setTone] = useState("professional");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Drag & drop
  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // 🔥 START INTERVIEW FLOW
  const handleStartInterview = async () => {
    if (!file || !jobDesc) {
      return alert("Resume & job Details both are required");
    }

    try {
      setLoading(true);
      setError("");

      const formData = new FormData();
      formData.append("resume", file);
      formData.append("jobDesc", jobDesc);
      formData.append("tone", tone);

      // optional: upload resume (if needed backend pe)
      //await api.post("/cover", formData);

      // 🔥 start interview
      const res = await api.post(
        "/start",
        formData,
        //     {
        //     jobDesc,
        //     resume,
        //   }
      );

      const firstQuestion = res.data;

      // 👉 move to interview page
      navigate("/live", {
        state: {
          jobDesc,
          firstQuestion,
        },
      });
    } catch (err) {
      console.error(err);
      setError("Failed to start interview");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Upload */}
        <div
          className="rounded-3xl p-6 flex flex-col bg-white transition-colors cursor-pointer group"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <h3 className="font-bold text-[#000666] mb-4">Your Experience</h3>

          <div className="inner border-2 border-dashed border-[#c6c5d4] p-10 text-center flex flex-col items-center justify-center rounded-3xl">
            <span className="text-[#767683] text-5xl mb-4 group-hover:text-[#5f00e3] transition-colors">
              <LuFileUp size={40} />
            </span>

            <p className="text-[#454652] font-medium mb-4 text-center">
              Drag and drop your resume here or
            </p>

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

      {/* Bottom Section (UNCHANGED UI) */}
      <div className="mt-10 flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
          <span className="flex items-center justify-center gap-2">
            <FaRegCircleCheck color="green" size={16} /> Deep Analysis Enabled
          </span>
          <span className="flex items-center justify-center gap-2">
            <FaRegCircleCheck color="green" size={16} /> Voice Interaction
            Active
          </span>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 font-medium text-center">{error}</p>
        )}
        <button
          onClick={handleStartInterview}
          disabled={loading}
          className="px-8 sm:px-12 py-4 rounded-full text-white font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition disabled:opacity-50"
        >
          {loading ? "Starting..." : "Start Interview →"}
        </button>

        <p className="text-xs text-gray-400 max-w-md">
          By starting, Lumina AI will generate a tailored set of technical and
          behavioral questions based on your unique profile.
        </p>
      </div>
    </div>
  );
}
