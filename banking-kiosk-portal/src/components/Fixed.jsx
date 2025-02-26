import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../style/Header.css";
import "../style/Footer.css";
import TextToSpeech from "../TextToSpeech";
import "../style/Fixed.css";

const FixedDeposit = () => {
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
      <div className="fixed-deposit-container">
        <h2>Fixed Deposit (FD) Management</h2>
        <div className="account-sections">
          {/* Opening FD Account Section */}
          <div className="account-box">
            <div className="account-content">
              <h3>How to Open a Fixed Deposit (FD) Account</h3>
              <p><strong>Step 1:</strong> Choose a Bank & FD Type</p>
              <p>Compare interest rates, tenure options, and withdrawal policies.</p>
              <ul>
                <li>✅ Regular FD – Standard interest rates.</li>
                <li>✅ Senior Citizen FD – Higher interest rates.</li>
                <li>✅ Tax-Saving FD – 5-year lock-in with tax benefits.</li>
                <li>✅ Flexi FD – Linked to a savings account with flexible withdrawals.</li>
              </ul>
              
              <p><strong>Step 2:</strong> Check Eligibility</p>
              <p>Most banks allow individuals, minors (with guardians), and senior citizens to open an FD.</p>
              
              <p><strong>Step 3:</strong> Gather Required Documents</p>
              <ul>
                <li>✅ Identity Proof (Aadhaar, PAN Card, Passport, etc.)</li>
                <li>✅ Address Proof (Utility Bill, Rental Agreement, etc.)</li>
                <li>✅ Bank Account Details</li>
              </ul>
              
              <p><strong>Step 4:</strong> Choose FD Amount & Tenure</p>
              <p>Deposit amounts range from ₹10,000 to ₹1,00,000+ with tenures of 7 days to 10 years.</p>
              
              <p><strong>Step 5:</strong> Open the FD Account</p>
              <p>Online: Log in to Net Banking and open an FD.</p>
              <p>Offline: Visit a branch and submit an FD application.</p>
              
              <p><strong>Step 6:</strong> Receive FD Account Details</p>
              <p>After approval, you will receive an FD Receipt and deposit details.</p>
              <p>✅ Your Fixed Deposit is now active!</p>
            </div>
            <div className="button-container">
              <button className="read-aloud" onClick={() => handleReadAloud("How to Open a Fixed Deposit Account. Step 1: Choose a Bank & FD Type. Step 2: Check Eligibility. Step 3: Gather Required Documents. Step 4: Choose FD Amount & Tenure. Step 5: Open the FD Account. Step 6: Receive FD Account Details. Your Fixed Deposit is now active!")}>🔊 Read Aloud</button>
              <button className="stop" onClick={handleStop}>⏹ Stop</button>
            </div>
          </div>

          {/* Managing FD Account Section */}
          <div className="account-box">
            <div className="account-content">
              <h3>How to Manage Your Fixed Deposit (FD) Account</h3>
              <p><strong>Step 1:</strong> Track FD Interest & Maturity Date via Net Banking.</p>
              <p><strong>Step 2:</strong> Choose Interest Payout Option:</p>
              <ul>
                <li>✅ Cumulative FD – Interest paid at maturity.</li>
                <li>✅ Non-Cumulative FD – Interest paid monthly/quarterly.</li>
              </ul>
              <p><strong>Step 3:</strong> Renew or Withdraw at Maturity.</p>
              <p><strong>Step 4:</strong> Avail Loan Against FD (if needed).</p>
              <p><strong>Step 5:</strong> Premature Withdrawal available with penalties.</p>
              <p>✅ Your FD is now managed efficiently!</p>
            </div>
            <div className="button-container">
              <button className="read-aloud" onClick={() => handleReadAloud("How to Manage Your Fixed Deposit Account. Track FD Interest, Choose Payout Options, Renew or Withdraw, Avail Loan Against FD, Premature Withdrawal. Your FD is now managed efficiently!")}>🔊 Read Aloud</button>
              <button className="stop" onClick={handleStop}>⏹ Stop</button>
            </div>
          </div>

          {/* Closing FD Account Section */}      
          <div className="account-box">
            <div className="account-content">
              <h3>How to Close a Fixed Deposit (FD) Account</h3>
              <p><strong>Step 1:</strong> Check Maturity Date</p>
              <p>Log in to Net Banking or check your FD Certificate.</p>
              <p><strong>Step 2:</strong> Choose Closure Method</p>
              <p>Auto-Closure: Amount credited automatically.</p>
              <p>Manual Closure: Request closure online or at a branch.</p>
              <p><strong>Step 3:</strong> Withdraw or Reinvest</p>
              <p>Withdraw the maturity amount or reinvest in a new FD.</p>
              <p><strong>Step 4:</strong> Confirm Closure & Get Final Statement</p>
              <p>Request a closure receipt for records.</p>
              <p>✅ Your Fixed Deposit is now closed!</p>
            </div>
            <div className="button-container">
              <button className="read-aloud" onClick={() => handleReadAloud("How to Close a Fixed Deposit Account. Step 1: Check Maturity Date. Step 2: Choose Closure Method. Step 3: Withdraw or Reinvest. Step 4: Confirm Closure & Get Final Statement. Your Fixed Deposit is now closed!")}>🔊 Read Aloud</button>
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

export default FixedDeposit;