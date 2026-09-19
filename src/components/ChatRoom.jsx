
import { useState } from "react";

const ChatRoom = ({ username, room, onLeave }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = (e) => {
    e.preventDefault();

    if (message.trim()) {
      setMessages((prev) => [
        ...prev,
        {
          username: username,
          text: message,
        },
      ]);

      setMessage("");
    }
  };

  return (
    <div className="chatroom-container">
      <div className="chatroom-header">
        <h2>Room: {room}</h2>

        <button
          className="leave-btn"
          onClick={onLeave}
        >
          Leave
        </button>
      </div>

      <div className="chat-messages">
        {messages.length === 0 ? (
          <p className="empty-message">
            No messages yet. Start chatting!
          </p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message${
                msg.username === username ? " own" : ""
              }`}
            >
              <span className="chat-username">
                {msg.username}:
              </span>{" "}
              <span>{msg.text}</span>
            </div>
          ))
        )}
      </div>

      <form
        className="chat-input-form"
        onSubmit={handleSend}
      >
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          autoFocus
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatRoom;

