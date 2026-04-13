import React from "react";
import { FaEye } from "react-icons/fa";

export default function ProTips() {
  return (
    <div className="flex flex-col gap-6">
      {/* AI Tip */}
      <div className="bg-[#1a237e] p-6 rounded-4xl text-white relative overflow-hidden">
        <span className="text-xs font-bold bg-[#5f00e3] px-3 py-1 rounded-full">
          AI Analysis
        </span>

        <h4 className="text-lg font-bold mt-4 mb-2">Master the STAR Method</h4>

        <p className="text-sm text-[#bdc2ff]">
          Your recent answers lacked specific results. Remember: Situation,
          Task, Action, Result.
        </p>
      </div>

      {/* Feedback */}
      <div className="bg-[#ff5e8e]/10 p-6 rounded-3xl border border-[#ff5e8e]/20">
        <h4 className="text-[#FF5E8E] flex items-center gap-3 font-bold mb-2">
          {" "}
          <FaEye />
          Eye Contact Matters
        </h4>

        <p className="text-sm text-[#454652]">
          Our AI detected a 15% decrease in direct lens contact during technical
          sections.
        </p>
      </div>

      {/* Banner */}
      <div className="relative rounded-3xl overflow-hidden h-40">
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#000666]/80 to-transparent flex items-end p-4">
          <p className="text-white font-bold text-sm">
            Join the 'Confidence' Masterclass starting in 2h
          </p>
        </div>
      </div>
    </div>
  );
}
