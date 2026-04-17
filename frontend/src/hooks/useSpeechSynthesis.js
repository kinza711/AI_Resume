// export default function speak(text) {
//   const speech = new SpeechSynthesisUtterance(text);
//   speech.rate = 1; // speed
//   speech.pitch = 1; // 0 to 2 (robot → cartoon)
//   speech.volume = 1; // 0 to 1
//   speech.lang = "en-US";
//   speechSynthesis.speak(speech);
// }

export function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.rate = 1;
  speech.pitch = 1;
  speech.volume = 1;
  speech.lang = "en-US";

  window.speechSynthesis.speak(speech);
}
