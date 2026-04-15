import React, { useState } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import GeneratorForm from "../components/coverlatter/GeneratorForm";
import PreviewSection from "../components/coverlatter/PreviewSection";

export default function CoverLetterPage({ children }) {
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
              Cover Letter Generator
            </h1>
            <p className="text-[#454652] mt-2 w-1/2 text-lg">
              Craft a high-impact narrative that bridges the gap between your
              resume and your dream job. Engineered by AI, refined by you.
            </p>
          </div>

          <GeneratorForm setCoverText={setCoverText} />
          <PreviewSection covertext={covertext} />
        </div>
      </main>
    </div>
  );
}
