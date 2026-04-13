import React from "react";
import Header from "../components/header/Header";
import VideoPanel from "../components/interview/interviewSession/VideoPanel";
import TranscriptPanel from "../components/interview/interviewSession/TranscriptPanel";
import ControlBar from "../components/interview/interviewSession/ControlBar";

export default function InterviewSessionPage() {
  return (
    <div className="bg-[#f7f9fb] min-h-screen flex flex-col overflow-hidden">
      <Header />

      <main className="flex flex-col md:flex-row pt-16 pb-24 h-screen">
        {/* Video */}
        <div className="flex-1">
          <VideoPanel />
        </div>

        {/* Transcript */}
        <TranscriptPanel />
      </main>

      <ControlBar />
    </div>
  );
}
