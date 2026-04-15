import React from "react";
import { MdElectricBolt } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { MdDownloadDone } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { TiArrowForward } from "react-icons/ti";
import { BsRocketTakeoff } from "react-icons/bs";
import Logo from "../../assets/resumelogo.png";
import { IoCloseSharp } from "react-icons/io5";

export default function UpgradePro({ onClose }) {
  return (
    <div className="relative min-h-screen bg-[#d8dbdd] overflow-hidden  font-sans">
      {/* Background Blur Layer */}
      <div className="fixed inset-0 z-0 blur-xl scale-105 pointer-events-none">
        <div className="h-16 bg-white shadow flex items-center justify-between px-6">
          <h1 className="font-bold text-indigo-900">Lumina AI</h1>
        </div>

        <div className="flex">
          <div className="hidden lg:flex w-64 bg-slate-50 h-screen p-4">
            <p className="text-slate-600">Sidebar</p>
          </div>

          <div className="flex-1 p-10 space-y-6">
            <h1 className="text-3xl font-bold text-[#000666]">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="h-40 bg-white rounded-lg" />
              <div className="h-40 bg-white rounded-lg" />
              <div className="h-40 bg-white rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className="fixed inset-0 z-10 bg-black/10 backdrop-blur-md" />

      {/* Modal */}
      <div className="fixed inset-0 z-20 flex items-center justify-center p-4 ">
        <div
          className="relative w-full max-w-lg sm:max-w-2xl md:max-w-3xl 
bg-white/70 backdrop-blur-xl rounded-xl shadow-2xl 
border border-white/40 overflow-hidden 
flex flex-col md:flex-row"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-500 hover:text-black"
          >
            <IoCloseSharp />
          </button>

          {/* LEFT */}
          <div className="w-full md:w-7/12 p-6 sm:p-8  border-b md:border-b-0 md:border-r border-gray-200">
            <span className="text-[10px] uppercase font-bold bg-indigo-900 text-white px-3 py-1 rounded-full">
              Pro Intelligence
            </span>

            <h2 className="text-3xl font-bold text-[#000666] mt-4">
              Unlock Your Full Potential with Pro
            </h2>

            {/* Features */}
            <div className="mt-6 space-y-5">
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
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700">
                    <div className="text-xl">{item.icon}</div>
                  </div>
                  <p className="text-gray-600 group-hover:text-indigo-700 transition">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-8 text-sm text-gray-500 hover:text-indigo-700 flex items-center gap-2">
              Maybe later
              <span className="text-xl material-symbols-outlined text-xs">
                <TiArrowForward />
              </span>
            </button>
          </div>

          {/* RIGHT */}
          <div className="w-full md:w-5/12 p-8 flex flex-col items-center justify-center text-center space-y-6">
            {/* Glow Orb */}
            <div className="relative w-28 h-28">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 blur-3xl opacity-30 rounded-full" />
              <img src={Logo} alt="logo" className="h-full w-full" />
            </div>

            {/* Price */}
            <div>
              <h3 className="text-5xl font-black text-[#000666]">$12</h3>
              <p className="text-gray-500 text-sm">/month</p>
            </div>

            <p className="text-xs text-gray-400">
              Billed annually ($144). Cancel anytime.
            </p>

            {/* CTA */}
            <button className="w-full py-4 rounded-full items-center justify-center flex gap-2 text-white font-bold bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition">
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
