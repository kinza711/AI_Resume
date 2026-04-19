import React from "react";
import { MdElectricBolt, MdSupportAgent, MdDownloadDone } from "react-icons/md";
import { BsStars, BsRocketTakeoff } from "react-icons/bs";
import { TiArrowForward } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import Logo from "../../assets/resumelogo.png";

export default function UpgradePro({ onClose }) {
  return (
    <div className="relative min-h-screen bg-[#d8dbdd] overflow-hidden font-sans">
      {/* 🌫 Background Blur */}
      <div className="fixed inset-0 z-0 blur-xl scale-105 pointer-events-none hidden sm:block">
        <div className="h-16 bg-white shadow flex items-center px-6">
          <h1 className="font-bold text-indigo-900">Lumina AI</h1>
        </div>
      </div>

      {/* 🌑 Overlay */}
      <div className="fixed inset-0 z-10 bg-black/10 backdrop-blur-md" />

      {/* 🌟 Modal */}
      <div className="fixed inset-0 z-20 flex items-center justify-center p-3 sm:p-4">
        <div
          className="
            relative w-full 
            max-w-md sm:max-w-2xl md:max-w-3xl
            bg-white/70 backdrop-blur-xl 
            rounded-xl shadow-2xl border border-white/40 
            overflow-hidden 
            flex flex-col md:flex-row
            max-h-[90vh] overflow-y-auto md:overflow-hidden
          "
        >
          {/* ❌ Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 text-gray-500 hover:text-black z-10"
          >
            <IoCloseSharp size={22} />
          </button>

          {/* 🌿 LEFT */}
          <div className="w-full md:w-7/12 p-5 sm:p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200">
            <span className="text-[10px] uppercase font-bold bg-indigo-900 text-white px-3 py-1 rounded-full">
              Pro Intelligence
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#000666] mt-4 leading-tight">
              Unlock Your Full Potential with Pro
            </h2>

            {/* Features */}
            <div className="mt-5 sm:mt-6 space-y-4 sm:space-y-5">
              {[
                {
                  icon: <MdElectricBolt />,
                  text: "Unlimited AI Optimizations",
                },
                {
                  icon: <MdDownloadDone />,
                  text: "Watermark-Free PDF Downloads",
                },
                { icon: <BsStars />, text: "Job-Specific Tailoring" },
                { icon: <MdSupportAgent />, text: "Priority Support" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4 group">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-lg">
                    {item.icon}
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 group-hover:text-indigo-700 transition">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-6 sm:mt-8 text-sm text-gray-500 hover:text-indigo-700 flex items-center gap-2">
              Maybe later
              <TiArrowForward />
            </button>
          </div>

          {/* 🌌 RIGHT */}
          <div className="w-full md:w-5/12 p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-5 sm:space-y-6">
            {/* Glow Orb */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 blur-3xl opacity-30 rounded-full" />
              <img
                src={Logo}
                alt="logo"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Price */}
            <div>
              <h3 className="text-4xl sm:text-5xl font-black text-[#000666]">
                $12
              </h3>
              <p className="text-gray-500 text-sm">/month</p>
            </div>

            <p className="text-xs text-gray-400">
              Billed annually ($144). Cancel anytime.
            </p>

            {/* CTA */}
            <button className="w-full py-3 sm:py-4 rounded-full flex items-center justify-center gap-2 text-white font-bold bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition">
              Upgrade to Pro <BsRocketTakeoff />
            </button>

            {/* Trust */}
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">
              Trusted by 50k+ users
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
