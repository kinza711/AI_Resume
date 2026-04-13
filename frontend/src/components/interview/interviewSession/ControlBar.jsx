import React from "react";
import Back from "../../buttons/Back";

export default function ControlBar() {
  return (
    <footer className="fixed bottom-0 w-[75%] my-6  bg-white/70 rounded-full backdrop-blur-xl flex justify-center py-4 gap-4">
      <button className="w-12 h-12 rounded-full bg-[#eceef0]">🎤</button>

      <button className="w-12 h-12 rounded-full bg-[#eceef0]">🎥</button>

      <button className="w-14 h-14 rounded-full bg-gradient-to-r from-[#5f00e3] to-[#ff5e8e] text-white">
        ⚡
      </button>

      <button className="w-12 h-12 rounded-full bg-[#eceef0]">⋯</button>

      <button className="px-6 py-2 bg-red-500 text-white rounded-full font-bold">
        Leave
      </button>
      <button className="px-6 py-2 bg-purple-200 text-white rounded-full font-bold">
        <Back />
      </button>
    </footer>
  );
}
