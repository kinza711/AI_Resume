import React from "react";
import UserRow from "./UserRow";
import Pagination from "../Pagination";

export default function UserTable() {
  const users = [
    {
      name: "Alex Morgan",
      email: "alex.m@lumina-ai.com",
      role: "Admin",
      bgColor: "purple",
      status: "Active",
      date: "Oct 12, 2023",
    },
    {
      name: "Sarah Chen",
      email: "s.chen@design.co",
      role: "Premium",
      bgColor: "red",
      status: "Active",
      date: "Jan 05, 2024",
    },
    {
      name: "Julian Wright",
      email: "j.wright@freelance.com",
      role: "User",
      bgColor: "orange",
      status: "Inactive",
      date: "Dec 18, 2023",
    },
    {
      name: "Marcus Thorne",
      email: "marcus.t@enterprise.io",
      role: "Premium",
      bgColor: "red",
      status: "Active",
      date: "Feb 22, 2024",
    },
  ];

  return (
    <div
      className="bg-white/50 backdrop-blur-xl rounded-xl shadow-xl overflow-hidden
                    "
    >
      {/* Filters */}
      <div className="p-4 md:p-6 flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex gap-3 flex-wrap">
          <select className="px-4 py-2 rounded-full bg-gray-100 text-sm font-semibold">
            <option>All Roles</option>
            <option>Admin</option>
            <option>Premium</option>
            <option>User</option>
          </select>

          <select className="px-4 py-2 rounded-full bg-gray-100 text-sm font-semibold">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <p className="text-sm text-gray-500 font-medium">
          Showing 1–10 of 1,284 users
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[700px]">
          <thead>
            <tr className="bg-gray-100 text-xs uppercase text-gray-500">
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Role</th> {/* ✅ fixed */}
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Joined</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <UserRow key={index} {...user} />
            ))}
          </tbody>
        </table>
      </div>

      <Pagination />
    </div>
  );
}
