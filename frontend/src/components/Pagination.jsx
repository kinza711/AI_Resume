import React from "react";

export default function Pagination() {
  return (
    <div className="p-4 md:p-6 flex justify-between items-center">
      <button className="px-4 py-2 border rounded-full text-sm font-bold hover:bg-gray-100">
        Previous
      </button>

      <div className="flex gap-2">
        <PageBtn active>1</PageBtn>
        <PageBtn>2</PageBtn>
        <PageBtn>3</PageBtn>
        <span className="px-2">...</span>
        <PageBtn>12</PageBtn>
      </div>

      <button className="px-4 py-2 border rounded-full text-sm font-bold hover:bg-gray-100">
        Next
      </button>
    </div>
  );
}

function PageBtn({ children, active }) {
  return (
    <button
      className={`w-10 h-10 rounded-full text-sm font-bold ${
        active ? "bg-purple-600 text-white" : "hover:bg-gray-100"
      }`}
    >
      {children}
    </button>
  );
}