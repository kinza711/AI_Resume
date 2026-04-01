import React, { useState } from "react";
import ResumeUI from "../components/cvTemplates/ResumeTemplate";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
const ResuemPage = () => {
  const [improvedText, setImprovedText] = useState("");
  return (
    <div className="flex min-h-screen pt-16">
      <Header />
      <aside className="hidden lg:flex flex-col w-64">
        {/* Sidebar would go here */}
        <Sidebar />
      </aside>
      <main className="flex-1 p-8 bg-[#f7f9fb] min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="">
            <div className="xl:col-span-">
              <ResumeUI improvedText={improvedText} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResuemPage;
