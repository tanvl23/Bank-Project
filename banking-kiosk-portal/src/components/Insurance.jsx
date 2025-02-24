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
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Users can apply for a home loan through multiple channels. They can visit the nearest Vistara Capital branch, apply via the official website, or use the mobile banking application. Dedicated loan officers are also available for personalized assistance.")}>
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
            <button className="read-aloud-btn" onClick={() => handleReadAloud("The process begins with filling out an online or offline application form, providing details such as personal information, income details, and property-related data. After submission, the bank conducts an initial verification followed by a property evaluation. The bank reviews the applicant's credit history, employment status, and financial standing. If eligible, the applicant will receive a sanction letter. After signing the loan agreement, the loan amount is disbursed directly to the seller or builder.")}>
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
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Users can apply for a home loan through multiple channels. They can visit the nearest Vistara Capital branch, apply via the official website, or use the mobile banking application. Dedicated loan officers are also available for personalized assistance.")}>
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
