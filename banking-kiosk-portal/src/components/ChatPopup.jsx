import React, { useState } from "react";
import "../style/ChatPopup.css"; // Add CSS for positioning

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`chat-container ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "−" : "Chat"}
      </button>
      {isOpen && (
        <div className="chat-box">
          <h4>Select a Question</h4>
          {/* Fetch questions from backend and display */}
          <button>Question 1</button>
          <button>Question 2</button>
          {/* Chat UI */}
          <div className="messages">
            <p>User: Hello</p>
            <p>Bot: Hi! How can I help?</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPopup;
