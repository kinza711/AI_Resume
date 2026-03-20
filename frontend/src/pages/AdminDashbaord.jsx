import Sidebar from "../components/sidebar/Sidebar";

import MetricCard from "../components/admindashboard/MetricCard";
import RevenueTrends from "../components/admindashboard/RevenueTrends";
import UserDistribution from "../components/admindashboard/UserDistribution";
import FabButton from "../components/admindashboard/FabButton";
import Header from "../components/header/Header";
import {
  MdPersonAdd,
  MdDescription,
  MdPsychology,
  MdPayments,
} from "react-icons/md";

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <Header />
      <main className="ml-64 p-10  min-h-[calc(100vh-4rem)]">
        <div className="text  w-1/2">
          <h1 className="text-[#1A237E] pt-10 font-bold text-5xl">
            Operational Pulse
          </h1>
          <h1 className="text-[#4e4e4f] font-semibold font-sans py-3 text-xl ">
            Real-time intelligence from the Lumina AI core. Monitoring resume
            optimizations and platform growth metrics.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <RevenueTrends />
          <UserDistribution />
        </div>
      </main>
      {/* <FabButton /> */}
    </>
  );
}
