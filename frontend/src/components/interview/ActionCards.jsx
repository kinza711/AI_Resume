import React, { useState } from "react";
import { VscRobot } from "react-icons/vsc";
import { IoIosBriefcase } from "react-icons/io";
import { Link } from "react-router-dom";
import UpgradePro from "../popups/UpgradePro";

export default function ActionCards() {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      {/* Practice Interview */}
      <div className="group relative overflow-hidden bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:scale-[1.01] transition-all">
        <div className="absolute top-0 right-0 p-10 text-[#5f00e3] opacity-20">
          <VscRobot size={150} />
        </div>

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl  bg-[#e0e0ff] flex items-center justify-center mb-6">
            <VscRobot size={40} />
          </div>

          <h2 className="text-2xl font-bold text-[#000666] mb-3">
            Practice Interview
          </h2>

          <p className="text-[#454652] mb-8 max-w-sm">
            Simulate a real-time AI interview with instant feedback.
          </p>

          <button className="bg-gradient-to-r from-[#5f00e3] to-[#ff5e8e] text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition">
            <Link to="/interdetails">Start Session →</Link>
          </button>
        </div>
      </div>

      {/* Job Interview */}
      <div className="group relative overflow-hidden bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:scale-[1.01] transition-all">
        <div className="absolute top-0 right-0 text-[#FFEFF3] p-8 opacity-100">
          <IoIosBriefcase size={150} />
        </div>

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-[#ffb1c1]/20 flex items-center justify-center mb-6">
            <IoIosBriefcase size={40} />
          </div>

          <h2 className="text-2xl font-bold text-[#000666] mb-3">
            Job Interview
          </h2>

          <p className="text-[#454652] mb-8 max-w-sm">
            Prepare with company-specific insights.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="border-2 border-[#c6c5d4] text-[#000666] px-6 py-3 rounded-full font-bold hover:bg-[#eceef0] transition flex items-center gap-2"
          >
            Add Job Details +
          </button>
          {/* MODAL */}
          {open && <UpgradePro onClose={() => setOpen(false)} />}
        </div>
      </div>
    </div>
  );
}
