import React, { useState } from "react";
import { LuFileUp } from "react-icons/lu";
import { BsStars } from "react-icons/bs";
import api from "../../services/api";

export default function GeneratorForm() {
  const [resume, setResume] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [tone, setTone] = useState("professional");
  const [loading, setLoading] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");
  const [error, setError] = useState("");

  const generateCoverLetter = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await api.post("/api/cover-letter", {
        resume,
        jobDesc,
        tone,
      });

      setCoverLetter(res.data.coverLetter);
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
        {/* Upload */}
        <div className="bg-white p-6 rounded-3xl shadow">
          <h3 className="font-bold text-[#000666] mb-4">Your Experience</h3>
          <div className="border-2 border-dashed border-[#c6c5d4] p-10 text-center flex flex-col items-center justify-center rounded-3xl">
            <LuFileUp size={40} />
            <div className="text text-center justify-center">
              Drag and drop your CV here or{" "}
              <span className="text-[#5f00e3] font-bold">browse files</span>{" "}
              <br />
              <span className="text-xs text-gray-600">
                PDF, DOCX up to 10MB
              </span>
            </div>
          </div>
        </div>

        {/* Job Desc */}
        <div className="bg-white p-6 rounded-3xl shadow">
          <h3 className="font-bold text-[#000666] mb-4">Job Description</h3>
          <textarea
            className="w-full h-[150px] bg-[#e6e8ea] p-4 rounded-3xl outline-none"
            placeholder="Paste job description..."
          />
        </div>
      </div>

      {/* Tone + Button */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 bg-white p-6 rounded-3xl shadow">
          <h3 className="font-bold text-[#000666] mb-4">Tone</h3>

          <div className="flex gap-3 flex-wrap">
            {["Professional", "Creative", "Minimal"].map((t) => (
              <button
                key={t}
                className="px-4 py-2 rounded-full bg-[#e6e8ea] text-sm"
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <button className="md:w-1/3 bg-gradient-to-r from-[#5f00e3] to-[#ff5e8e] text-white rounded-3xl font-bold text-lg py-4 px-6 flex items-center justify-center gap-2 hover:scale-105 transition-all duration-200 shadow-lg">
          <BsStars className="text-xl" />
          <span>Generate Now</span>
        </button>
      </div>
    </div>
  );
}
