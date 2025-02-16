import React from "react";
import AccountInfo from "../components/Accinfo"; // Your main page
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatPopup from "../components/ChatPopup"; // Import ChatPopup
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AccountInfo/>} />
      </Routes>
      <ChatPopup /> {/* Ensure this is added here */}
    </Router>
  );
};

export default App;
