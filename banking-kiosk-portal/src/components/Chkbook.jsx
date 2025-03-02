import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../style/Chkbook.css';
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";
import TextToSpeech from "../TextToSpeech"; 

const Checkbook = () => {
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
    <div className="Checkcontainer">
      <Header />
      <h2 className="page-title">Checkbook Services</h2>
      <div className="Check-info-container">
        <div className="Check-box">
          <h3>Eligibility & Process to Avail Checkbook Services:</h3>
          <ul>
          <li>Customers must have a savings or current account or a current business account with the bank.</li>
          <li>	Submit a request through any of the following methods:
          <ul>
          <li>Branch Visit: Fill out a checkbook request form.</li>
          <li>Net/Mobile Banking: Order online via the bank’s app or website.</li>
          <li>ATM: Some banks allow checkbook requests through ATMs.</li>
          <li>SMS or Customer Care: Request via registered mobile number or phone banking.</li>
           </ul></li>
	       <li>The checkbook is delivered to the registered address within a few days.</li>
         
          </ul>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Eligibility & Process to Avail Checkbook Services.Customers must have a savings or current account or a current business account with the bank.Submit a request through any of the following methods.Branch Visit: Fill out a checkbook request form.Net/Mobile Banking: Order online via the bank’s app or website.ATM: Some banks allow checkbook requests through ATMs.SMS or Customer Care: Request via registered mobile number or phone banking.The checkbook is delivered to the registered address within a few days.")}>
              🔊 Read Aloud
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ Stop
            </button>
          </div>
        </div>
        <div className="Check-box">
          <h3>Charges & Fees:</h3>
          <ul>
          <li>Free Checkbooks: Most banks offer a limited number of free checkbooks per year (e.g., first 1-2 checkbooks free).</li>
          <li>Additional Checkbook Charges: After free limits, banks charge a fee per checkbook (e.g., ₹100-₹200 for 20-50 leaves).</li>
          <li>Stop Payment Charges: A small fee is charged for stopping a payment on a lost/stolen check.</li>
          <li>Check Bounce Penalty: If a check is dishonored due to insufficient funds, banks impose a penalty.</li>

            </ul>
         
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Charges & Fees.Free Checkbooks: Most banks offer a limited number of free checkbooks per year (e.g., first 1-2 checkbooks free).Additional Checkbook Charges: After free limits, banks charge a fee per checkbook (e.g., ₹100-₹200 for 20-50 leaves).Stop Payment Charges: A small fee is charged for stopping a payment on a lost/stolen check.Check Bounce Penalty: If a check is dishonored due to insufficient funds, banks impose a penalty.")}>
              🔊 Read Aloud
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ Stop
            </button>
          </div>
        </div>
        <div className="Check-box">
          <h3>Types of Checkbook Services:</h3>
          <ul>
          <li>Personal Checkbooks: Issued to individual account holders for personal transactions.</li>
          <li>Business/Corporate Checkbooks: Offered to companies and firms for business payments.</li>
	       <li>Multi-City Checks: Can be encashed at any branch of the bank, regardless of the issuing city.</li>
         <li>	CTS-2010 Compliant Checks: Modern, high-security checks as per RBI/NPCI guidelines for electronic clearing.</li>
         

          </ul>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Types of Checkbook Services.Personal Checkbooks: Issued to individual account holders for personal transactions.Business/Corporate Checkbooks: Offered to companies and firms for business payments.Multi-City Checks: Can be encashed at any branch of the bank, regardless of the issuing city.CTS-2010 Compliant Checks: Modern, high-security checks as per RBI/NPCI guidelines for electronic clearing.")}>
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

export default Checkbook;  
