import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useSearchParams } from "react-router-dom";

const Message = ({ data }) => {
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
            <div className="chat-bubble bg-blue-600 group-data-[state=practitioner]:bg-gray-200 group-data-[state=practitioner]:text-black text-white">
              {item.text}
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
