import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../style/Vehloan.css';
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";
import TextToSpeech from "../TextToSpeech";

const VehicleLoan = () => {
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
    <div className="veh-loan-container">
      <Header />
      <h2 className="page-title">Vehicle Loan</h2>
      <div className="loan-info-container">
        <div className="loan-box">
          <h3>How to Access:</h3>
          <p>
            Users can apply for a vehicle loan through Vistara Capital’s official website, 
            mobile banking app, or by visiting the nearest branch. Authorized vehicle dealers 
            also assist in facilitating loan applications in partnership with the bank.
          </p>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Users can apply for a vehicle loan through Vistara Capital’s official website, mobile banking app, or by visiting the nearest branch. Authorized vehicle dealers also assist in facilitating loan applications in partnership with the bank.")}>🔊 Read Aloud</button>
            <button className="stop-btn" onClick={handleStop}>⏹ Stop</button>
          </div>
        </div>
        <div className="loan-box">
          <h3>Procedure:</h3>
          <p>
            Applicants must fill out the vehicle loan application form with personal and vehicle details. 
            The bank evaluates the applicant’s credit score, income stability, and repayment capacity. 
            Once verified, the loan is sanctioned, and the funds are disbursed directly to the vehicle dealer. 
            The applicant signs a loan agreement specifying the repayment terms.
          </p>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Applicants must fill out the vehicle loan application form with personal and vehicle details. The bank evaluates the applicant’s credit score, income stability, and repayment capacity. Once verified, the loan is sanctioned, and the funds are disbursed directly to the vehicle dealer. The applicant signs a loan agreement specifying the repayment terms.")}>🔊 Read Aloud</button>
            <button className="stop-btn" onClick={handleStop}>⏹ Stop</button>
          </div>
        </div>
      </div>
      
      <TextToSpeech text={textToRead} stop={handleStop} />
      
      <button className="documents-btn" onClick={() => setShowPopup(true)}>Documents Required</button>

      {showPopup && (
        <div className="popup-box show">
          <div className="popup-content">
            <h3>Required Documents</h3>
            <ul id="documents-list">
              <li>Identity proof (Aadhaar, Passport, Voter ID)</li>
              <li>Address proof (Utility bill, Rental agreement)</li>
              <li>Income proof (Salary slips, IT returns)</li>
              <li>Vehicle-related documents (Proforma invoice, RC copy)</li>
              <li>Bank statements (Last 6 months)</li>
              <li>Passport-size photographs</li>
            </ul>
            <div className="button-group">
              <button className="read-aloud-btn" onClick={() => {
                const docText = Array.from(document.querySelectorAll("#documents-list li"))
                  .map(li => li.textContent)
                  .join(". ");
                handleReadAloud(`Required Documents: ${docText}`);
              }}>🔊 Read Aloud</button>
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

export default VehicleLoan;
