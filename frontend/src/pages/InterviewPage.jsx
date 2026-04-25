import React, { useState } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import ActionCards from "../components/interview/ActionCards";
import RecentSimulations from "../components/interview/RecentSimulations";
import ProTips from "../components/interview/ProTips";
import UpgradePro from "../components/popups/UpgradePro";

export default function InterviewPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#f7f9fb] min-h-screen text-[#191c1e]">
      {/* Top Navbar */}
      <Header
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />

      {/* Sidebar (desktop only) */}
      <aside className="hidden lg:flex w-64 fixed left-0 top-0 h-full z-20">
        <Sidebar isOpen={true} setIsOpen={setIsSidebarOpen} />
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white transform transition-transform duration-300 lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

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
          <ActionCards onOpenPopup={() => setOpen(true)} />

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left */}
            <div className="lg:col-span-2">
              <RecentSimulations onOpenPopup={() => setOpen(true)}/>
            </div>

            {/* Right */}
            <ProTips />
          </div>
        </div>
      </main>
      {/* MODAL */}
      {open && <UpgradePro onClose={() => setOpen(false)} />}
    </div>
  );
}
