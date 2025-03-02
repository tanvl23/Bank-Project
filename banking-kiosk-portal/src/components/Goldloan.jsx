import React, { useState } from 'react'; 
import { useNavigate } from "react-router-dom";
import '../style/Goldloan.css';
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";
import TextToSpeech from "../TextToSpeech";

const GoldLoan = () => {
  const navigate = useNavigate();
  const [textToRead, setTextToRead] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleReadAloud = (text) => {
    setTextToRead(text);
  };

  const handleStop = () => {
    setTextToRead("");
  };

  return (
    <div className="gold-loan-container">
      <Header />
      <h2 className="page-title">Gold Loan</h2>
      <div className="loan-info-container">
        <div className="loan-box">
          <h3>How to Access:</h3>
          <p>
            Gold loans can be accessed by visiting any Vistara Capital branch offering this service. Some branches offer doorstep gold loan services, and initial applications can be submitted online for faster processing.
          </p>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Gold loans can be accessed by visiting any Vistara Capital branch offering this service. Some branches offer doorstep gold loan services, and initial applications can be submitted online for faster processing.")}>🔊 Read Aloud</button>
            <button className="stop-btn" onClick={handleStop}>⏹ Stop</button>
          </div>
        </div>
        <div className="loan-box">
          <h3>Procedure:</h3>
          <p>
            The applicant needs to bring their gold ornaments to the branch. The gold is evaluated for purity and weight, and based on its value, the loan amount is sanctioned. The process is quick, often taking less than an hour. After verification, the gold is securely stored by the bank until the loan is repaid.
          </p>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("The applicant needs to bring their gold ornaments to the branch. The gold is evaluated for purity and weight, and based on its value, the loan amount is sanctioned. The process is quick, often taking less than an hour. After verification, the gold is securely stored by the bank until the loan is repaid.")}>🔊 Read Aloud</button>
            <button className="stop-btn" onClick={handleStop}>⏹ Stop</button>
          </div>
        </div>
      </div>
      
      <TextToSpeech text={textToRead} stop={handleStop} />

      {/* Button to open the popup */}
      <button className="documents-btn" onClick={() => setShowPopup(true)}>
        Documents Required
      </button>
      
      {/* Popup Box */}
      {showPopup && (
        <div className="popup-box show">
          <div className="popup-content">
            <h3>Required Documents</h3>
            <ul id="documents-list">
              <li>Identity Proof (Aadhaar, PAN, Passport)</li>
              <li>Address Proof (Utility Bill, Driving License)</li>
              <li>Recent Passport-size Photographs</li>
              <li>No Income Proof Required as the Loan is Secured by Gold</li>
            </ul>
            <div className="button-group">
              <button className="read-aloud-btn" onClick={() => {
                const docText = Array.from(document.querySelectorAll("#documents-list li"))
                  .map(li => li.textContent)
                  .join(". ");
                handleReadAloud(`Required Documents: ${docText}`);
              }}>
                🔊 Read Aloud
              </button>
              <button className="stop-btn" onClick={handleStop}>⏹ Stop</button>
            </div>
            <button className="close-btn" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default GoldLoan;








