import React from "react";

export default function UserDistribution() {
  return (
    <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-lg shadow-sm flex flex-col items-center justify-between">
      <div className="w-full mb-6 text-center">
        <h3 className="text-xl font-bold text-on-surface dark:text-white">User Distribution</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Subscription tiers breakdown</p>
      </div>

      {/* Donut Chart */}
      <div className="relative flex items-center justify-center w-48 h-48">
        <div className="w-48 h-48 rounded-full border-[20px] border-blue-200 relative">
          <div className="absolute inset-[-20px] rounded-full border-[20px] border-purple-600 border-t-transparent border-r-transparent border-l-transparent rotate-45"></div>
          <div className="absolute inset-[-20px] rounded-full border-[20px] border-pink-400 border-b-transparent border-r-transparent border-l-transparent -rotate-12"></div>
          <div className="flex flex-col items-center justify-center h-full absolute inset-0">
            <span className="text-3xl font-extrabold text-on-surface dark:text-white leading-none">84%</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-bold">Premium</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="w-full space-y-3 mt-8">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-600"></span>
            <span className="font-medium text-gray-500 dark:text-gray-400">Premium</span>
          </div>
          <span className="font-bold text-on-surface dark:text-white">62,105</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-pink-400"></span>
            <span className="font-medium text-gray-500 dark:text-gray-400">Pro AI</span>
          </div>
          <span className="font-bold text-on-surface dark:text-white">42,487</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-200"></span>
            <span className="font-medium text-gray-500 dark:text-gray-400">Standard</span>
          </div>
          <span className="font-bold text-on-surface dark:text-white">20,000</span>
        </div>
      </div>
    </div>
  );
}