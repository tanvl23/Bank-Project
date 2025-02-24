import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../style/Tax.css';
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";
import TextToSpeech from "../TextToSpeech"; 

const Tax = () => {
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
    <div className="tax-container">
      <Header />
      <h2 className="page-title">Tax Services</h2>
      <div className="tax-info-container">
        <div className="tax-box">
          <h3>Eligibility & Process to Use Tax Services:</h3>
          <ul>
          <li>•	Must have a savings or current account with the bank.</li>
          <li>Register for net banking or mobile banking for online tax payments</li>
	       <li>Select the relevant tax category and provide details such as PAN, TAN, or GSTIN.</li>
         <li>Complete payment using debit card, net banking, or other available modes.</li>
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
        <div className="tax-box">
          <h3>Charges & Fees:</h3>
          <ul>
          <li>Basic Tax Payments: Usually free for account holders.</li>
          <li>ITR Filing Services: Some banks charge fees for assisted tax filing.</li>
          <li>Penalty Charges: Late tax payments may attract penalties and interest as per government rules.</li>
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
        <div className="tax-box">
          <h3>Types of Taxes That Can Be Paid via Banks:</h3>
          <ul>
          <li>Income Tax: Payable by individuals and businesses on earnings.</li>
          <li>Goods & Services Tax (GST): Indirect tax on goods and services.</li>
	       <li>TDS (Tax Deducted at Source): Deducted by employers or financial institutions on salaries and interest income.</li>
         <li>	Property Tax: Paid to local municipal authorities.</li>
         <li>	Professional Tax: Applicable to professionals and salaried employees.</li>
         <li>	Customs & Excise Duty: Taxes on imports, exports, and manufacturing of goods.</li>

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

export default Tax;  
