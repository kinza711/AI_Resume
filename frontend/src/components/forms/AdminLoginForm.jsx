import React, { useState } from "react";
import { MdPerson, MdLock } from "react-icons/md";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const AdminLoginForm = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "Admin",
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
      const { token, role } = res.data.user;
      localStorage.setItem("token", token);
      //localStorage.setItem("id", res.data.user.id);
      localStorage.setItem("role", res.data.user.role);

      localStorage.setItem("user", JSON.stringify(res.data.user));

      // for checking user id
      // if (!token || !id) {
      //   console.error("login response missing or id", res.data.user);
      //   return;
      // }
      // for checking user role
      if (!role) {
        setError("user role is not matched");
        return;
      }
      //   alert(res.data.message);
      alert("Wellcome Back To Admin Pannel");
      navigate("/admindashboard");
    } catch (err) {
      setError(err.response?.data?.message || "login failed");
      console.error(err, "login failed you'r not Admin");
    }
  };

  return (
    <>
      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full space-y-6">
        {/* Email */}
        <div className="space-y-2">
          <label
            className="text-sm font-semibold ml-1"
            style={{ color: "#000666" }}
          >
            Admin Email
          </label>
          <div className="relative group">
            <div
              className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors"
              style={{ color: "#767683" }}
            >
              <MdPerson />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@resumearchitect.ai"
              style={{ backgroundColor: "#eceef0", color: "#191c1e" }}
              className="block w-full pl-12 pr-4 py-4 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7836ff] placeholder:text-[#767683] transition-all"
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label
            className="text-sm font-semibold ml-1"
            style={{ color: "#000666" }}
          >
            Password
          </label>
          <div className="relative group">
            <div
              className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors"
              style={{ color: "#767683" }}
            >
              <MdLock />
            </div>
            <input
              type="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
              placeholder="••••••••••••"
              style={{ backgroundColor: "#eceef0", color: "#191c1e" }}
              className="block w-full pl-12 pr-4 py-4 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7836ff] placeholder:text-[#767683] transition-all"
            />
          </div>
        </div>

        {error && <p className="text-red-700 font-semibold">{error}</p>}
        {/* Options */}
        <div className="flex items-center justify-between py-2">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 rounded border-[#c6c5d4] accent-[#5f00e3] focus:ring-[#5f00e3] transition-all"
            />
            <span style={{ color: "#454652" }} className="text-sm font-medium">
              Remember Me
            </span>
          </label>
          <a
            href="#"
            style={{ color: "#ff5e8e" }}
            className="text-sm font-bold hover:text-[#7836ff] transition-colors"
          >
            Forgot Password
          </a>
        </div>

        {/* Submit */}
        <button
          type="submit"
          style={{
            background: "linear-gradient(135deg, #5f00e3 0%, #ff5e8e 100%)",
            boxShadow: "0px 0px 20px rgba(0,255,255,0.3)",
          }}
          className="w-full py-4 px-6 rounded-full text-white font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all"
        >
          Sign In to Portal
        </button>
      </form>
    </>
  );
};

export default AdminLoginForm;
