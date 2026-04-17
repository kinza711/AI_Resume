export default function TranscriptPanel({ messages }) {
  return (
    <aside className="w-full md:w-[380px] border-l border-[#e0e3e5] bg-[#f2f4f6] flex flex-col">
      <div className="p-4 border-b border-[#e0e3e5]">
        <h2 className="font-bold text-[#000666]">Interview Session</h2>
      </div>

      <div className="p-1 space-y-2 overflow-y-auto">
        {messages.map((msg, i) => (
          <div key={i}>
            <p
              className={`text-[12px] py-1 font-bold mx-5 ${
                msg.role === "assistant"
                  ? "text-[#1a181d]"
                  : "text-[#6c6cb2] items-end justify-end flex "
              }`}
            >
              {msg.role === "assistant" ? "Interviewer" : "user"}
            </p>

            <p
              className={`mx-5 rounded-md p-1.5 flex ${
                msg.role === "assistant"
                  ? "text-[#57545d] bg-gray-300/30 "
                  : "text-[#402878] bg-[#E0E0FF]  items-end justify-end "
              }`}
            >
              {typeof msg.content === "string"
                ? msg.content
                : String(msg.content)}
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
}
