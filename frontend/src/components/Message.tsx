import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Message = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  let [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id") || "";
  let client = data.find((item) => item._id === id);
  if (!client) return null;
  return (
    <section className="absolute animate-slideUp h-4/5 w-[400px] bg-white rounded-lg border-solid overflow-y-hidden border-blue-300 right-5 bottom-5 shadow-md ">
      <article className="w-full rounded-t-lg px-4 bg-blue-500 py-2 text-lg text-white flex justify-between">
        <span>Historique des messages - {client.firstname}</span>
        <button onClick={() => setSearchParams({})}>
          <XMarkIcon className="size-4" />
        </button>
      </article>
      <div className="overflow-y-scroll h-[500px]">
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
                    <p>{item.text}</p>
                    {isExpanded && (
                      <>
                        <audio controls>
                          <source src={item.file} type="audio/wav" />
                        </audio>
                        <p>{item.transcript}</p>
                      </>
                    )}
                  </div>
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex mt-2 text-gray-400 flex-end text-sm"
                  >
                    {isExpanded ? "Moins" : "Plus"}
                  </button>
                </div>
              )}
            </div>
            <div className="chat-footer">
              <time className="text-xs opacity-50">{item.date}</time>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Message;
