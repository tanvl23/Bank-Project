import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../style/Atm.css';
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";
import TextToSpeech from "../TextToSpeech"; 

const ATM = () => {
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
    <div className="atm-container">
      <Header />
      <h2 className="page-title">Atm Services</h2>
      <div className="atm-info-container">
        <div className="atm-box">
          <h3>Eligibility & Process to Use ATM Services:</h3>
          <ul>
          <li>Customers must have a debit card, ATM card, or credit card issued by their bank.</li>
          <li>The card must be activated and linked to a valid bank account.</li>
	       <li>Transactions require a 4-digit or 6-digit PIN for security.</li>
         <li>	ATMs may have daily transaction limits set by the bank.</li>
          </ul>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Eligibility & Process to Use ATM Services.Customers must have a debit card, ATM card, or credit card issued by their bank.The card must be activated and linked to a valid bank account.Transactions require a 4-digit or 6-digit PIN for security.ATMs may have daily transaction limits set by the bank.")}>
              🔊 Read Aloud
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ Stop
            </button>
          </div>
        </div>
        <div className="atm-box">
          <h3>Charges & Fees:</h3>
          <ul>
          <li>Free Transactions: Most banks offer a limited number of free ATM transactions per month (e.g., 3-5 free withdrawals at other bank ATMs).</li>
          <li>Extra Transaction Charges: A small fee is charged for exceeding free monthly limits.</li>
          <li>Interbank ATM Charges: Using another bank’s ATM may incur a transaction fee after the free limit.</li>
          <li>International ATM Fees: Foreign ATM withdrawals have higher charges, along with currency conversion fees.</li>
          <li>Card Replacement Fee: If the ATM card is lost or stolen, banks charge a fee for reissuing a new one.</li>
            </ul>
        
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Charges & Fees.Free Transactions: Most banks offer a limited number of free ATM transactions per month (e.g., 3-5 free withdrawals at other bank ATMs).Extra Transaction Charges: A small fee is charged for exceeding free monthly limits.Interbank ATM Charges: Using another bank’s ATM may incur a transaction fee after the free limit.International ATM Fees: Foreign ATM withdrawals have higher charges, along with currency conversion fees.Card Replacement Fee: If the ATM card is lost or stolen, banks charge a fee for reissuing a new one.")}>
              🔊 Read Aloud
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ Stop
            </button>
          </div>
        </div>
        {/* <div className="atm-box">
          <h3>Terms & Conditions:</h3>
          <ul>
          <li>Banks have the right to break open the locker if rent is unpaid for a long time.</li>
          <li>	Customers must maintain the locker and cannot store prohibited items.</li>
	       <li>Access is given only to authorized persons (owner, nominee, or joint holder).</li>
         
          </ul>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Users can apply for a home loan through multiple channels. They can visit the nearest Vistara Capital branch, apply via the official website, or use the mobile banking application. Dedicated loan officers are also available for personalized assistance.")}>
              🔊 Read Aloud
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ Stop
            </button>
          </div>
        </div> */}
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

export default ATM;  
