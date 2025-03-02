import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../style/Busiloan.css';
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";
import TextToSpeech from "../TextToSpeech";

const BusinessLoan = () => {
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
    <div className="business-loan-container">
      <Header />
      <h2 className="page-title">Business Loan</h2>
      <div className="loan-info-container">
        <div className="loan-box">
          <h3>How to Access:</h3>
          <p>
            Businesses can apply for a loan online through Vistara Capital’s business banking portal, via relationship managers, or by visiting the nearest branch.
          </p>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Businesses can apply for a loan online through Vistara Capital’s business banking portal, via relationship managers, or by visiting the nearest branch.")}>🔊 Read Aloud</button>
            <button className="stop-btn" onClick={handleStop}>⏹ Stop</button>
          </div>
        </div>
        <div className="loan-box">
          <h3>Procedure:</h3>
          <p>
            Applicants must complete the business loan application form and provide business-related documents. The bank evaluates the business plan, cash flow, credit history, and profitability. After an internal assessment and due diligence, the loan is sanctioned, and the funds are credited to the business account. A relationship manager may assist throughout the process.
          </p>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Applicants must complete the business loan application form and provide business-related documents. The bank evaluates the business plan, cash flow, credit history, and profitability. After an internal assessment and due diligence, the loan is sanctioned, and the funds are credited to the business account. A relationship manager may assist throughout the process.")}>🔊 Read Aloud</button>
            <button className="stop-btn" onClick={handleStop}>⏹ Stop</button>
          </div>
        </div>
      </div>

      <TextToSpeech text={textToRead} stop={handleStop} />

      <button className="documents-btn" onClick={() => setShowPopup(true)}>
        Documents Required
      </button>

      {showPopup && (
        <div className="popup-box show">
          <div className="popup-content">
            <h3>Required Documents</h3>
            <ul id="documents-list">
              <li>Business registration certificate</li>
              <li>Identity and address proof of business owners</li>
              <li>Bank statements (Last 12 months)</li>
              <li>Income tax returns (Last 2-3 years)</li>
              <li>Financial statements (Profit & loss statement, balance sheet)</li>
              <li>Business plan with projections</li>
              <li>GST registration (if applicable)</li>
            </ul>
            <div className="button-group">
              <button
                className="read-aloud-btn"
                onClick={() => {
                  const docText = Array.from(document.querySelectorAll("#documents-list li"))
                    .map(li => li.textContent)
                    .join(". ");
                  handleReadAloud(`Required Documents: ${docText}`);
                }}
              >
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

export default BusinessLoan;
