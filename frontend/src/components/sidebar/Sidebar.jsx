// import React from "react";

// export default function Sidebar() {
//   return (
//     <aside className="h-screen w-64 fixed left-0 top-0 pt-20 flex flex-col gap-2 py-4 bg-[#f7f9fb] hidden md:flex">

//       {/* User Info */}
//       <div className="px-6 mb-8">
//         <div className="flex items-center gap-3">
//           <img
//             src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVzdG7YFNNHHZc7Zv8uwxXLIV5co4XR7JM8fLv1SfxgOnAMCpiV2DSYvWH1zDHeQ79lgCl7adL5Eeg_8LpOdboFMWGQFWl45pRpC36l13BbmS4hHDCqhd0Hi25iPlTNkBLu6epxcbPyOlfLrlYO9IjK9JVTp7itEtwgzwl87LWOsx6omcXpWVAlGiN67QXfA7-2aBiWLZDfRdJawKNQpN6MlvqwKxWasisgEAT9bdDLrLOAUPYxdLqUj5daZCcbVvDZe1IsmZgF4aD"
//             alt="User profile"
//             className="w-10 h-10 rounded-full object-cover"
//           />
//           <div>
//             <p className="font-headline font-bold text-[#000666] text-sm leading-tight">
//               Alex Carter
//             </p>
//             <p className="text-xs text-[#454652]">Senior Architect</p>
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 space-y-1">
//         <a
//           href="#"
//           className="flex items-center gap-3 py-2.5 px-6 bg-[#ffffff] text-[#5f00e3] rounded-full shadow-sm mx-4 font-['Plus_Jakarta_Sans'] font-medium text-sm hover:translate-x-1 transition-transform"
//         >
//           <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
//           <span>Profile</span>
//         </a>
//         <a
//           href="#"
//           className="flex items-center gap-3 py-2.5 px-6 text-[#5f00e3]/60 hover:bg-[#f2f4f6]/50 mx-4 rounded-full font-['Plus_Jakarta_Sans'] font-medium text-sm hover:translate-x-1 transition-transform"
//         >
//           <span className="material-symbols-outlined">work</span>
//           <span>Experience</span>
//         </a>
//         <a
//           href="#"
//           className="flex items-center gap-3 py-2.5 px-6 text-[#5f00e3]/60 hover:bg-[#f2f4f6]/50 mx-4 rounded-full font-['Plus_Jakarta_Sans'] font-medium text-sm hover:translate-x-1 transition-transform"
//         >
//           <span className="material-symbols-outlined">school</span>
//           <span>Education</span>
//         </a>
//         <a
//           href="#"
//           className="flex items-center gap-3 py-2.5 px-6 text-[#5f00e3]/60 hover:bg-[#f2f4f6]/50 mx-4 rounded-full font-['Plus_Jakarta_Sans'] font-medium text-sm hover:translate-x-1 transition-transform"
//         >
//           <span className="material-symbols-outlined">psychology</span>
//           <span>Skills</span>
//         </a>
//         <a
//           href="#"
//           className="flex items-center gap-3 py-2.5 px-6 text-[#5f00e3]/60 hover:bg-[#f2f4f6]/50 mx-4 rounded-full font-['Plus_Jakarta_Sans'] font-medium text-sm hover:translate-x-1 transition-transform"
//         >
//           <span className="material-symbols-outlined">auto_awesome</span>
//           <span>AI Optimizer</span>
//         </a>
//       </nav>

//       {/* Footer Actions */}
//       <div className="mt-auto px-4 pb-6 space-y-1">
//         <button className="w-full bg-gradient-to-tr from-[#5f00e3] to-[#ff5e8e] text-[#ffffff] rounded-full py-3 mb-4 font-headline font-bold text-sm shadow-lg hover:scale-105 transition-all">
//           Download PDF
//         </button>
//         <a
//           href="#"
//           className="flex items-center gap-3 py-2 px-4 text-[#5f00e3]/60 hover:bg-[#f2f4f6]/50 rounded-full font-['Plus_Jakarta_Sans'] font-medium text-sm"
//         >
//           <span className="material-symbols-outlined">help</span>
//           <span>Help</span>
//         </a>
//         <a
//           href="#"
//           className="flex items-center gap-3 py-2 px-4 text-[#5f00e3]/60 hover:bg-[#f2f4f6]/50 rounded-full font-['Plus_Jakarta_Sans'] font-medium text-sm"
//         >
//           <span className="material-symbols-outlined">logout</span>
//           <span>Logout</span>
//         </a>
//       </div>
//     </aside>
//   );
// }

import { MdDashboard } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaUsersGear } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <aside className="bg-[#1A237E] h-[calc(100vh-64px)] w-64 fixed left-0 top-16 hidden lg:flex flex-col py-6 gap-2 shadow-2xl z-40">
      {/* Profile Info */}
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV-S-fEwogqvUeAnCKfTcGAWfGAxFXd8eWn9lFosJ3khLroZgikZov50XoKSOL-eeoH_WaTGw5RLa5kf3B5fCSe9hvQSD1xc_dzO2Rdqeks_hQYztq4Geec3x_4E6gnnnORezcVQwX3dVLW2oHF_p6ZPESYU7BhCW71tfhVcrvz5kLJQjCCVgT-ATp2FEdtKvS-yCtDBToF6dlmXaa2f4Btx1JWegq8WSOiV1WEI3DTbZtfBxexNCsU4M8iMsgJ77Q4-77VAuHzkDf"
            alt="User Profile Picture"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="text-white font-headline font-semibold text-sm">
              Professional Architect
            </div>
            <div className="text-indigo-300 text-xs">Premium Tier</div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-1">
        <Link
          to="/dashboard"
          className="bg-[#5f00e3] text-white rounded-r-full mr-4 ml-0 pl-6 py-3 shadow-[0_0_20px_rgba(95,0,227,0.4)] flex items-center gap-3 font-['Plus_Jakarta_Sans'] font-semibold transition-all duration-300 ease-in-out"
        >
          <span className="material-symbols-outlined">
            <MdDashboard />
          </span>
          Dashboard
        </Link>

        <Link
          to="/usermanag"
          className=" text-white rounded-r-full mr-4 ml-0 pl-6 py-3 flex items-center gap-3 font-['Plus_Jakarta_Sans'] font-semibold transition-all duration-300 ease-in-out"
        >
          <span className="material-symbols-outlined">
            <FaUsersGear />
          </span>
          Users
        </Link>

        <Link
          to="/working"
          className=" text-white rounded-r-full mr-4 ml-0 pl-6 py-3 flex items-center gap-3 font-['Plus_Jakarta_Sans'] font-semibold transition-all duration-300 ease-in-out"
        >
          <span className="material-symbols-outlined">
            <LuHistory />
          </span>
          History
        </Link>
        <Link
          to="/profile"
          className="text-white rounded-r-full mr-4 ml-0 pl-6 py-3 flex items-center gap-3 font-['Plus_Jakarta_Sans'] font-semibold transition-all duration-300 ease-in-out"
        >
          <span className="material-symbols-outlined">
            <FaUser />
          </span>
          Profile
        </Link>
        <a
          to="/working"
          className="text-white rounded-r-full mr-4 ml-0 pl-6 py-3 flex items-center gap-3 font-['Plus_Jakarta_Sans'] font-semibold transition-all duration-300 ease-in-out"
        >
          <span className="material-symbols-outlined">
            <MdLogout />
          </span>
          Logout
        </a>
      </nav>

      {/* Upgrade Button */}
      <div className="mt-auto px-4">
        <button className="w-full bg-gradient-to-tr from-[#5f00e3] to-[#ff5e8e] text-white rounded-xl py-3 text-sm font-bold shadow-lg hover:scale-105 transition-all">
          Upgrade to Pro
        </button>
      </div>
    </aside>
  );
}
