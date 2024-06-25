import React from "react";
import { useEffect, useState } from "react";
import Speech from "./Speech";
import SaveAudio from "./SaveAudio";
import Popup from "./Popup";

const Client = () => {
  const [openPop, setOpenPop] = useState(false);
  const [audio, setAudio] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-600">
      <h1 className="text-white text-center">Demmarer l'enregistrement</h1>
      <Speech setOpenPop={setOpenPop} />
      <SaveAudio setAudio={setAudio} />

      {openPop ? <Popup audioURL={audio} /> : null}
    </div>
  );
};

export default Client;
