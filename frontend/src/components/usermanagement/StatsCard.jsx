import React from "react";

export default function StatCard({ icon, title, value, bg }) {
  return (
    <div className="bg-white p-7 rounded-xl shadow flex items-center gap-4">
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
