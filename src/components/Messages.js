import { useState } from "react/cjs/react.production.min";
import "./Messages.css";

const messages = [
  {
    username: "zulfan",
    text: "Hallo, perkenalkan saya Zulfan.. Senang bertemu dengan kamu",
    date: "10:20",
  },
  { username: "yana", text: "Hai, salam kenal :)", date: "11:45" },
  { username: "romi", text: "Hallo, salam kenal juga", date: "11:50" },
];

export default function Messages({ name = "romi" }) {
  return (
    <>
      <div className="messagesContainer">
        {messages.map((message, i) => (
          <div
            key={i}
            className="message_wrapper"
            style={message.username === name ? { textAlign: "right" } : {}}
          >
            <div
              className="message_text"
              style={
                message.username === name
                  ? { backgroundColor: "darkcyan", color: "#fff" }
                  : {}
              }
            >
              {message.username !== name && (
                <strong className="username">{message.username}</strong>
              )}
              <p className="chat_text">{message.text}</p>
              <small className="chat_date">{message.date}</small>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const userStyleChat = {
  message_wrapper: {
    textAlign: "right",
  },
};
