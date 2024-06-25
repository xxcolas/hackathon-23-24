import React, { useState, useEffect } from "react";

const SpeechRecognitionComponent = ({
  setOpenPop,
  startRecording,
  stopRecording,
  setText,
}) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Votre navigateur ne supporte pas la Web Speech API");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "fr-FR";

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event) => {
      let interimTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcriptSegment = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          setTranscript(transcriptSegment);
          setText(transcriptSegment);
        } else {
          interimTranscript += transcriptSegment;
        }
      }
    };

    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => {
      recognition.stop();
      console.log("isListening", isListening);
      if (isListening) {
        setOpenPop(true);
      } else {
        setOpenPop(false);
      }
    };
  }, [isListening]);

  const handleListening = () => {
    setIsListening((prevState) => !prevState);
    if (!isListening) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  return (
    <div className="p-4 ">
      <button
        onClick={handleListening}
        className="bg-red-500 text-white font-bold w-28 h-28 rounded-full"
      >
        {isListening ? "Arrêter" : "Commencer"} l'écoute
      </button>
      {/* <div className="mt-4">
        <p>Texte reconnu : {transcript}</p>
      </div> */}
    </div>
  );
};

export default SpeechRecognitionComponent;
