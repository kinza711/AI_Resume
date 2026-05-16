import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/register", formData);
      console.log(res.data.message); // show backend message
      navigate("/login");
      console.log(res, "user registed succsessfuly");
    } catch (err) {
      setError("Email already exixt");
      console.error(err, "regsiterd failed you'r not Admin");
    }
  };

  return (
    <>
      {error && <p className="text-red-700 font-semibold">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="text-sm font-semibold text-gray-500">
            Full Name
          </label>
          <div className="relative mt-2">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Alex Johnson"
              className="w-full pl-12 py-4 rounded-full bg-gray-100 focus:bg-white focus:ring-2 focus:ring-purple-400 outline-none transition"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-semibold text-gray-500">
            Email Address
          </label>
          <div className="relative mt-2">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="alex@company.com"
              className="w-full pl-12 py-4 rounded-full bg-gray-100 focus:bg-white focus:ring-2 focus:ring-purple-400 outline-none transition"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="text-sm font-semibold text-gray-500">
            Password
          </label>
          <div className="relative mt-2">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full pl-12 py-4 rounded-full bg-gray-100 focus:bg-white focus:ring-2 focus:ring-purple-400 outline-none transition"
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-5 rounded-full text-white font-bold flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition"
        >
          Get Started
          <FaArrowRight />
        </button>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm">
          Already have an account?
          <span className="text-purple-600 font-semibold ml-1 cursor-pointer">
            Sign In
          </span>
        </p>
      </form>
    </>
  );
};

export default RegisterForm;
