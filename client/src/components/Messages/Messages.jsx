import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

// styles
import "./Messages.css";
//component
import Message from "../Message/Message.jsx";

const Messages = ({ messages, name }) => {
  return (
    <ScrollToBottom className="messages">
      {messages &&
        messages.map((message, i) => (
          <div key={i}>
            <Message message={message} name={name} />
          </div>
        ))}
    </ScrollToBottom>
  );
};

export default Messages;
