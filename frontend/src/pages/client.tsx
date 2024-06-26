import React from "react";
import { MicrophoneIcon, StopIcon } from "@heroicons/react/24/outline";

import { useEffect, useState } from "react";
// @ts-ignore
import { ReactMic } from "react-mic";

const Client = () => {
  // const [isListening, setIsListening] = useState(false);
  const [isRecording, setIsRecording] = useState<boolean | null>(false);

  const [audio, setAudio] = useState(null);
  const [blobURL, setBlobURL] = useState(null);
  const [text, setText] = useState("");
  // const [text, setText] = useState(
  //   "Super trop cool, je suis un supet text de malde mentale ahaha. Super trop cool, je suis un supet text de malde mentale ahaha. Super trop cool, je suis un supet text de malde mentale ahaha. Super trop cool, je suis un supet text de malde mentale ahaha. Super trop cool, je suis un supet text de malde mentale ahaha."
  // );
  const [transcript, setTranscript] = useState("");

  const onStop = (recordedBlob) => {
    setBlobURL(URL.createObjectURL(recordedBlob.blob));
    setAudio(URL.createObjectURL(recordedBlob.blob));
  };

  const handleRecording = () => {
    setAudio(null);
    setIsRecording((prevState) => !prevState);
  };

  const sendAudio = () => {};

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Votre navigateur ne supporte pas la Web Speech API");
      return;
    }
    // @ts-ignore
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "fr-FR";

    recognition.onstart = () => setIsRecording(true);
    recognition.onend = () => setIsRecording(false);

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

    if (isRecording) recognition.start();
    else recognition.stop();

    return () => {
      recognition.stop();
    };
  }, [isRecording]);

  return (
    <div className="flex flex-col items-center justify-start py-8">
      <button
        onClick={handleRecording}
        data-state={isRecording ? "recording" : "idle"}
        className="bg-green-400 data-[state=recording]:bg-red-500 text-white font-bold size-28 p-8 rounded-full"
      >
        {isRecording ? <StopIcon /> : <MicrophoneIcon />}
      </button>
      <ReactMic
        record={isRecording}
        className="sound-wave w-10/12"
        onStop={onStop}
        strokeColor="#2563eb"
      />
      {!isRecording && audio && (
        <div className="m-8 flex flex-col items-center rounded-lg gap-2">
          <p className="p-4 rounded-lg bg-gray-100 truncate">{text}</p>

          <div className="flex gap-2 items-center w-full">
            <audio className="flex-3 w-full" src={audio} controls />
            <button
              onClick={sendAudio}
              className="text-white bg-green-500 py-2 rounded-lg px-6"
            >
              Envoyer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Client;
