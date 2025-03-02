import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../style/Insurance.css';
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";
import TextToSpeech from "../TextToSpeech"; 

const Insurance  = () => {
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
    <div className="insur-container">
      <Header />
      <h2 className="page-title">Insurance Services</h2>
      <div className="insur-info-container">
        <div className="insur-box">
          <h3>Eligibility & Process to Avail Insurance Services:</h3>
          <ul>
          <li>Customers must have a savings or current account with the bank (optional in some cases).</li>
          <li>Choose an insurance policy based on requirements (life, health, motor, etc.).</li>
	       <li>Submit KYC documents (ID proof, address proof, and income proof for some policies).</li>
         <li>Pay the premium online or through auto-debit from the bank account.</li>
         <li>Policy documents are issued digitally or in physical form.</li>
          </ul>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Eligibility & Process to Avail Insurance Services.Customers must have a savings or current account with the bank (optional in some cases).Choose an insurance policy based on requirements (life, health, motor, etc.).Submit KYC documents (ID proof, address proof, and income proof for some policies).Pay the premium online or through auto-debit from the bank account.Policy documents are issued digitally or in physical form.")}>
              🔊 Read Aloud
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ Stop
            </button>
          </div>
        </div>
        <div className="insur-box">
          <h3>Charges & Fees:</h3>
          <ul>
          <li>Premium Amount: Varies based on the type of insurance and coverage.</li>
          <li>Processing Fees: Some banks charge a small fee for policy processing.</li>
          <li>Late Payment Penalty: If premiums are not paid on time, penalties may be applicable.</li>
          <li>•	Claim Settlement Charges: Some claims may involve processing charges.</li>
            </ul>
         
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Charges & Fees.Premium Amount: Varies based on the type of insurance and coverage.Processing Fees: Some banks charge a small fee for policy processing.Late Payment Penalty: If premiums are not paid on time, penalties may be applicable.Claim Settlement Charges: Some claims may involve processing charges.")}>
              🔊 Read Aloud
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ Stop
            </button>
          </div>
        </div>
        <div className="insur-box">
          <h3>Types of Insurance Offered by Bank:</h3>
          <ul>
          <li>Life Insurance: Financial protection for the policyholder’s family in case of death.</li>
          <li>	Health Insurance: Covers medical expenses, hospitalization costs, and critical illnesses.</li>
	       <li>Motor Insurance: Covers damages to vehicles and third-party liabilities.</li>
         <li>Travel Insurance: Covers medical emergencies, trip cancellations, and lost baggage while traveling</li>
         <li>Home Insurance: Protects homes against natural disasters, theft, and fire damage.</li>
         <li>Personal Accident Insurance: Offers financial support in case of accidental death or disability.</li>
         <li>Loan Insurance: Covers outstanding loan amounts in case of the borrower’s death or disability.</li>
         
          </ul>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Types of Insurance Offered by Bank.Life Insurance: Financial protection for the policyholder’s family in case of death.Health Insurance: Covers medical expenses, hospitalization costs, and critical illnesses.Motor Insurance: Covers damages to vehicles and third-party liabilities.Travel Insurance: Covers medical emergencies, trip cancellations, and lost baggage while traveling.Home Insurance: Protects homes against natural disasters, theft, and fire damage.Personal Accident Insurance: Offers financial support in case of accidental death or disability.Loan Insurance: Covers outstanding loan amounts in case of the borrower’s death or disability.")}>
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

export default Insurance ;  
