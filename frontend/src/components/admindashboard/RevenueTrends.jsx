import React from "react";

export default function RevenueTrends() {
  const labels = ["Oct 24", "Nov 01", "Nov 08", "Nov 15", "Nov 23"];

  return (
    <div
      className="lg:col-span-2 bg-slate-50 dark:bg-slate-800 
    p-4 sm:p-6 md:p-8 rounded-xl shadow-sm"
    >
      {/* Header */}
      <div
        className="flex flex-col sm:flex-row 
      justify-between items-start sm:items-center 
      mb-5 sm:mb-6 md:mb-8 gap-3 sm:gap-0"
      >
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-on-surface dark:text-white">
            Revenue Trends
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
            Transaction volume over the last 30 days
          </p>
        </div>

        <select
          className="bg-slate-100 dark:bg-slate-700 
        rounded-full text-xs sm:text-sm font-bold 
        text-gray-800 dark:text-white 
        px-3 py-1 focus:ring-2 focus:ring-purple-500/30"
        >
          <option>Last 30 Days</option>
          <option>Last Quarter</option>
        </select>
      </div>

      {/* Chart */}
      <div
        className="relative w-full 
      h-48 sm:h-56 md:h-64"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 800 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,150 Q100,120 200,160 T400,80 T600,100 T800,40"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="5"
            strokeLinecap="round"
          />

          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5f00e3" />
              <stop offset="100%" stopColor="#ff5e8e" />
            </linearGradient>
          </defs>
        </svg>

        {/* Labels */}
        <div
          className="absolute bottom-0 left-0 w-full 
        flex justify-between px-1 sm:px-2 
        text-[9px] sm:text-[10px] md:text-xs 
        text-gray-400 font-bold uppercase tracking-widest"
        >
          {labels.map((label, idx) => (
            <span
              key={idx}
              className="truncate max-w-[50px] sm:max-w-none text-center"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
