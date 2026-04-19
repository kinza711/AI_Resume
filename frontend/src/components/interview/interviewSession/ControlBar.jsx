import React from "react";
import { IoMdSkipBackward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaClosedCaptioning, FaRegCirclePlay } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaVideo, FaMicrophone } from "react-icons/fa";
import { MdCallEnd } from "react-icons/md";

export default function ControlBar({ onMic }) {
  const navigate = useNavigate();

  return (
    <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[90%] md:w-auto">
      <div className="bg-white/70 backdrop-blur-xl shadow-lg rounded-full px-3 sm:px-5 py-3 flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="control-btn bg-gray-400 text-white"
        >
          <IoMdSkipBackward />
        </button>

        {/* Mic */}
        <button onClick={onMic} className="control-btn bg-[#eceef0]">
          <FaMicrophone />
        </button>

        {/* Video */}
        <button className="control-btn bg-[#eceef0]">
          <FaVideo />
        </button>

        {/* Main Action */}
        <button className="main-btn">
          <FaRegCirclePlay />
        </button>

        {/* More */}
        <button className="control-btn bg-[#eceef0]">
          <HiOutlineDotsVertical />
        </button>

        {/* Captions */}
        <button className="control-btn bg-[#eceef0] hidden sm:flex">
          <FaClosedCaptioning />
        </button>

        {/* End Call */}
        <button className="control-btn bg-red-500 text-white">
          <MdCallEnd />
        </button>
      </div>
    </footer>
  );
}
