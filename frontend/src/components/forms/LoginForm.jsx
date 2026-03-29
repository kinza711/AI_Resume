import React, { useState } from "react";
import { FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "user",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", formData);
      alert(res.data.message);

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "login failed");
      console.error(err, "login failed you'r not Admin");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email */}
        <div>
          <label className="text-sm font-bold text-[#000666] mb-2 block">
            Email Address
          </label>
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className="w-full pl-12 py-4 rounded-xl bg-gray-100 focus:bg-white focus:ring-2 focus:ring-purple-500 outline-none transition"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-bold text-[#000666]">Password</label>
            <span className="text-xs text-purple-600 cursor-pointer hover:underline">
              Forgot password?
            </span>
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full pl-12 py-4 rounded-xl bg-gray-100 focus:bg-white focus:ring-2 focus:ring-purple-500 outline-none transition"
            />
          </div>
        </div>

        {/* Remember */}
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4 accent-purple-600" />
          <span className="text-sm text-gray-500">
            Keep me logged in for 30 days
          </span>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full py-4 rounded-full text-white font-bold flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition"
        >
          Sign In
          <FaArrowRight />
        </button>
      </form>
    </>
  );
};

export default LoginForm;
