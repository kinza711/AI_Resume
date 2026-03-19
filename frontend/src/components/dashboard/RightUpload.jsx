import { VscZoomIn } from "react-icons/vsc";
import { IoMdPrint } from "react-icons/io";
import { FiDownload } from "react-icons/fi";

export default function RightPanel() {
  return (
    <div className="bg-[#f2f4f6] rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(25,28,30,0.06)] border border-white">
      {/* Preview Header */}
      <div className="bg-[#eceef0] px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#E1B2B4]/30"></div>
            <div className="w-3 h-3 rounded-full bg-[#CDBAF9]/30"></div>
            <div className="w-3 h-3 rounded-full bg-[#8690ee]/30"></div>
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
      <div className="p-10 h-[600px] overflow-y-auto bg-white">
        <div className="max-w-2xl mx-auto space-y-8 font-['Inter']">
          <div className="text-center pb-8 border-b border-[#e6e8ea]">
            <h2 className="text-3xl font-bold text-[#000666] mb-1">
              Alex Sterling
            </h2>
            <p className="text-[#454652] font-medium italic">
              Senior Project Architect | RIBA Certified
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-black text-[#5f00e3] uppercase tracking-[0.2em]">
              Professional Summary
            </h3>
            <p className="text-sm text-[#191c1e] leading-relaxed font-medium">
              Visionary Architect with over 12 years of experience leading
              high-profile urban development projects.
              <span className="bg-[#e0faff] text-[#006064] px-1 rounded border-b-2 border-[#00bcd4]">
                Pioneered sustainable design frameworks
              </span>
              that reduced carbon footprints by 40% across metropolitan
              residential clusters. Expert in
              <span className="bg-[#ffd9df] text-[#8f003f] px-1 rounded border-b-2 border-[#ff5e8e]">
                AI-assisted generative design
              </span>
              and BIM coordination.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-black text-[#5f00e3] uppercase tracking-[0.2em]">
              Key Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#e0e0ff] text-[#000767] px-3 py-1 rounded-full text-xs font-bold">
                Urban Planning
              </span>
              <span className="bg-[#e0e0ff] text-[#000767] px-3 py-1 rounded-full text-xs font-bold">
                Revit/BIM Expert
              </span>
              <span className="bg-[#e0e0ff] text-[#000767] px-3 py-1 rounded-full text-xs font-bold">
                Sustainable LEED Cert
              </span>
              <span className="bg-[#e0e0ff] text-[#000767] px-3 py-1 rounded-full text-xs font-bold">
                Team Leadership
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-black text-[#5f00e3] uppercase tracking-[0.2em]">
              Professional Experience
            </h3>
            <div className="relative pl-6 border-l-2 border-[#e6e8ea]">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#5f00e3]"></div>
              <div className="mb-1 flex justify-between items-baseline">
                <h4 className="font-bold text-[#000666]">
                  Lead Architect | SkyLine Partners
                </h4>
                <span className="text-xs font-medium text-[#767683]">
                  2018 — Present
                </span>
              </div>
              <ul className="text-sm text-[#454652] space-y-2 list-disc ml-4">
                <li>
                  Spearheaded a $450M mixed-use development project in downtown
                  Seattle.
                </li>
                <li>
                  Implemented{" "}
                  <span className="bg-[#e0faff] text-[#006064] px-1 rounded border-b-2 border-[#00bcd4]">
                    modular construction workflows
                  </span>{" "}
                  increasing efficiency by 22%.
                </li>
                <li>Mentored a team of 15 junior architects and designers.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Footer */}
      <div className="p-8 bg-[#f2f4f6]/50 text-center space-y-4">
        <button className="bg-gradient-to-tr from-[#5f00e3] to-[#ff5e8e] text-white rounded-full px-12 py-4 font-bold text-lg shadow-xl glow-hover inline-flex items-center gap-2">
          <span className="material-symbols-outlined">
            <FiDownload />
          </span>
          Download Improved Resume
        </button>
        <p className="text-[#454652] text-xs font-medium">
          Guest users will have a small watermark on the final PDF.{" "}
          <a className="text-[#5f00e3] font-bold hover:underline" href="#">
            Remove watermark
          </a>
        </p>
      </div>
    </div>
  );
}
