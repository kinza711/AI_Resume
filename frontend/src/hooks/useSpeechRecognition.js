// import { useState } from "react";

// export default function useSpeechRecognition(onResult) {
//   const [listening, setListening] = useState(false);

//   const SpeechRecognition =
//     window.SpeechRecognition || window.webkitSpeechRecognition;

//   const recognition = new SpeechRecognition();

//   recognition.continuous = false;
//   //recognition.interimResults = false;
//   recognition.lang = "en-US";

//   const startListening = () => {
//     setListening(true);
//     recognition.start();
//   };

//   recognition.onresult = (event) => {
//     const text = event.results[0][0].transcript;
//     setListening(false);
//     onResult(text);
//   };

//   recognition.onerror = () => {
//     setListening(false);
//   };

//   return { startListening, listening };
// }


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

  return { startListening, listening };
}