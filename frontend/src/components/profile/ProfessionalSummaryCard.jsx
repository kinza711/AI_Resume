import { BsStars } from "react-icons/bs";
import { FaHeadSideVirus } from "react-icons/fa6";

export default function ProfessionalSummaryCard({ formData, handleChange }) {
  return (
    <section className="bg-white/70 backdrop-blur-[20px] rounded-lg p-8 shadow-sm overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#e9ddff]/30 blur-3xl -z-10"></div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-headline font-bold text-[#000666] flex items-center gap-2">
          <span className="material-symbols-outlined text-[#ff5e8e]">
            <FaHeadSideVirus />
          </span>
          Professional Summary
        </h2>
        <button className="flex items-center gap-2 px-4 py-1.5 bg-[#e0e0ff] text-[#000767] rounded-full text-xs font-bold hover:bg-[#bdc2ff] transition-colors">
          <span className="material-symbols-outlined text-sm">
            <BsStars />
          </span>
          AI REWRITE
        </button>
      </div>
      <div className="relative">
        <textarea
          type="text"
          name="summery"
          value={formData?.summery}
          onChange={handleChange}
          className="w-full placeholder:text-gray-400  bg-[#e6e8ea] border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-[#5f00e3] focus:bg-white transition-all font-medium text-[#191c1e] leading-relaxed"
          rows="6"
          placeholder="Tell us about your career journey..."
        />
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-white border border-[#c6c5d4]/30 text-xs font-medium text-[#454652] rounded-full">
            Focused
          </span>
          <span className="px-3 py-1 bg-white border border-[#c6c5d4]/30 text-xs font-medium text-[#454652] rounded-full">
            Authoritative
          </span>
          <span className="px-3 py-1 bg-white border border-[#c6c5d4]/30 text-xs font-medium text-[#454652] rounded-full">
            Results-Driven
          </span>
        </div>
      </div>
    </section>
  );
}
