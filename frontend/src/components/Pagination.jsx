import React from "react";

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);

  return (
    <div className="p-4 md:p-6 flex justify-between items-center">
      <button
        className="px-4 py-2 border rounded-full text-sm font-bold hover:bg-gray-100"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      >
        Previous
      </button>

      <div className="flex gap-2">
        {pageNumbers.map((num) => (
          <PageBtn
            key={num}
            active={num === currentPage}
            onClick={() => setCurrentPage(num)}
          >
            {num}
          </PageBtn>
        ))}
      </div>

      <button
        className="px-4 py-2 border rounded-full text-sm font-bold hover:bg-gray-100"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      >
        Next
      </button>
    </div>
  );
}

function PageBtn({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 rounded-full text-sm font-bold ${
        active ? "bg-purple-600 text-white" : "hover:bg-gray-100"
      }`}
    >
      {children}
    </button>
  );
}
