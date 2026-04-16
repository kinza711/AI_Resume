import { useState } from "react";

export default function useSpeechRecognition(onResult) {
  const [listening, setListening] = useState(false);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

  recognition.continuous = false;
  recognition.lang = "en-US";

  const startListening = () => {
    setListening(true);
    recognition.start();
  };

  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    setListening(false);
    onResult(text);
  };

  recognition.onerror = () => {
    setListening(false);
  };

  return { startListening, listening };
}