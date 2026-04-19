import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import { useSpeechRecognition } from "../hooks/useSpeechRecognition";
import { speak } from "../hooks/useSpeechSynthesis";
import Header from "../components/header/Header";
import VideoPanel from "../components/interview/interviewSession/VideoPanel";
import TranscriptPanel from "../components/interview/interviewSession/TranscriptPanel";
import ControlBar from "../components/interview/interviewSession/ControlBar";
import { useRef } from "react";
import Sidebar from "../components/sidebar/Sidebar";

export default function InterviewSessionPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation();
  // const { firstQuestion } = location.state || {};

  const [messages, setMessages] = useState([]);

  const { startListening } = useSpeechRecognition();
  const { firstQuestion, systemPrompt } = location.state || {};
  const hasSpoken = useRef(false); // ← add this
  useEffect(() => {
    if (firstQuestion && !hasSpoken.current) {
      hasSpoken.current = true; // ← mark as spoken

      const initialMessages = [
        {
          role: "assistant",
          content: firstQuestion,
        },
      ];

      setMessages(initialMessages);
      speak(firstQuestion);
    }
  }, [firstQuestion]);

  // 🎤 Mic Click
  const handleMic = () => {
    startListening(async (userText) => {
      const updatedMessages = [
        ...messages,
        { role: "user", content: userText },
      ];

      setMessages(updatedMessages);

      const cleanedMessages = updatedMessages.map((m) => ({
        role: m.role,
        content: String(m.content),
      }));

      try {
        const res = await api.post("/answer", {
          messages: cleanedMessages,
        });

        const aiReply = res.data.data; // depends on backend

        const newMessages = [
          ...updatedMessages,
          { role: "assistant", content: aiReply },
        ];

        setMessages(newMessages);

        speak(aiReply); // 🎤 AI reply
        console.log("SENDING TO AI:", updatedMessages);
      } catch (err) {
        console.error(err);
      }
    });
  };

  return (
    <div className="bg-[#f7f9fb] min-h-screen flex flex-col overflow-hidden">
      <Header setIsSidebarOpen={setIsSidebarOpen} />
      {/* Sidebar (desktop only) */}
      <aside className="hidden lg:flex w-64 fixed left-0 top-0 h-full z-20">
        <Sidebar isOpen={true} setIsOpen={setIsSidebarOpen} />
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white transform transition-transform duration-300 lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <main className="flex flex-col md:flex-row pt-16 pb-24 h-screen lg:pl-72 px-4 sm:px-6 lg:px-10">
        <div className="flex-1">
          <VideoPanel />
        </div>

        <TranscriptPanel messages={messages} />
      </main>

      <ControlBar onMic={handleMic} />
    </div>
  );
}
