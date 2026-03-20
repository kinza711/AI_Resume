import React from "react";
import { MdEdit, MdDelete, MdStar, MdStarHalf } from "react-icons/md";

export default function UserManagement() {
  return (
    <main className="p-6 md:p-10 space-y-10 bg-[#f7f9fb]">
      {/* AI Insight */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-10">
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-3xl font-extrabold text-[#000666]">
            AI Driven Fleet Analysis
          </h3>
          <p className="text-gray-600 text-lg">
            Lumina’s engine whispers patterns — a{" "}
            <span className="text-purple-600 font-bold">24% increase</span> in
            premium conversion among tech users. There’s opportunity here…
            quiet, waiting.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-xl h-48 bg-gradient-to-br from-purple-600 to-pink-400 shadow-2xl flex items-center justify-center text-white text-center">
            <div>
              <p className="text-sm uppercase opacity-80">
                Current User Rating
              </p>
              <p className="text-5xl font-black">4.92</p>
              <div className="flex justify-center mt-2">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStarHalf />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

/* ---------- Small Components ---------- */

function Stat({ icon, title, value, bg }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${bg}`}
      >
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-[#000666]">{value}</p>
      </div>
    </div>
  );
}
