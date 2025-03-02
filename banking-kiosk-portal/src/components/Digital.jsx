import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../style/Digital.css';
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";
import TextToSpeech from "../TextToSpeech"; 

const Digital = () => {
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
    <div className="digital-container">
      <Header />
      <h2 className="page-title">Digital Services</h2>
      <div className="digital-info-container">
        <div className="digital-box">
          <h3>Eligibility & Process to Avail Digital Banking:</h3>
          <ul>
          <li>Customers must have a savings or current account with the bank.</li>
          <li>Register for net banking or mobile banking services.</li>
	       <li>Secure login using user ID, password, and OTP authentication.</li>
         <li>Some services require linking the mobile number to the bank account.</li>
          </ul>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Eligibility & Process to Avail Digital Banking.Customers must have a savings or current account with the bank.Register for net banking or mobile banking services.Secure login using user ID, password, and OTP authentication.Some services require linking the mobile number to the bank account.")}>
              🔊 Read Aloud
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ Stop
            </button>
          </div>
        </div>
        <div className="digital-box">
          <h3>Charges & Fees:</h3>
          <ul>
          <li>Free for Basic Services: Balance inquiry, fund transfers, and online shopping are usually free.</li>
          <li>Transaction Charges: Some fund transfers (RTGS, NEFT) may have small charges.</li>
          <li>Cardless Cash Withdrawal Fee: Certain banks charge a fee for cash withdrawal via mobile banking.</li>
          <li>Premium Services: Advanced digital services like priority banking apps may have subscription fees.</li>

            </ul>
         
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Charges & Fees.Free for Basic Services: Balance inquiry, fund transfers, and online shopping are usually free.Transaction Charges: Some fund transfers (RTGS, NEFT) may have small charges.Cardless Cash Withdrawal Fee: Certain banks charge a fee for cash withdrawal via mobile banking.Premium Services: Advanced digital services like priority banking apps may have subscription fees.")}>
              🔊 Read Aloud
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ Stop
            </button>
          </div>
        </div>
        <div className="digital-box">
          <h3>Types of Digital Banking Services:</h3>
          <ul>
          <li>•	Internet Banking: Access full banking services through a web browser.</li>
          <li>	Mobile Banking Apps: Perform transactions and manage accounts via a smartphone app.</li>
	       <li>UPI (Unified Payments Interface): Instant fund transfer using mobile numbers or UPI IDs.</li>
         <li>E-Wallets: Digital wallets for online payments, shopping, and P2P transfers.</li>
         <li>Chatbots & AI Banking: Virtual assistants to help with banking queries.</li>
         <li>USSD Banking: Offline mobile banking for basic transactions via USSD codes (*99# for UPI).</li>
         <li>QR Code Payments: Scan and pay using mobile banking or UPI apps.</li>
          </ul>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Types of Digital Banking Services.Internet Banking: Access full banking services through a web browser.Mobile Banking Apps: Perform transactions and manage accounts via a smartphone app.UPI (Unified Payments Interface): Instant fund transfer using mobile numbers or UPI IDs.E-Wallets: Digital wallets for online payments, shopping, and P2P transfers.Chatbots & AI Banking: Virtual assistants to help with banking queries.USSD Banking: Offline mobile banking for basic transactions via USSD codes (*99# for UPI).QR Code Payments: Scan and pay using mobile banking or UPI apps.")}>
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

export default Digital;  
