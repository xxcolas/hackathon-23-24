import React, { useState } from "react";
import { ReactMic } from "react-mic";

const SaveAudio = ({ setAudio }) => {
  const [record, setRecord] = useState(false);
  const [blobURL, setBlobURL] = useState(null);

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onData = (recordedBlob) => {
    console.log("chunk of real-time data is: ", recordedBlob);
  };

  const onStop = (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);
    setBlobURL(URL.createObjectURL(recordedBlob.blob));
    setAudio(URL.createObjectURL(recordedBlob.blob));
  };

  return (
    <div>
      <ReactMic
        record={record}
        className="sound-wave"
        onStop={onStop}
        P
        onData={onData}
        strokeColor="#000000"
        backgroundColor="#FF4081"
      />
      <button onClick={startRecording} type="button">
        Start
      </button>
      <button onClick={stopRecording} type="button">
        Stop
      </button>
      {blobURL && (
        <div>
          <h3>Écouter l'enregistrement :</h3>
          <audio src={blobURL} controls="controls" />
        </div>
      )}
    </div>
  );
};

export default SaveAudio;
