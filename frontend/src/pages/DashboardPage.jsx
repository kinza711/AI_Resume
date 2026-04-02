import LeftPanel from "../components/dashboard/LeftUpload";
import RightPanel from "../components/dashboard/RightUpload";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import { useState } from "react";
export default function Dashboard({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [improvedText, setImprovedText] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className="flex min-h-screen pt-16">
        {user ? <Header /> : <Navbar setIsSidebarOpen={setIsSidebarOpen} />}
        {user && (
          <aside className="hidden lg:flex flex-col w-64">
            {/* Sidebar would go here */}

            <Sidebar
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          </aside>
        )}
        <main className="flex-1 p-8 bg-[#f7f9fb] min-h-screen">
          <div className="max-w-6xl mx-auto">
            {/* Welcome Section */}
            <section className="mb-12">
              <h1 className="font-headline font-bold text-5xl text-[#000666] tracking-tight mb-2">
                Architect Your Future
              </h1>
              <p className="text-[#454652] font-medium text-lg max-w-2xl">
                Use our AI engine to transform your experience into a compelling
                narrative that grabs recruiter attention instantly.
              </p>
            </section>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
              <div className="xl:col-span-5">
                <LeftPanel setImprovedText={setImprovedText} />
              </div>
              <div className="xl:col-span-7">
                <RightPanel improvedText={improvedText} />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
