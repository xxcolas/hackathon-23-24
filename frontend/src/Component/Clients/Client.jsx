import React from "react";
import { useEffect, useState } from "react";
import Speech from "./Speech";
import SaveAudio from "./SaveAudio";
import Popup from "./Popup";

const Client = () => {
  const [openPop, setOpenPop] = useState(false);
  const [audio, setAudio] = useState(null);
  const [record, setRecord] = useState(false);
  const [text, setText] = useState("");

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const restartAudio = () => {
    setOpenPop(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-600">
      <h1 className="text-white text-center">Demmarer l'enregistrement</h1>
      <Speech
        setOpenPop={setOpenPop}
        startRecording={startRecording}
        stopRecording={stopRecording}
        setText={setText}
      />
      <SaveAudio setAudio={setAudio} record={record} />

      {openPop ? <Popup audioURL={audio} restartAudio={restartAudio} /> : null}
    </div>
  );
};

export default Client;
