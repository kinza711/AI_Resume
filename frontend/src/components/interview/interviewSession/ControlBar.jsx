import React from "react";
import { IoMdSkipBackward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaClosedCaptioning, FaRegCirclePlay } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaVideo, FaMicrophone } from "react-icons/fa";
import { MdCallEnd } from "react-icons/md";

export default function ControlBar() {
  const navigate = useNavigate();
  return (
    <footer className="fixed bottom-0 w-[75%] my-6  bg-white/70 rounded-full backdrop-blur-xl flex justify-center py-4 gap-4">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="w-12 h-12 items-center justify-center flex bg-gray-400 text-white rounded-full font-bold"
      >
        {/* <Back /> */}
        <IoMdSkipBackward />
      </button>
      <button className="w-12 h-12 rounded-full items-center justify-center flex bg-[#eceef0]">
        <FaMicrophone />
      </button>

      <button className="w-12 h-12 rounded-full items-center justify-center flex bg-[#eceef0]">
        <FaVideo />
      </button>

      <button className="w-14 h-14 rounded-full items-center justify-center flex bg-gradient-to-r from-[#5f00e3] to-[#ff5e8e] text-white">
        <FaRegCirclePlay />
      </button>

      <button className="w-12 h-12 rounded-full items-center justify-center flex bg-[#eceef0]">
        <HiOutlineDotsVertical />
      </button>
      <button className="w-12 h-12 rounded-full items-center justify-center flex bg-[#eceef0]">
        <FaClosedCaptioning />
      </button>
      <button className=" w-12 h-12 bg-red-500 items-center justify-center flex text-white rounded-full font-bold">
        <MdCallEnd />
      </button>
    </footer>
  );
}
