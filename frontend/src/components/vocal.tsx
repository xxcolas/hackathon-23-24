import React, { useState } from "react";
import { MicrophoneIcon } from "@heroicons/react/24/outline";
import AudioWave from "@/components/audio-wave";

const Vocal = () => {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="flex justify-center items-center size-full my-auto mt-24">
      <button
        onMouseDown={() => setIsRecording(true)}
        onMouseUp={() => setIsRecording(false)}
        onMouseLeave={() => setIsRecording(false)}
        data-state={isRecording ? "recording" : "idle"}
        className="px-8 py-2 rounded-lg border-2 hover:bg-gray-100 border-gray-400 text-purple-500 data-[state=recording]:text-red-500"
      >
        {isRecording ? (
          <AudioWave className="size-12" />
        ) : (
          <MicrophoneIcon className="size-12 " />
        )}
      </button>
    </div>
  );
};

export default Vocal;
