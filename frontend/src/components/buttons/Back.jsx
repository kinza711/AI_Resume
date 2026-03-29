import React from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const Back = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition"
      >
        <MdArrowBack />
        <span className="text-sm font-medium">Back to Users</span>
      </button>
    </div>
  );
};

export default Back;
