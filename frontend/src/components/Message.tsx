import React from "react";

const Message = ({ data, id, closeMessage }) => {
  let client = data.find((item) => item._id === id);

  return (
    <>
      <div className="absolute h-4/5 w-1/3 bg-white rounded-lg border-solid border-blue-300 p-8 right-0 bottom-5">
        <div className="">{client.firstname}</div>
        {client.messages.map((item, index) =>
          item.sender === "PATIENT" ? (
            <div key={index} className="chat chat-start">
              <div className="chat-bubble bg-gray-600">{item.text}</div>
              <div className="chat-footer">
                <time className="text-xs opacity-50">{item.date}</time>
              </div>
            </div>
          ) : (
            <div key={index} className="chat chat-end">
              <div className="chat-bubble bg-green-600">{item.text}</div>
              <div className="chat-footer">
                <time className="text-xs opacity-50">{item.date}</time>
              </div>
            </div>
          )
        )}
        <button onClick={closeMessage}>x</button>
      </div>
    </>
  );
};

export default Message;
