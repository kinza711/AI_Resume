import { BsStars } from "react-icons/bs";
import { TbCloudUpload } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { FaBolt } from "react-icons/fa6";

export default function LeftPanel() {
  return (
    <div className="space-y-8">
      {/* Upload Card */}
      <div className="bg-[#ffffff] rounded-3xl  p-8 shadow-[0_20px_40px_rgba(25,28,30,0.06)] transition-all">
        <div className="flex items-center gap-2 mb-6">
          <span className="material-symbols-outlined text-[#5f00e3]">
            <BsStars />
          </span>
          <h2 className="font-headline font-bold text-xl text-[#000666]">
            New Project
          </h2>
        </div>
        <div className="border-2 border-dashed border-[#c6c5d4] rounded-xl p-10 flex flex-col items-center justify-center bg-[#f2f4f6]/30 hover:bg-[#f2f4f6] transition-colors cursor-pointer group">
          <span className="material-symbols-outlined text-[#767683] text-5xl mb-4 group-hover:text-[#5f00e3] transition-colors">
            <TbCloudUpload />
          </span>
          <p className="text-[#454652] font-medium mb-4 text-center">
            Drag and drop your resume here or
          </p>
          <button className="px-6 py-2 rounded-full border border-[#000666] text-[#000666] font-bold text-sm hover:bg-[#000666] hover:text-white transition-all">
            Select Resume
          </button>
          <p className="text-[#767683] text-xs mt-4">
            Supports PDF, DOCX (Max 5MB)
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <label className="block text-sm font-bold text-[#000666] mb-1">
            Improvement Type
          </label>
          <div className="relative">
            <select className="w-full bg-[#e6e8ea] border-none rounded-xl py-3 px-4 appearance-none focus:ring-2 focus:ring-[#5f00e3]/20 font-medium">
              <option>Full resume improvement</option>
              <option>Text-only improvement</option>
              <option>ATS Optimization</option>
            </select>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#767683] pointer-events-none">
              <IoIosArrowDown />
            </span>
          </div>
        </div>
        <button className="w-full bg-gradient-to-tr from-[#5f00e3] to-[#ff5e8e] text-white rounded-full py-4 mt-8 font-bold text-lg shadow-xl glow-hover flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">
            <FaBolt />
          </span>
          Improve Resume
        </button>
      </div>

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
