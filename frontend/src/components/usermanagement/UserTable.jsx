import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";
import Pagination from "../Pagination";
import api from "../../services/api";

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const AllUsers = await api.get("/users");
        setUsers(AllUsers.data.data);
      } catch (err) {
        console.error(err, "user not found");
      }
    };
    fetchUsers();
  }, []);

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
            {currentUsers.map((user, index) => (
              <UserRow
                key={index}
                id={user._id}
                name={user.name}
                email={user.email}
                role={user.role}
                status="Active" // bad my change kru gi
                date={new Date(user.createdAt).toLocaleDateString()}
                //{...user}
              />
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
