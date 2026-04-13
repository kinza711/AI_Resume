import React from "react";

const data = [
  { title: "Senior UX Designer Role", score: "92%" },
  { title: "Product Manager Behavioral", score: "85%" },
  { title: "Tech Lead Systems Design", score: "78%" },
];

export default function RecentSimulations() {
  return (
    <div className="bg-[#f2f4f6] p-6 lg:p-8 rounded-3xl">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-bold text-[#000666]">
          Recent Simulations
        </h3>
        <span className="text-[#5f00e3] font-bold text-sm cursor-pointer">
          View All
        </span>
      </div>

      <div className="space-y-4">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-full p-5 flex items-center justify-between shadow-sm hover:translate-x-1 transition"
          >
            <div className="">
              <h4 className="font-bold text-[#000666]">{item.title}</h4>
              <p className="text-xs text-[#454652]">May 12 • 15:20</p>
            </div>

            <div className="text-right px-3">
              <p className="text-xs font-bold text-[#5f00e3] uppercase">
                Score
              </p>
              <p className="text-lg font-bold text-[#000666]">{item.score}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
