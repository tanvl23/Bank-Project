import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";
import TextToSpeech from "../TextToSpeech";
import "../style/Current.css";

const CurrentAccount = () => {
  const navigate = useNavigate();
  const [textToRead, setTextToRead] = useState("");

  const handleReadAloud = (text) => {
    setTextToRead(text);
  };

  const handleStop = () => {
    setTextToRead("");
  };

  return (
    <div>
      <Header />
      <div className="current-account-container">
        <h2>Current Account Management</h2>
        <div className="account-sections">
          
          {/* Opening Account Section */}
          <div className="account-box">
            <div className="account-content">
              <h3>How to Open a Current Account</h3>
              <p><strong>Step 1:</strong> Choose a Bank & Account Type</p>
              <p>Compare banks based on requirements and fees. Some banks offer specialized accounts for businesses and professionals.</p>
              
              <p><strong>Step 2:</strong> Check Eligibility</p>
              <p>Eligible applicants include individuals, firms, companies, trusts, and NGOs.</p>
              
              <p><strong>Step 3:</strong> Gather Required Documents</p>
              <ul>
                <li>✅ Identity & Address Proof</li>
                <li>✅ Business Registration Certificate</li>
                <li>✅ Partnership Deed / MoA & AoA (For Companies)</li>
                <li>✅ PAN Card & GST Registration</li>
              </ul>
              
              <p><strong>Step 4:</strong> Apply Online or Offline</p>
              <p>Complete the application process either online or by visiting a bank branch.</p>
              
              <p><strong>Step 5:</strong> Complete KYC Verification</p>
              <p>Identity verification is required before activation.</p>
              
              <p><strong>Step 6:</strong> Receive Account Details</p>
              <p>Once approved, you will receive an account number, cheque book, debit card, and online banking access.</p>
              
              <p>✅ Your Current Account is now active!</p>
            </div>
            <div className="button-container">
              <button className="read-aloud" onClick={() => handleReadAloud("How to Open a Current Account. Step 1: Choose a Bank & Account Type. Step 2: Check Eligibility. Step 3: Gather Required Documents. Step 4: Apply Online or Offline. Step 5: Complete KYC Verification. Step 6: Receive Account Details. Your Current Account is now active!")}>🔊 Read Aloud</button>
              <button className="stop" onClick={handleStop}>⏹ Stop</button>
            </div>
          </div>
          
          {/* Managing Account Section */}
          <div className="account-box">
            <div className="account-content">
              <h3>How to Manage Your Current Account</h3>
              <p><strong>Step 1:</strong> Deposit & Withdraw Money using cheques, bank transfers, or ATMs.</p>
              <p><strong>Step 2:</strong> Monitor transactions and balance through net banking.</p>
              <p><strong>Step 3:</strong> Maintain the minimum balance to avoid penalties.</p>
              <p><strong>Step 4:</strong> Set up bulk payments and auto transfers.</p>
              <p><strong>Step 5:</strong> Utilize the overdraft facility if available.</p>
              <p><strong>Step 6:</strong> Secure your account with strong passwords and regular monitoring.</p>
              <p>✅ Managing your Current Account ensures smooth business operations!</p>
            </div>
            <div className="button-container">
              <button className="read-aloud" onClick={() => handleReadAloud("How to Manage Your Current Account. Deposit & Withdraw Money. Monitor Transactions. Maintain Minimum Balance. Enable Bulk Payments. Utilize Overdraft. Secure Your Account. Managing your Current Account ensures smooth business operations!")}>🔊 Read Aloud</button>
              <button className="stop" onClick={handleStop}>⏹ Stop</button>
            </div>
          </div>
          
          {/* Closing Account Section */}      
          <div className="account-box">
            <div className="account-content">
              <h3>How to Close a Current Account</h3>
              <p><strong>Step 1:</strong> Settle all pending transactions.</p>
              <p><strong>Step 2:</strong> Withdraw or transfer remaining funds.</p>
              <p><strong>Step 3:</strong> Apply for account closure online or visit the bank.</p>
              <p><strong>Step 4:</strong> Submit required documents.</p>
              <p><strong>Step 5:</strong> Confirm closure and request a final statement.</p>
              <p>✅ Your Current Account is now closed!</p>
            </div>
            <div className="button-container">
              <button className="read-aloud" onClick={() => handleReadAloud("How to Close a Current Account. Step 1: Settle all pending transactions. Step 2: Withdraw or transfer remaining funds. Step 3: Apply for account closure. Step 4: Submit required documents. Step 5: Confirm closure. Your Current Account is now closed!")}>🔊 Read Aloud</button>
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

export default CurrentAccount;
