import { url } from "@/constants"
import { XMarkIcon } from "@heroicons/react/24/outline"
import React, { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { User, type Message } from "@/types"
import * as Dialog from "@radix-ui/react-dialog"
import { VisuallyHidden } from "@radix-ui/themes"

const Message = ({ data }: { data: User[] }) => {
  let [searchParams, setSearchParams] = useSearchParams()
  const [message, setMessage] = useState("")

  const id = searchParams.get("id") || ""
  let client = data.find((item) => item._id === id)
  if (!client) return null

  const sendMessage = (id) => {
    let practitionerMessage: Message = {
      text: message,
      sender: "PRACTITIONER",
      date: new Date().toDateString(),
      type: "text",
    }

    if (message) {
      client.messages.push(practitionerMessage)
      setMessage("")
    }

    fetch(`${url}/users/${id}/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: practitionerMessage }),
    })
      .then((res) => {
        // scroll down the chat
        let chat = document.querySelector(".container-messages")
        chat.scrollTop = chat.scrollHeight
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <section className="absolute animate-slideUp h-4/5 w-[400px] bg-white rounded-lg border-solid overflow-y-hidden border-blue-300 right-5 bottom-5 shadow-md">
      <article className="w-full rounded-t-lg px-4 bg-blue-500 py-2 text-lg text-white flex justify-between">
        <span>Historique des messages - {client.firstname}</span>
        <button onClick={() => setSearchParams({})}>
          <XMarkIcon className="size-4" />
        </button>
      </article>
      <div className="container-messages overflow-y-scroll h-full pb-28">
        {client.messages.map((item, index) => (
          <div
            key={index}
            data-state={item.sender === "PATIENT" ? "patient" : "practitioner"}
            className="group chat data-[state=patient]:chat-start data-[state=practitioner]:chat-end"
          >
            <div className="chat-bubble bg-gray-200 group-data-[state=practitioner]:bg-blue-600 group-data-[state=practitioner]:text-white text-black">
              {item.type === "text" ? (
                <p>{item.text}</p>
              ) : (
                <div className="flex flex-col h-full flex-end">
                  <div>
                    <p>{item.text ?? item?.audio?.summary}</p>
                    {item.audio && (
                      <Dialog.Root>
                        <Dialog.Trigger asChild>
                          <button className="flex mt-2 text-gray-300 group-data-[state=patient]:text-blue-500 font-semibold hover:bg-black/20 px-2 rounded py-1 flex-end text-sm">
                            Plus
                          </button>
                        </Dialog.Trigger>
                        <Dialog.Portal>
                          <Dialog.Overlay className="bg-black/60 fixed inset-0" />
                          <Dialog.Content
                            aria-describedby={undefined}
                            className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-white p-6 focus:outline-none flex flex-col items-center gap-2"
                          >
                            <VisuallyHidden asChild>
                              <Dialog.Title />
                            </VisuallyHidden>
                            {item.audio.file && (
                              <audio controls className="w-full">
                                <source
                                  src={`data:audio/wav;base64,${item.audio.file}`}
                                  type="audio/wav"
                                />
                              </audio>
                            )}
                            {item.audio.transcript && (
                              <p className="w-full p-3 rounded bg-gray-100">
                                {item.audio.transcript}
                              </p>
                            )}
                          </Dialog.Content>
                        </Dialog.Portal>
                      </Dialog.Root>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="chat-footer">
              <time className="text-xs opacity-50">
                {new Date(item.date).toDateString()}
              </time>
            </div>
          </div>
        ))}
      </div>

      {/* Input field */}
      <form
        className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="relative">
          <input
            type="email"
            className="peer py-3 px-4 pe-16 block w-full bg-gray-100 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none border border-gray-300 "
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center px-4 bg-gray-100 m-1 text-gray-700"
            onClick={() => sendMessage(client._id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </form>
    </section>
  )
}

export default Message
