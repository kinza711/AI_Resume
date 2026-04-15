import { VscZoomIn } from "react-icons/vsc";
import { IoMdPrint } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
// sab imports upar
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumeTemplate from "./WatermarkTemplate";
import { useState } from "react";
import UpgradePro from "../popups/UpgradePro";

export default function RightPanel({ improvedText }) {
  const [open, setOpen] = useState(false);

  <div className="text-sm text-[#191c1e] leading-relaxed font-medium whitespace-pre-line">
    {improvedText || "Upload a resume to see AI-enhanced preview..."}
  </div>;

  return (
    <div className="bg-[#f2f4f6] rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(25,28,30,0.06)] border border-white">
      {/* Preview Header */}
      <div className="bg-[#eceef0] px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#E1B2B4]/80"></div>
            <div className="w-3 h-3 rounded-full bg-[#CDBAF9]/80"></div>
            <div className="w-3 h-3 rounded-full bg-[#8690ee]/80"></div>
          </div>
          <span className="text-xs font-bold text-[#767683] uppercase tracking-widest ml-4">
            AI Enhanced Preview
          </span>
        </div>
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-[#767683] cursor-pointer hover:text-[#000666] transition-colors">
            <VscZoomIn />
          </span>
          <span className="material-symbols-outlined text-[#767683] cursor-pointer hover:text-[#000666] transition-colors">
            <IoMdPrint />
          </span>
        </div>
      </div>

      {/* Preview Body */}
      <div id="resume-preview" className="p-10 h-full overflow-y-auto bg-white">
        <div className="max-w-2xl mx-auto space-y-8 font-['Inter']">
          <div className="text-center pb-8 border-b border-[#e6e8ea]">
            <h2 className="text-3xl font-bold text-[#000666] mb-1">
              {improvedText?.name || "Alex Sterling"}
            </h2>
            <p className="text-[#454652] font-medium italic">
              {improvedText.title ||
                "Senior Project Architect | RIBA Certified"}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-black text-[#5f00e3] uppercase tracking-[0.2em]">
              Professional Summary
            </h3>
            <p className="text-sm text-[#191c1e] leading-relaxed font-medium">
              {improvedText.summary ||
                "Visionary Architect with over 12 years of experience leading high-profile urban development projects that reduced carbon footprints by 40% across metropolitan residential clusters. Expert in"}

              {/* <span className="bg-[#ffd9df] text-[#8f003f] px-1 rounded border-b-2 border-[#ff5e8e]">
                {improvedText.role || "  AI-assisted generative design"}
              </span>
              and BIM coordination. */}
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-black text-[#5f00e3] uppercase tracking-[0.2em]">
              Key Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {improvedText?.skills?.length > 0 ? (
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {improvedText.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-[#e0e0ff] text-[#000767] px-3 py-1 rounded-full text-xs font-bold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "Node.js",
                    "MongoDB",
                    "Express.js",
                    "JavaScript",
                    "Tailwind CSS",
                  ].map((skill, i) => (
                    <span
                      key={i}
                      className="bg-[#e0e0ff] text-[#000767] px-3 py-1 rounded-full text-xs font-bold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* experince */}
          <div className="space-y-4">
            <h3 className="text-xs font-black text-[#5f00e3] uppercase tracking-[0.2em]">
              Professional Experience
            </h3>

            {/* Experience */}
            {improvedText?.experience ? (
              <div className="space-y-4">
                {improvedText.experience.map((exp, i) => (
                  <div
                    key={i}
                    className="relative pl-6 border-l-2 border-[#e6e8ea]"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#5f00e3]"></div>
                    <div className="mb-1 flex justify-between items-baseline">
                      <h4 className="font-bold text-[#000666]">
                        {exp.role || "Software Developer"} |{" "}
                        {exp.company || "Your Company"}
                      </h4>
                      <span className="text-xs text-[#767683]">
                        {exp.duration || "2024 — Present"}
                      </span>
                    </div>
                    <ul className="text-sm text-[#454652] space-y-1 list-disc ml-4">
                      {exp.details?.length > 0 ? (
                        exp.details.map((d, j) => <li key={j}>{d}</li>)
                      ) : (
                        <>
                          <li>Developed and maintained web applications.</li>
                          <li>
                            Collaborated with team to deliver projects on time.
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              // Jab koi resume upload nahi hua
              <div className="relative pl-6 border-l-2 border-[#e6e8ea]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#5f00e3]"></div>
                <div className="mb-1 flex justify-between items-baseline">
                  <h4 className="font-bold text-[#000666]">
                    Software Developer | Your Company
                  </h4>
                  <span className="text-xs text-[#767683]">2024 — Present</span>
                </div>
                <ul className="text-sm text-[#454652] space-y-1 list-disc ml-4">
                  <li>Developed and maintained web applications.</li>
                  <li>Collaborated with team to deliver projects on time.</li>
                </ul>
              </div>
            )}
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h3 className="text-xs font-black text-[#5f00e3] uppercase tracking-[0.2em]">
              Projects
            </h3>

            {/* Experience */}
            {improvedText?.projects ? (
              improvedText.projects.map((proj, i) => (
                <div
                  key={i}
                  className="relative pl-6 border-l-2 border-[#e6e8ea]"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#5f00e3]"></div>
                  <div className="mb-1 flex justify-between items-baseline">
                    <h4 className="font-bold text-[#000666]">{proj.title}</h4>
                    <span className="text-xs text-[#767683]">{proj.live}</span>
                  </div>
                  <p className="text-xs text-[#5f00e3] mb-2">
                    Tech: {proj.techstack?.join(", ")}
                  </p>
                  {/* Details add karo */}
                  {proj.details?.length > 0 && (
                    <ul className="text-sm text-[#454652] space-y-1 list-disc ml-4">
                      {proj.details.map((d, j) => (
                        <li key={j}>{d}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            ) : (
              // default
              <div className="relative pl-6 border-l-2 border-[#e6e8ea]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#5f00e3]"></div>
                <h4 className="font-bold text-[#000666]">
                  LMS Website with AI-Integration
                </h4>
                <p className="text-xs text-[#5f00e3]">Tech: MERN, OpenAI</p>
                <ul className="text-sm text-[#454652] space-y-1 list-disc ml-4 mt-2">
                  <li>Built full-stack LMS with AI study assistant.</li>
                  <li>Role-based access for Admin, Student, Instructor.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <footer className="mt-8 pt-6 border-t border-[#e6e8ea]">
          <h3 className="text-xs font-black text-[#5f00e3] uppercase tracking-[0.2em] mb-4">
            Professional Links
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={improvedText?.linkedin || "#"}
              target="_blank"
              className="flex items-center gap-3 p-3 rounded-xl bg-[#f2f4f6] hover:bg-[#e0e0ff] transition-colors group"
            >
              <span className="w-8 h-8 rounded-full bg-[#0077b5] flex items-center justify-center text-white text-xs font-bold">
                in
              </span>
              <div>
                <p className="text-xs text-[#767683] font-medium">LinkedIn</p>
                <p className="text-xs text-[#000666] font-bold truncate max-w-[150px] group-hover:text-[#5f00e3]">
                  {improvedText?.linkedin || "linkedin.com/in/yourprofile"}
                </p>
              </div>
            </a>

            <a
              href={improvedText?.github || "#"}
              target="_blank"
              className="flex items-center gap-3 p-3 rounded-xl bg-[#f2f4f6] hover:bg-[#e0e0ff] transition-colors group"
            >
              <span className="w-8 h-8 rounded-full bg-[#191c1e] flex items-center justify-center text-white text-xs font-bold">
                gh
              </span>
              <div>
                <p className="text-xs text-[#767683] font-medium">GitHub</p>
                <p className="text-xs text-[#000666] font-bold truncate max-w-[150px] group-hover:text-[#5f00e3]">
                  {improvedText?.github || "github.com/yourusername"}
                </p>
              </div>
            </a>

            <a
              href={`mailto:${improvedText?.email || ""}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#f2f4f6] hover:bg-[#e0e0ff] transition-colors group"
            >
              <span className="w-8 h-8 rounded-full bg-[#ff5e8e] flex items-center justify-center text-white text-xs font-bold">
                @
              </span>
              <div>
                <p className="text-xs text-[#767683] font-medium">Email</p>
                <p className="text-xs text-[#000666] font-bold truncate max-w-[150px] group-hover:text-[#5f00e3]">
                  {improvedText?.email || "your@email.com"}
                </p>
              </div>
            </a>

            <a
              href={improvedText?.portfolio || "#"}
              target="_blank"
              className="flex items-center gap-3 p-3 rounded-xl bg-[#f2f4f6] hover:bg-[#e0e0ff] transition-colors group"
            >
              <span className="w-8 h-8 rounded-full bg-[#5f00e3] flex items-center justify-center text-white text-xs font-bold">
                🌐
              </span>
              <div>
                <p className="text-xs text-[#767683] font-medium">Portfolio</p>
                <p className="text-xs text-[#000666] font-bold truncate max-w-[150px] group-hover:text-[#5f00e3]">
                  {improvedText?.portfolio || "yourportfolio.com"}
                </p>
              </div>
            </a>
          </div>
        </footer>
      </div>

      {/* Preview Footer */}
      <div className="p-8 bg-[#ECEEF0] text-center space-y-4">
        {/* <button className="bg-gradient-to-tr from-[#5f00e3] to-[#ff5e8e] text-white rounded-full px-12 py-4 font-bold text-lg shadow-xl glow-hover inline-flex items-center gap-2">
          <span className="material-symbols-outlined">
            <FiDownload />
          </span>
          Download Improved Resume
        </button> */}
        {/* Download button */}
        <PDFDownloadLink
          document={<ResumeTemplate data={improvedText} showWatermark={true} />}
          fileName="improved-resume.pdf"
        >
          {({ loading }) => (
            <button className="bg-gradient-to-tr from-[#5f00e3] to-[#ff5e8e] text-white rounded-full px-12 py-4 font-bold text-lg shadow-xl glow-hover inline-flex items-center gap-2">
              <FiDownload />
              {loading ? "Preparing PDF..." : "Download Improved Resume"}
            </button>
          )}
        </PDFDownloadLink>

        <p className="text-[#454652] py-2 text-xs font-medium">
          Guest users will have a small watermark on the final PDF.{" "}
          <button
            onClick={() => setOpen(true)}
            className="text-[#5f00e3] font-bold hover:underline"
            href="#"
          >
            Remove watermark
          </button>
          {/* MODAL */}
          {open && <UpgradePro onClose={() => setOpen(false)} />}
        </p>
      </div>
    </div>
  );
}
