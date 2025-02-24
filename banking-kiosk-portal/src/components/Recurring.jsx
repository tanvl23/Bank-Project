import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";
import TextToSpeech from "../TextToSpeech";
import "../style/Recurring.css";

const RecurringDeposit = () => {
  const navigate = useNavigate();
  const [textToRead, setTextToRead] = useState("");

  const handleReadAloud = (text) => {
    setTextToRead(text);
  };

  const handleStop = () => {
    setTextToRead(""); // Stop the speech
  };

  return (
    <div>
      <Header />
      <div className="recurring-deposit-container">
        <h2>Recurring Account</h2>
        <div className="account-sections">
          {/* Opening RD Account Section */}
          <div className="account-box">
            <div className="account-content">
              <h3>How to Open a Recurring Deposit (RD) Account</h3>
              <p><strong>Step 1:</strong> Choose a Bank</p>
              <p>Select a bank offering competitive RD interest rates.</p>
              
              <p><strong>Step 2:</strong> Collect Required Documents</p>
              <ul>
                <li>✅ Identity Proof (Aadhaar, Passport, PAN, etc.)</li>
                <li>✅ Address Proof (Utility Bill, Rental Agreement, etc.)</li>
                <li>✅ Passport-size Photographs</li>
              </ul>
              
              <p><strong>Step 3:</strong> Fill Out the RD Application Form</p>
              <p>Apply online or visit the bank branch to complete the RD form.</p>
              
              <p><strong>Step 4:</strong> Choose Deposit Amount & Tenure</p>
              <p>Select a fixed deposit amount and tenure (6 months to 10 years).</p>
              
              <p><strong>Step 5:</strong> Submit the Form & Activate RD</p>
              <p>Submit documents and make the first deposit to activate your RD.</p>
              <p>✅ Your Recurring Deposit account is now active!</p>
            </div>
            <div className="button-container">
              <button className="read-aloud" onClick={() => handleReadAloud("How to Open a Recurring Deposit Account. Step 1: Choose a Bank. Step 2: Collect Required Documents. Step 3: Fill Out the RD Application Form. Step 4: Choose Deposit Amount & Tenure. Step 5: Submit the Form & Activate RD. Your Recurring Deposit account is now active!")}>🔊 Read Aloud</button>
              <button className="stop" onClick={handleStop}>⏹ Stop</button>
            </div>
          </div>

          {/* Managing RD Account Section */}
          <div className="account-box">
            <div className="account-content">
              <h3>How to Manage Your RD Account</h3>
              <p><strong>Step 1:</strong> Deposit Monthly – Ensure timely deposits to earn full interest.</p>
              <p><strong>Step 2:</strong> Track Growth – Use net banking or mobile banking to check maturity value.</p>
              <p><strong>Step 3:</strong> Premature Closure – Some banks allow early withdrawal with penalties.</p>
              <p><strong>Step 4:</strong> Auto-Renewal – Opt for auto-renewal if you want to continue saving.</p>
              <p>✅ Your RD account is now managed efficiently!</p>
            </div>
            <div className="button-container">
              <button className="read-aloud" onClick={() => handleReadAloud("How to Manage Your RD Account. Deposit Monthly, Track Growth, Premature Closure, Auto-Renewal. Your RD account is now managed efficiently!")}>🔊 Read Aloud</button>
              <button className="stop" onClick={handleStop}>⏹ Stop</button>
            </div>
          </div>

          {/* Closing RD Account Section */}      
          <div className="account-box">
            <div className="account-content">
              <h3>How to Close a Recurring Deposit (RD) Account</h3>
              <p><strong>Step 1:</strong> Check Maturity Date</p>
              <p>Ensure your RD has completed its tenure for full benefits.</p>
              <p><strong>Step 2:</strong> Withdraw Funds</p>
              <p>Submit a request to withdraw the matured amount.</p>
              <p><strong>Step 3:</strong> Close the Account</p>
              <p>The bank will process the closure, and funds will be transferred.</p>
              <p>✅ Your RD account is now closed!</p>
            </div>
            <div className="button-container">
              <button className="read-aloud" onClick={() => handleReadAloud("How to Close a Recurring Deposit Account. Step 1: Check Maturity Date. Step 2: Withdraw Funds. Step 3: Close the Account. Your RD account is now closed!")}>🔊 Read Aloud</button>
              <button className="stop" onClick={handleStop}>⏹ Stop</button>
            </div>
          </div>
        </div>
      </div>
      <TextToSpeech text={textToRead} stop={handleStop} />
      <Footer />
    </div>
  );
};

export default RecurringDeposit;
