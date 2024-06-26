import React from "react";

const Message = ({ data }) => {
  return (
    <>
      <div className="absolute h-4/5 w-1/3 bg-white rounded-lg border-solid border-blue-300 p-8 right-0 bottom-5">
        <div className="chat chat-start">
          <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble">
            It's over Anakin,
            <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
        </div>
      </div>
    </>
  );
};

export default Message;
