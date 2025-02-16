import React, { useState } from "react";
import AccountInfo from "./components/Accinfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatPopup from "./ChatPopup"; // Chat component


const ChatApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AccountInfo />} />
      </Routes>
      <ChatPopup /> {/* Persistent Chat */}
    </Router>
  );
};

export default ChatApp;
