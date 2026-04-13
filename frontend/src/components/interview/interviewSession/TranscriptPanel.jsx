import React from "react";

export default function TranscriptPanel() {
  return (
    <aside className="w-full md:w-[380px] border-l border-[#e0e3e5] bg-[#f2f4f6] flex flex-col">
      <div className="p-4 border-b border-[#e0e3e5]">
        <h2 className="font-bold text-[#000666]">Interview Session</h2>
        <p className="text-xs text-[#767683]">Senior Architect Role</p>
      </div>

      <div className="p-4 space-y-5 overflow-y-auto">
        <div>
          <p className="text-[10px] text-[#5f00e3] py-2 font-bold">
            Interviewer
          </p>
          <p className="bg-white p-3 rounded-lg text-sm text-[#191c1e]">
            Can you walk me through a difficult decision?
          </p>
        </div>

        <div>
          <p className="text-[10px] text-[#000666] py-2  font-bold">You</p>
          <p className="bg-[#e0e0ff] p-3 rounded-lg text-sm">
            I led a migration from monolith to microservices...
          </p>
        </div>

        <div>
          <p className="text-[10px] text-[#5f00e3] py-2  font-bold">
            Interviewer
          </p>
          <p className="bg-white p-3 rounded-lg text-sm italic text-[#767683]">
            Noted and observing...
          </p>
        </div>
      </div>

      <button className="m-4 py-3 rounded-full bg-red-500 text-white font-bold">
        End Interview
      </button>
    </aside>
  );
}
