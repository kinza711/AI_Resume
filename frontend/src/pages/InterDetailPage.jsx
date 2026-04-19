import React, { useState } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import GeneratorFormData from "../components/interview/interdetails/GenerateFormData";

export default function InterDetailPage({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [covertext, setCoverText] = useState(null);

  JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen">
      <Header setIsSidebarOpen={setIsSidebarOpen} />
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

      <main className="lg:pl-72 pt-24 px-4 sm:px-6 lg:px-10 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold font-sans text-[#000666]">
              Engineer Your Trajectory.
            </h1>
            <p className="text-[#454652] mt-2 w-full sm:w-1/3 md:w-1/2 text-sm sm:text-lg md:text-xl">
              Configure your AI session by providing your latest professional
              blueprint and the destination role.
            </p>
          </div>

          <GeneratorFormData setCoverText={setCoverText} />
        </div>
      </main>
    </div>
  );
}
