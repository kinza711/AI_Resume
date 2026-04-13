import React from "react";
import { MdAutoAwesome, MdDownload, MdContentCopy } from "react-icons/md";

export default function PreviewSection({ covertext }) {
  return (
    <section className="w-full mt-10">
      <div className="relative">
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#5f00e3] to-[#ff5e8e] blur-2xl opacity-5 rounded-xl"></div>

        {/* Card */}
        <div className="relative bg-[#ffffff] rounded-xl overflow-hidden border border-white/50 shadow-2xl">
          {/* Header */}
          <div className="px-6 sm:px-8 py-4 bg-[#f2f4f6] border-b border-[#c6c5d4]/30 flex justify-between items-center flex-wrap gap-3">
            {/* Dots */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ba1a1a]/20"></span>
              <span className="w-3 h-3 rounded-full bg-[#cfbcff]"></span>
              <span className="w-3 h-3 rounded-full bg-[#8690ee]/30"></span>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button className="flex items-center gap-1 text-xs font-bold text-[#454652] hover:text-[#5f00e3] transition">
                <MdDownload className="text-sm" />
                Export PDF
              </button>

              <button className="flex items-center gap-1 text-xs font-bold text-[#454652] hover:text-[#5f00e3] transition">
                <MdContentCopy className="text-sm" />
                Copy
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 md:p-12 min-h-[500px] text-[#191c1e] leading-relaxed space-y-6">
            {/* Header Info */}
            <div className="space-y-1 mb-6">
              <h4 className="text-xl font-bold text-[#000666]">
                {covertext?.name || "Alex Rivera"}
              </h4>
              <p className="text-sm text-[#454652] font-medium">
                {covertext?.location || "San Francisco, CA"} |{" "}
                {covertext?.email || "Alex@email.com"}
              </p>
            </div>

            {/* To Section */}
            <div className="space-y-1 mb-8">
              <p className="text-sm text-[#454652] font-bold">
                To: Hiring Manager
              </p>
              <p className="text-sm text-[#454652]">FutureScale Tech Corp.</p>
            </div>

            {/* Body */}
            <p className="text-sm font-medium">Dear Hiring Manager,</p>

            {/* <div className="space-y-4">
              {covertext?.coverlatter?.split("\n\n").map((para, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-xl border shadow-sm"
                >
                  <p className="text-sm leading-relaxed">{para}</p>
                </div>
              ))}
            </div> */}

            <p className="text-sm font-medium">
              I am writing to express my enthusiastic interest in the Senior
              Product Designer position at FutureScale Tech Corp. I admire your
              commitment to user-centric innovation.
            </p>

            <p className="text-sm font-medium">
              In my recent role, I led a redesign that increased retention by
              40%. My approach blends data with storytelling to create impactful
              user experiences.
            </p>

            {/* AI Insight */}
            <div className="bg-[#e9ddff]/40 p-5 rounded-lg border border-[#cfbcff]/40">
              <div className="flex gap-2 items-center mb-2">
                <MdAutoAwesome className="text-[#5f00e3] text-sm" />
                <span className="text-[10px] font-black uppercase text-[#5f00e3]">
                  AI Analysis Insight
                </span>
              </div>

              <p className="text-xs text-[#000666] italic">
                "Your experience aligns strongly with the job's international
                expansion focus."
              </p>
            </div>

            <p className="text-sm font-medium">
              I look forward to contributing to your team’s success.
            </p>

            {/* Footer */}
            <div className="pt-6">
              <p className="text-sm font-medium">Best Regards,</p>
              <p className="text-lg font-bold text-[#000666] mt-2">
                Alex Rivera
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Chips */}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <div className="rounded-full bg-[#e0e0ff] px-4 py-2 flex items-center gap-2 animate-pulse">
          <MdAutoAwesome className="text-xs text-[#000767]" />
          <span className="text-[10px] font-bold text-[#000767]">
            Analyzing tone...
          </span>
        </div>

        <div className="rounded-full bg-[#ffd9df] px-4 py-2 flex items-center gap-2">
          <span className="text-[10px] font-bold text-[#8f003f]">
            89% Match Strength
          </span>
        </div>
      </div>
    </section>
  );
}
