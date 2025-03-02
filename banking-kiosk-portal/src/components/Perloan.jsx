import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../style/Perloan.css';
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";
import TextToSpeech from "../TextToSpeech";

const PersonalLoan = () => {
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
    <div className="per-loan-container">
      <Header />
      <h2 className="page-title">Personal Loan</h2>
      <div className="loan-info-container">
        <div className="loan-box">
          <h3>How to Access:</h3>
          <p>
            Personal loans can be accessed through the Vistara Capital website, mobile app, or by visiting a branch. Users can also contact customer service or loan officers for assistance.
          </p>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Personal loans can be accessed through the Vistara Capital website, mobile app, or by visiting a branch. Users can also contact customer service or loan officers for assistance.")}>🔊 Read Aloud</button>
            <button className="stop-btn" onClick={handleStop}>⏹ Stop</button>
          </div>
        </div>
        <div className="loan-box">
          <h3>Procedure:</h3>
          <p>
            Applicants need to fill out the loan application form with basic personal and employment details. After submission, the bank verifies the credit score, employment status, and income to assess repayment capacity. If the applicant meets the criteria, the loan is approved, and the funds are disbursed directly to the applicant’s account, often within 24-48 hours.
          </p>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Applicants need to fill out the loan application form with basic personal and employment details. After submission, the bank verifies the credit score, employment status, and income to assess repayment capacity. If the applicant meets the criteria, the loan is approved, and the funds are disbursed directly to the applicant’s account, often within 24-48 hours.")}>🔊 Read Aloud</button>
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
              <li>Identity proof (PAN Card, Aadhaar, Passport)</li>
              <li>Address proof (Electricity bill, Rental agreement)</li>
              <li>Proof of income (Latest salary slips, bank statements)</li>
              <li>Employment proof (Company ID card, employment certificate)</li>
              <li>Passport-size photographs</li>
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

export default PersonalLoan;
