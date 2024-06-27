import React from "react"
import { MicrophoneIcon, StopIcon } from "@heroicons/react/24/outline"

import { useEffect, useState } from "react"
// @ts-ignore
import { ReactMic } from "react-mic"
import { uploadAudioFileWithTranscript } from "@/services"
import { useSearchParams } from "react-router-dom"

const Client = () => {
  const [searchParams, _] = useSearchParams()

  const [isRecording, setIsRecording] = useState<boolean | null>(false)

  const [audio, setAudio] = useState(null)
  const [blobURL, setBlobURL] = useState(null)
  const [text, setText] = useState("")
  const [transcript, setTranscript] = useState("")
  const [toast, setToast] = useState(false)

  const onStop = (recordedBlob) => {
    setBlobURL(recordedBlob.blob)
    setAudio(URL.createObjectURL(recordedBlob.blob))
  }

  const handleRecording = () => {
    setAudio(null)
    setIsRecording((prevState) => !prevState)
  }

  const sendAudio = async (blob: Blob, transcript: string) => {
    setToast(true)
    setTimeout(() => {
      setToast(false)
    }, 3000)

    setAudio(null)
    setTranscript("")
    setText("")

    const userId = searchParams.get("uid")
    const file = new File([blob], "file")
    await uploadAudioFileWithTranscript(userId, file, transcript)
  }

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Votre navigateur ne supporte pas la Web Speech API")
      return
    }
    // @ts-ignore
    const recognition = new window.webkitSpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = "fr-FR"

    recognition.onstart = () => setIsRecording(true)
    recognition.onend = () => setIsRecording(false)

    recognition.onresult = (event) => {
      let interimTranscript = ""
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcriptSegment = event.results[i][0].transcript
        if (event.results[i].isFinal) {
          setTranscript(transcriptSegment)
          setText(transcriptSegment)
        } else {
          interimTranscript += transcriptSegment
        }
      }
    }

    if (isRecording) recognition.start()
    else recognition.stop()

    return () => {
      recognition.stop()
    }
  }, [isRecording])

  return (
    <div className="flex flex-col items-center justify-start py-8">
      <button
        onClick={handleRecording}
        data-state={isRecording ? "recording" : "idle"}
        data-audio={audio ? "true" : "false"}
        className="bg-green-400 data-[state=recording]:bg-red-500 flex justify-center items-center text-white font-bold size-36 p-12 rounded-full"
      >
        {isRecording ? (
          <StopIcon />
        ) : audio ? (
          "RECOMMENCER"
        ) : (
          <MicrophoneIcon />
        )}
      </button>
      <ReactMic
        record={isRecording}
        className="sound-wave w-10/12"
        onStop={onStop}
        strokeColor="#2563eb"
      />
      {!isRecording && audio && (
        <div className="m-8 flex flex-col items-center rounded-lg gap-2 min-w-full max-w-96 px-4">
          <p className="p-4 rounded-lg bg-gray-100">{text}</p>

          <div className="flex flex-col md:flex-wrap gap-2 items-center w-full">
            <audio className="flex-3 w-full max-w-96" src={audio} controls />
            <button
              onClick={(e) => sendAudio(blobURL, transcript)}
              className="text-white bg-green-500 py-2 rounded-lg px-6"
            >
              Envoyer
            </button>
          </div>
        </div>
      )}
      {
        toast && (
          <div className="absolute top-10 right-10 max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg" role="alert">
            <div className="flex p-4">
              <div className="flex-shrink-0">
                <svg className="flex-shrink-0 size-4 text-teal-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                </svg>
              </div>
              <div className="ms-3">
                <p className="text-sm text-gray-700">
                  Audio envoyé avec succès
                </p>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Client
