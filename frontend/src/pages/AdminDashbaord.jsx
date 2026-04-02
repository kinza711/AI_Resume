import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import MetricCard from "../components/admindashboard/MetricCard";
import RevenueTrends from "../components/admindashboard/RevenueTrends";
import UserDistribution from "../components/admindashboard/UserDistribution";
import {
  MdPersonAdd,
  MdDescription,
  MdPsychology,
  MdPayments,
} from "react-icons/md";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      <Header setIsSidebarOpen={setIsSidebarOpen} />
      {/* Sidebar for desktop */}
      <aside className="hidden lg:flex flex-col w-64 fixed left-0 top-0 h-full z-10">
        <Sidebar isOpen={true} setIsOpen={setIsSidebarOpen} />
      </aside>

      {/* Sidebar for mobile */}
      <aside
        className={`fixed inset-y-0 left-0 z-20 w-64 bg-white transform transition-transform duration-300 lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-10 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Content Area */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Header */}
        {/* <Header setIsSidebarOpen={setIsSidebarOpen} /> */}

        {/* Main Content */}
        <main className="p-4 sm:p-6 md:p-8 mt-16 lg:mt-0">
          {/* Heading */}
          <div className="text w-full lg:w-1/2">
            <h1 className="text-[#1A237E] pt-6 sm:pt-10 font-bold text-3xl sm:text-4xl md:text-5xl">
              Operational Pulse
            </h1>
            <p className="text-[#4e4e4f] font-semibold font-sans py-2 sm:py-3 text-sm sm:text-lg md:text-xl">
              Real-time intelligence from the Lumina AI core. Monitoring resume
              optimizations and platform growth metrics.
            </p>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 md:mb-10">
            <MetricCard
              icon={<MdPersonAdd />}
              title="Total Users"
              value="124,592"
              percentage="+12.5%"
              bgColor="bg-blue-400"
              barColor="bg-purple-600"
            />
            <MetricCard
              icon={<MdDescription />}
              title="Active Resumes"
              value="42,108"
              percentage="+8.2%"
              bgColor="bg-purple-200"
              barColor="bg-pink-400"
            />
            <MetricCard
              icon={<MdPsychology />}
              title="AI Improvement Rate"
              value="94.2%"
              percentage="+4.1%"
              bgColor="bg-pink-200"
              barColor="bg-cyan-500"
            />
            <MetricCard
              icon={<MdPayments />}
              title="Monthly Revenue"
              value="$842.1k"
              percentage="+18.9%"
              bgColor="bg-indigo-700"
              barColor="bg-gradient-to-tr from-purple-800 to-pink-500"
            />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            <div className="lg:col-span-2">
              <RevenueTrends />
            </div>
            <div className="lg:col-span-1">
              <UserDistribution />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
