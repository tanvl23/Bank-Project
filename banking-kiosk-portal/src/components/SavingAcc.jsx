import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";
import TextToSpeech from "../TextToSpeech";
import "../style/SavingAcc.css";

const SavingAccount = () => {
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
      <div className="saving-account-container">
        <h2>Saving Account Management</h2>
        <div className="account-sections">
          
          {/* Creating Account Section */}
          <div className="account-box">
            <div className="account-content">
              <h3>How to Create a Savings Account</h3>
              <p><strong>Step 1:</strong> Choose a Bank</p>
              <p>Compare interest rates, fees, and account benefits before selecting a bank.</p>
              
              <p><strong>Step 2:</strong> Gather Required Documents</p>
              <ul>
                <li>✅ Identity Proof (Aadhaar, Passport, Driver’s License, etc.)</li>
                <li>✅ Address Proof (Utility Bill, Rental Agreement, etc.)</li>
                <li>✅ PAN Card</li>
                <li>✅ Passport-size Photos</li>
              </ul>
              
              <p><strong>Step 3:</strong> Fill Out the Application</p>
              <p>Visit the bank branch or apply online by filling out the savings account opening form.</p>
              
              <p><strong>Step 4:</strong> Complete KYC Verification</p>
              <p>Submit your documents for identity verification as per RBI guidelines.</p>
              
              <p><strong>Step 5:</strong> Fund Your Account</p>
              <p>Deposit the required minimum balance to activate your account.</p>
              
              <p>✅ Your savings account is now open and ready for use!</p>
            </div>
            <div className="button-container">
              <button className="read-aloud" onClick={() => handleReadAloud("How to Create a Savings Account. Step 1: Choose a Bank. Step 2: Gather Required Documents. Step 3: Fill Out the Application. Step 4: Complete KYC Verification. Step 5: Fund Your Account. Your savings account is now open and ready for use!")}>🔊 Read Aloud</button>
              <button className="stop" onClick={handleStop}>⏹ Stop</button>
            </div>
          </div>

          {/* Managing Account Section */}
          <div className="account-box">
            <div className="account-content">
              <h3>How to Manage Your Savings Account</h3>
              <p><strong>Step 1:</strong> Regularly Monitor Account Statements and Transactions.</p>
              <p><strong>Step 2:</strong> Set Up Auto Transfers for Savings Goals.</p>
              <p><strong>Step 3:</strong> Utilize Online Banking and Mobile Apps for Easy Access.</p>
              <p><strong>Step 4:</strong> Keep Your Account Secure with Strong Passwords and Alerts.</p>
              <p><strong>Step 5:</strong> Maximize Interest by Maintaining the Required Balance.</p>
              <p>✅ Managing your savings account effectively helps secure your financial future!</p>
            </div>
            <div className="button-container">
              <button className="read-aloud" onClick={() => handleReadAloud("How to Manage Your Savings Account. Regularly Monitor Account Statements, Set Up Auto Transfers, Utilize Online Banking, Keep Your Account Secure, Maximize Interest. Managing your savings account effectively helps secure your financial future!")}>🔊 Read Aloud</button>
              <button className="stop" onClick={handleStop}>⏹ Stop</button>
            </div>
          </div>

          {/* Closing Account Section */}      
          <div className="account-box">
            <div className="account-content">
              <h3>How to Close a Savings Account</h3>
              <p><strong>Step 1:</strong> Withdraw or Transfer Funds</p>
              <p>Ensure your balance is cleared before proceeding with the closure request.</p>
              <p><strong>Step 2:</strong> Visit the Bank or Submit an Online Request</p>
              <p>Some banks allow online account closure, while others require in-person verification.</p>
              <p><strong>Step 3:</strong> Provide Necessary Documents</p>
              <ul>
                <li>✅ Account Closure Form</li>
                <li>✅ Identity Proof</li>
                <li>✅ Unused Checkbooks/Debit Cards (if required)</li>
              </ul>
              <p><strong>Step 4:</strong> Confirm Account Closure</p>
              <p>Request a confirmation letter or final account statement for your records.</p>
              <p>✅ Your savings account is now successfully closed!</p>
            </div>
            <div className="button-container">
              <button className="read-aloud" onClick={() => handleReadAloud("How to Close a Savings Account. Step 1: Withdraw or Transfer Funds. Step 2: Visit the Bank or Submit an Online Request. Step 3: Provide Necessary Documents. Step 4: Confirm Account Closure. Your savings account is now successfully closed!")}>🔊 Read Aloud</button>
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

export default SavingAccount;