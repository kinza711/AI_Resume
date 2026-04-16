import React from "react";

export default function VideoPanel() {
  return (
    <div className="flex-1 relative p-4 mb-30 md:p-6">
      <div className="relative w-full h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden bg-[#eceef0] shadow-lg">
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnvsoBZxT76vWHa-HXC6PhWKxxyTiIeA_4Rll8QmlCSDHiTJ9kLDUfjDYUjyG7lN9wNQSwm7QghKHaoQzHxu9g0o6MZqSmjhYqTEipVW3GGwcBYpdud2AALuPyFm9uttMLTr4zqfzMGvU6TH4vzQvEuxqkq8B7T14l3bkDnowarKGS3_j1MDfUO4nxC02r3WbGJKI8DwL5hUmder8Z7LPIHfe3k9T0mePhlUN7ARrfsfxj-lx-duRD_ZRa_-b5KZ4M1vbPlec-xnl8"
          alt="interviewer"
        />

        {/* AI Chip */}
        <div className="absolute top-6 left-6 bg-white/80 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2">
          <div className="w-2 h-2 bg-[#6530b0] rounded-full animate-pulse" />
          <span className="text-xs font-bold text-[#000666]">
            AI ANALYZING...
          </span>
        </div>

        {/* User mini video */}
        <div className="absolute bottom-6 right-6 w-40 md:w-52 h-28 md:h-36 rounded-xl overflow-hidden border-2 border-white shadow-xl">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoQiwcSWttby-qYkCGDIMCydjBZ4GKWHcRbZlP1Y43QMoECQ7dYOemIiJNVOlMakBnXKZ1b5B0k6tvxSwdUussFH2AOHEgz8wfvh_Yj7LuHZNrOgoktV9BGPIg6oBeSQnj3GCWOL8isBJiDaog3lxTg7bwERt40KEfwbZrRfA6D4GYB_8mboynxluEoDdyKp_cJYCcnOgQu7FsMywhGid5Yh34W7QiMXymB7EveJ2WLxijirSWehawzi4dcMN7O2x1nMVAq3mnnUbr"
            alt="you"
          />
          <div className="absolute bottom-1 left-2 text-[10px] text-white bg-black/40 px-2 rounded">
            You
          </div>
        </div>
      </div>
    </div>
  );
}
