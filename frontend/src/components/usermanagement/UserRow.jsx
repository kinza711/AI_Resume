import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
export default function UserRow({
  id,
  name,
  email,
  role,
  status,
  date,
  bgColor, // ✅ receive it properly
}) {
  const roleColors = {
    purple: "bg-purple-100 text-purple-700",
    red: "bg-red-100 text-red-700",
    orange: "bg-orange-100 text-orange-700",
  };

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await api.delete(`/users/${id}`);
      alert("user deleted succssfully");
    } catch (err) {
      alert("user not deleted");
      console.error(err, "user not deleted");
    }
  };

  return (
    <tr className="hover:bg-gray-100 group transition">
      <td className="px-4 sm:px-6 py-4 font-semibold text-gray-800">{name}</td>

      <td className="px-4 sm:px-6 py-4 text-gray-500 text-sm">{email}</td>

      <td className="px-4 sm:px-6 py-4">
        <span
          className={`px-3 py-1 rounded-full text-xs  ${
            roleColors[bgColor] || "bg-orange-100 text-orange-600"
          }`}
        >
          {role}
        </span>
      </td>

      <td className="px-4 sm:px-6 py-4">
        <span
          className={`text-sm font-semibold ${
            status === "Active" ? "text-green-600" : "text-gray-400"
          }`}
        >
          {status}
        </span>
      </td>

      <td className="px-4 sm:px-6 py-4 text-gray-500 text-sm">{date}</td>

      <td className="px-4 sm:px-6 py-4 text-right">
        <div className="flex justify-end gap-2 opacity-100 group-hover:opacity-100 transition">
          <button
            onClick={() => {
              navigate(`/edituser/${id}`);
            }}
            className="p-2 rounded-full hover:bg-purple-100 hover:text-purple-600 transition"
          >
            <MdEdit />
          </button>
          <button
            onClick={handleDelete}
            className="p-2 rounded-full hover:bg-red-100 hover:text-red-500 transition"
          >
            <MdDelete />
          </button>
        </div>
      </td>
    </tr>
  );
}
