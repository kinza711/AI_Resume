export function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.cancel(); // stop any overlap

  speech.rate = 1;
  speech.pitch = 1;
  speech.volume = 1;
  speech.lang = "en-US";

  window.speechSynthesis.speak(speech);
}

export function stopSpeaking() {
  window.speechSynthesis.cancel(); // 🔥 kills voice instantly
}
