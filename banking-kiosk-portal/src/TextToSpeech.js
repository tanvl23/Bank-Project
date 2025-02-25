<<<<<<< HEAD
import React, { useEffect } from "react";
=======
                                                                                                                                                                                                       import React, { useEffect } from "react";
>>>>>>> 96edabf419bf240cb8e5a109345772386ce541fc

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

<<<<<<< HEAD
export default TextToSpeech;
=======
export default TextToSpeech;
>>>>>>> 96edabf419bf240cb8e5a109345772386ce541fc
