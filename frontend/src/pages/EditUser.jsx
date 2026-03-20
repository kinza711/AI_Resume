import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import EditUserForm from "../components/edituser/EditUserForm";

export default function EditUserPage() {
  return (
    <div className="flex bg-[#f7f9fb] min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="flex-1 flex justify-center items-cente px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
          {/* Centered Form Container */}
          <div className="w-full max-w-4xl">
            <EditUserForm />
          </div>
        </main>
      </div>
    </div>
  );
}
