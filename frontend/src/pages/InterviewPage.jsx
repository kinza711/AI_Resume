import React from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import ActionCards from "../components/interview/ActionCards";
import RecentSimulations from "../components/interview/RecentSimulations";
import ProTips from "../components/interview/ProTips";

export default function InterviewPage() {
  return (
    <div className="bg-[#f7f9fb] min-h-screen text-[#191c1e]">
      {/* Top Navbar */}
      <Header />

      {/* Sidebar (desktop only) */}
      <Sidebar />

      {/* Main Content */}
      <main className="lg:pl-72 pt-24 px-6 pb-24 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="mb-10">
            <h1 className="text-4xl sm:text-5xl lg:text-4xl font-extrabold text-[#000666] tracking-tight mb-4">
              Ready for your next big move, Alex?
            </h1>
            <p className="text-[#454652] text-base sm:text-lg max-w-2xl font-medium">
              Your preparation journey is fueled by AI insights. Choose your
              path below to start sharpening your skills.
            </p>
          </header>

          {/* Action Cards */}
          <ActionCards />

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left */}
            <div className="lg:col-span-2">
              <RecentSimulations />
            </div>

            {/* Right */}
            <ProTips />
          </div>
        </div>
      </main>
    </div>
  );
}
