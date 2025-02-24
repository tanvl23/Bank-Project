import React, { useEffect } from "react";

const TextToSpeech = ({ text, stop }) => {
  useEffect(() => {
    if (!text) return;

    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    synth.speak(utterance);

    return () => {
      synth.cancel(); // Stop speech when component unmounts or text is cleared
    };
  }, [text]);

  return null; // No additional buttons, just controls speech
};

export default TextToSpeech;
