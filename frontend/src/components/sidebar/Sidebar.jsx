import { MdDashboard, MdLogout } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { PiReadCvLogoBold } from "react-icons/pi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SlEnvolopeLetter } from "react-icons/sl";
import { VscRobot } from "react-icons/vsc";
import api from "../../services/api";

export default function Sidebar({ isOpen, setIsOpen }) {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const role = user?.role;

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post("/logout");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const navItem = (to, label, icon) => {
    const isActive = location.pathname === to;

    return (
      <Link
        to={to}
        onClick={() => setIsOpen(false)}
        className={`flex items-center gap-3 pl-6 py-3 mr-4 rounded-r-full font-semibold transition-all
        ${
          isActive
            ? "bg-[#5f00e3] text-white shadow-lg"
            : "text-indigo-200 hover:bg-white/10"
        }`}
      >
        {icon}
        {label}
      </Link>
    );
  };

  return (
    <>
      {/* 🌑 Overlay (mobile only) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
        />
      )}

      {/* 🌙 Sidebar */}
      <aside
        className={`fixed top-16 left-0 h-[calc(100vh-64px)] w-64 bg-[#1A237E] z-40 flex flex-col py-6 gap-2 shadow-2xl
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        {/* Profile */}
        <div className="px-6 mb-8">
          <div className="flex items-center gap-3">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV-S-fEwogqvUeAnCKfTcGAWfGAxFXd8eWn9lFosJ3khLroZgikZov50XoKSOL-eeoH_WaTGw5RLa5kf3B5fCSe9hvQSD1xc_dzO2Rdqeks_hQYztq4Geec3x_4E6gnnnORezcVQwX3dVLW2oHF_p6ZPESYU7BhCW71tfhVcrvz5kLJQjCCVgT-ATp2FEdtKvS-yCtDBToF6dlmXaa2f4Btx1JWegq8WSOiV1WEI3DTbZtfBxexNCsU4M8iMsgJ77Q4-77VAuHzkDf"
              alt="profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="text-white text-sm font-semibold capitalize">
                {user.name || "Professional Architect"}
              </div>
              <div className="text-indigo-300 text-xs">
                {user.role || "Premium Tier"}
              </div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1">
          {navItem("/working", "Dashboard", <MdDashboard />)}

          {role === "Admin" && navItem("/usermanag", "Users", <FaUsersGear />)}

          {navItem("/dashboard", "Resumes", <PiReadCvLogoBold />)}
          {navItem("/cover", "Cover Latter", <SlEnvolopeLetter />)}
          {navItem("/interview", "Interview", <VscRobot />)}
          {/* {navItem("/working", "History", <LuHistory />)} */}
          {navItem("/profile", "Profile", <FaUser />)}

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 pl-6 py-3 text-indigo-200 hover:bg-white/10 mr-4 rounded-r-full"
          >
            <MdLogout />
            Logout
          </button>
        </nav>

        {/* Upgrade */}
        <div className="mt-auto px-4">
          <button className="w-full bg-gradient-to-tr from-[#5f00e3] to-[#ff5e8e] text-white rounded-xl py-3 text-sm font-bold shadow-lg hover:scale-105 transition-all">
            Upgrade to Pro
          </button>
        </div>
      </aside>
    </>
  );
}
