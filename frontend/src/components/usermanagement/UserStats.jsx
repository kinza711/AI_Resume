import React, { useEffect, useState } from "react";
import { MdGroup, MdWorkspacePremium, MdTrendingUp } from "react-icons/md";
import StatCard from "./StatsCard";
import api from "../../services/api";
export default function UserStats() {
  const [users, setUsers] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const AllUsers = await api.get("/users");
        setUsers(AllUsers.data.data);
      } catch (err) {
        // alert("not found user");
        console.error(err, "user not found");
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard
        icon={<MdGroup />}
        title="Total Users"
        value={users.length}
        bg="bg-blue-100 text-blue-700"
      />
      <StatCard
        icon={<MdWorkspacePremium />}
        title="Premium Members"
        value="452"
        bg="bg-purple-100 text-purple-700"
      />
      <StatCard
        icon={<MdTrendingUp />}
        title="New This Week"
        value="+84"
        bg="bg-pink-100 text-pink-700"
      />
    </div>
  );
}
