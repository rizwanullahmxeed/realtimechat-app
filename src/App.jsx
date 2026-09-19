
import { useState } from "react";
import ChatRoom from "./components/ChatRoom";
import "./App.css";

function App() {
  const [joined, setJoined] = useState(false);
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() && room.trim()) {
      setJoined(true);
    }
  };

  const handleLeave = () => {
    setUsername("");
    setRoom("");
    setJoined(false);
  };

  return (
    <>
      {!joined ? (
        <div className="join-group-container">
          <h2>Join a Chat Group</h2>

          <form
            className="join-group-form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Group Name"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              required
            />

            <button type="submit">Join</button>
          </form>
        </div>
      ) : (
        <ChatRoom
          username={username}
          room={room}
          onLeave={handleLeave}
        />
      )}
    </>
  );
}

export default App;

