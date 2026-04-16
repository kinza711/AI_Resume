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
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <main className="lg:pl-72 pt-24 px-4 sm:px-6 lg:px-10 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold font-sans text-[#000666]">
              Engineer Your Trajectory.
            </h1>
            <p className="text-[#454652] mt-2 w-1/2 text-lg">
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
