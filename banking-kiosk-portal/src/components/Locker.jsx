import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../style/Locker.css';
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";
import TextToSpeech from "../TextToSpeech"; 

const Locker = () => {
  const navigate = useNavigate();
  const [textToRead, setTextToRead] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State for pop-up

  const handleReadAloud = (text) => {
    setTextToRead(text);
  };

  const handleStop = () => {
    setTextToRead(""); // This will trigger stop in TextToSpeech component
  };

  return (
    <div className="locker-container">
      <Header />
      <h2 className="page-title">Locker Services</h2>
      <div className="locker-info-container">
        <div className="locker-box">
          <h3>Eligibility & Process to Avail a Locker:</h3>
          <ul>
          <li>Must have a savings or current account with the bank.</li>
          <li>Fill out the locker rental agreement and provide necessary KYC documents.</li>
	       <li>Pay a refundable security deposit (in some cases).</li>
         <li>The locker is assigned based on availability, with priority given to existing customers.</li>
          </ul>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Eligibility & Process to Avail a Locker.Must have a savings or current account with the bank.Fill out the locker rental agreement and provide necessary KYC documents.Pay a refundable security deposit (in some cases).The locker is assigned based on availability, with priority given to existing customers.")}>
              🔊 Read Aloud
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ Stop
            </button>
          </div>
        </div>
        <div className="locker-box">
          <h3>Charges & Fees:</h3>
          <ul>
          <li>Annual rental fees vary based on the size of the locker and the bank’s location (urban or rural branches).</li>
          <li>Security deposit may be required.</li>
          <li>Penalty charges for late payments or not operating the locker for long durations.</li>
            </ul>
         
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Charges & Fees.Annual rental fees vary based on the size of the locker and the bank’s location (urban or rural branches).Security deposit may be required.Penalty charges for late payments or not operating the locker for long durations.")}>
              🔊 Read Aloud
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ Stop
            </button>
          </div>
        </div>
        <div className="locker-box">
          <h3>Terms & Conditions:</h3>
          <ul>
          <li>Banks have the right to break open the locker if rent is unpaid for a long time.</li>
          <li>	Customers must maintain the locker and cannot store prohibited items.</li>
	       <li>Access is given only to authorized persons (owner, nominee, or joint holder).</li>
         
          </ul>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Terms & Conditions.Banks have the right to break open the locker if rent is unpaid for a long time.Customers must maintain the locker and cannot store prohibited items.Access is given only to authorized persons (owner, nominee, or joint holder).")}>
              🔊 Read Aloud
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ Stop
            </button>
          </div>
        </div>
      </div>

      <TextToSpeech text={textToRead} stop={handleStop} />

      {/* Button to open the popup
      <button className="documents-btn" onClick={() => setShowPopup(true)}>
        Documents Required
      </button> */}

      {/* Popup Box */}
      {/* {showPopup && ( */}
        {/* // <div className="popup-box show">
          <div className="popup-content">
            <h3>Required Documents</h3>
            <ul id="documents-list">
              <li>Identity Proof (Aadhar, PAN Card)</li>
              <li>Address Proof (Utility Bill, Passport)</li>
              <li>Income Proof (Salary Slip, ITR)</li>
              <li>Bank Statements (Last 6 Months)</li>
              <li>Property Documents</li>
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
              <button className="stop-btn" onClick={handleStop}>
                ⏹ Stop
              </button>
            </div>
            <button className="close-btn" onClick={() => setShowPopup(false)}>Close</button>
          </div> */}
         {/* </div> */}
      {/* )} */}

      <Footer />
     </div>
  );
 };  

export default Locker;  
