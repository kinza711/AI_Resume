// import React from "react";
// import { IoMdSearch } from "react-icons/io";
// import { FaBell } from "react-icons/fa";
// import { FaGear } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// export default function Header() {
//   //const user = JSON.parse(localStorage.getItem("user"));
//   return (
//     <header className="fixed   top-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-[#30388A] text-white">
//       {/* Left: Brand + Nav */}
//       <div className="flex text-white items-center gap-8">
//         <span className="text-2xl font-bold tracking-tight font-headline">
//           Lumina AI
//         </span>

//         <nav className="hidden md:flex gap-6">
//           <Link
//             to="/dashboard"
//             className="font-medium transition-transform duration-200 hover:scale-105"
//           >
//             Dashboard
//           </Link>
//           <Link
//             to="/working"
//             className="font-medium transition-transform duration-200 hover:scale-105"
//           >
//             Resumes
//           </Link>
//           <Link
//             to="/working"
//             className="font-medium transition-transform duration-200 hover:scale-105"
//           >
//             Insights
//           </Link>
//         </nav>
//       </div>

//       {/* Right: Search + Actions + Avatar */}
//       <div className="flex items-center gap-4">
//         {/* Search input (only on lg+) */}
//         <div className="relative hidden border-2 border-amber-50 rounded-full lg:block">
//           <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2">
//             <IoMdSearch />
//           </span>
//           <input
//             type="text"
//             placeholder="Search profiles..."
//             className="pl-10 pr-4 py-2 rounded-full border-none w-64 text-sm focus:ring-2 focus:ring-[#5f00e3]"
//           />
//         </div>

//         {/* Notification button */}
//         <button className="p-2 rounded-full transition-all">
//           <span className="material-symbols-outlined">
//             <FaBell />
//           </span>
//         </button>

//         {/* Settings button */}
//         <button className="p-2 rounded-full transition-all">
//           <span className="material-symbols-outlined">
//             <FaGear />
//           </span>
//         </button>

//         {/* User avatar */}
//         <img
//           src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUJE1Lib9i4n3bdIzQxzpgQ-IPg9hYbLg_o28y0ksWutzuj9VpNmuH4FJzkVkYTQ-4flQKtGV6XF1rZyFHYY-emm9Z67H_tCmzB4X3c86LUf7s_EmWMZ3QtgYH6eL190X0cpZn9Oy6S9_Gm_TKalHULujj2Z0BG5KkI51FnMjSC8NlfqZpjmtB81_lnfenwzX_pM8UR62kyPDs4vuBgGHzmCDzaBaqdN3KigU_camI56NMhCpKgviUSlR9HF0OBo0X4Q40MA59q8vX"
//           alt="User profile avatar"
//           className="w-8 h-8 rounded-full object-cover ring-2"
//           style={{ ringColor: "#e0e0ff" }}
//         />
//       </div>
//     </header>
//   );
// }

import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";

export default function Header({ setIsSidebarOpen }) {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 md:px-8 h-16 bg-[#30388A] text-white">
      {/* 🌿 Left Section */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Sidebar Toggle */}
        <button
          onClick={() => setIsSidebarOpen?.((prev) => !prev)}
          className="lg:hidden text-2xl"
        >
          <HiMenu />
        </button>

        {/* Brand */}
        <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight font-headline">
          Lumina AI
        </span>
      </div>

      {/* 🌙 Right Section */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Search (hidden on small screens) */}
        <div className="relative hidden md:block">
          <IoMdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-full w-40 sm:w-52 md:w-56 text-sm text-white border-2 border-white focus:ring-2 focus:ring-[#5f00e3]"
          />
        </div>

        {/* Icons */}
        <button className="p-2 hover:scale-110 transition">
          <FaBell />
        </button>

        <button className="p-2 hover:scale-110 transition">
          <FaGear />
        </button>

        {/* Avatar */}
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUJE1Lib9i4n3bdIzQxzpgQ-IPg9hYbLg_o28y0ksWutzuj9VpNmuH4FJzkVkYTQ-4flQKtGV6XF1rZyFHYY-emm9Z67H_tCmzB4X3c86LUf7s_EmWMZ3QtgYH6eL190X0cpZn9Oy6S9_Gm_TKalHULujj2Z0BG5KkI51FnMjSC8NlfqZpjmtB81_lnfenwzX_pM8UR62kyPDs4vuBgGHzmCDzaBaqdN3KigU_camI56NMhCpKgviUSlR9HF0OBo0X4Q40MA59q8vX"
          alt="avatar"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
        />
      </div>
    </header>
  );
}
