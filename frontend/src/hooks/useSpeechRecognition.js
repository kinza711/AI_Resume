import { useState, useRef } from "react";

export function useSpeechRecognition() {
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!recognitionRef.current && SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-US";

    recognitionRef.current = recognition;
  }

  const startListening = (onResult) => {
    if (!recognitionRef.current) return;

    const recognition = recognitionRef.current;

    setListening(true);
    recognition.start();

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setListening(false);
      onResult(text); // ✅ THIS IS IMPORTANT
    };

    recognition.onerror = () => {
      setListening(false);
    };
  };

  // ✅ ADD THIS
  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  return { startListening, stopListening, listening };
}
