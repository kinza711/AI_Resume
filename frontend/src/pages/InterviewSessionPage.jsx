
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

export default function InterviewSessionPage() {
  const location = useLocation();
  // const { firstQuestion } = location.state || {};

  const [messages, setMessages] = useState([]);

  const { startListening } = useSpeechRecognition();
  const { firstQuestion, systemPrompt } = location.state || {};

  // 🎬 Start interview (AI speaks first)
  // useEffect(() => {
  //   if (firstQuestion) {
  //     const initialMessages = [
  //       {
  //         role: "system",
  //         content: systemPrompt, // ← real interview prompt with job desc + resume
  //       },
  //       {
  //         role: "assistant",
  //         content: firstQuestion,
  //       },
  //     ];

  //     setMessages(initialMessages);

  //     speak(firstQuestion);
  //   }
  // }, [firstQuestion]);
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
      <Header />

      <main className="flex flex-col md:flex-row pt-16 pb-24 h-screen">
        <div className="flex-1">
          <VideoPanel />
        </div>

        <TranscriptPanel messages={messages} />
      </main>

      <ControlBar onMic={handleMic} />
    </div>
  );
}
