import React, { useState } from "react";
import UserStats from "../components/usermanagement/UserStats";
import UserTable from "../components/usermanagement/UserTable";
import UserManagement from "../components/usermanagement/UserManagement";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";

const UserManagementPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
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

      {/* Main Content Wrapper */}
      <div className="flex-1 w-full">
        {/* Header */}
        <Header setIsSidebarOpen={setIsSidebarOpen} />

        {/* Content */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-6 md:py-10 ml-0 lg:ml-64 min-h-[calc(100vh-4rem)] space-y-8">
          {/* Page Heading */}
          <div className="w-full pt-10 lg:w-1/2">
            <h1 className="text-[#1A237E] font-bold text-3xl sm:text-4xl lg:text-5xl">
              User Management
            </h1>

            <p className="text-[#4e4e4f] font-semibold text-base sm:text-lg lg:text-xl mt-2">
              Engineer and manage your professional user ecosystem.
            </p>
          </div>

          {/* Stats */}
          <UserStats />

          {/* Table */}
          <UserTable />

          {/* Extra Section */}
          <UserManagement />
        </div>
      </div>
    </div>
  );
};

export default UserManagementPage;
