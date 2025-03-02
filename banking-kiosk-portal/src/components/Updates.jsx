// Updates.jsx 
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../style/Header.css";
import "../style/Footer.css";
import TextToSpeech from "../TextToSpeech";
import "../style/Updates.css";

const BankUpdates = () => {
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
      <div className="bank-updates-container">
        <h2>Latest Bank Updates & Announcements</h2>
        <div className="update-sections">
          {/* Bank Updates Section */}
          <div className="update-box">
            <div className="update-content">
              <h3>Bank Updates</h3>
              <p><strong>Introduction of Instant Fund Transfers (UPI & IMPS) 🚀</strong></p>
              <p>🔹 Global Bank now offers instant money transfers via Unified Payments Interface (UPI) and Immediate Payment Service (IMPS).</p>
              <p>🔹 Transfer funds 24/7, instantly, even on holidays.</p>
              <p>🔹 No extra charges for transactions up to ₹1 lakh.</p>
              <p>🔹 Accessible via Global Bank Mobile App, Internet Banking, and ATMs.</p>
              <p><strong>📌 Update Effective From: March 10, 2025</strong></p>
              
              <p><strong>Revised Interest Rates on Fixed Deposits 📈</strong></p>
              <p>🔹 Global Bank has revised its Fixed Deposit (FD) interest rates:</p>
              <p>3 Months FD: 4.5%</p>
              <p>6 Months FD: 5.2%</p>
              <p>1-Year FD: 6.5%</p>
              <p>5-Year FD: 7.2% (Best Rate!)</p>
              <p>🔹 Applicable for both new deposits and renewals.</p>
              <p><strong>📌 Update Effective From: April 1, 2025</strong></p>
              
              <p><strong>New Loan Offers – Lower Interest Rates! 🏡🚗</strong></p>
              <p>🔹 Home Loans: Interest rates reduced to 8.25% per annum.</p>
              <p>🔹 Car Loans: Special 7.5% interest rate for electric vehicles.</p>
              <p>🔹 Personal Loans: No processing fee for applications before April 30, 2025.</p>
              <p>🔹 Apply via Global Bank’s website, mobile app, or visit any branch.</p>
              <p><strong>📌 Update Effective From: March 20, 2025</strong></p>
            </div>
            <div className="button-container">
              <button className="read-aloud" onClick={() => handleReadAloud("Latest Bank Updates. Introduction of Instant Fund Transfers (UPI & IMPS). Global Bank now offers instant money transfers via Unified Payments Interface (UPI) and Immediate Payment Service (IMPS). Transfer funds 24/7. Revised Interest Rates on Fixed Deposits. New Loan Offers – Lower Interest Rates!")}>🔊 Read Aloud</button>
              <button className="stop" onClick={handleStop}>⏹ Stop</button>
            </div>
          </div>

          {/* Bank Announcements Section */}
          <div className="update-box">
            <div className="update-content">
              <h3>Bank Announcements</h3>
              <p><strong>Upcoming Scheduled Maintenance 🛠</strong></p>
              <p>🔹 Internet Banking & Mobile App Services will be unavailable for maintenance on:</p>
              <p>📅 March 18, 2025</p>
              <p>⏰ From 2:00 AM to 5:00 AM (IST)</p>
              <p>🔹 ATM and Card Transactions will continue to work without interruptions.</p>
              <p><strong>📌 Announcement Date: March 12, 2025</strong></p>
              
              <p><strong>Launch of New Global Bank Branches 📍</strong></p>
              <p>🔹 Three new branches opening soon:</p>
              <p>Mumbai – Bandra West</p>
              <p>Bangalore – Whitefield</p>
              <p>Chennai – T Nagar</p>
              <p>🔹 These branches will offer personalized banking services, digital banking assistance, and priority customer service desks.</p>
              <p><strong>📌 Opening Date: April 5, 2025</strong></p>
              
              <p><strong>Beware of Fraudulent Calls & Emails ⚠</strong></p>
              <p>🔹 Global Bank has received reports of fraudsters impersonating bank officials.</p>
              <p>🔹 Reminder: We NEVER ask for OTPs, passwords, or PINs over phone, SMS, or email.</p>
              <p>🔹 If you receive suspicious calls, report them at 1800-123-4567 or email fraudreport@globalbank.com.</p>
              <p><strong>📌 Announcement Date: March 10, 2025</strong></p>
            </div>
            <div className="button-container">
              <button className="read-aloud" onClick={() => handleReadAloud("Latest Bank Announcements. Upcoming Scheduled Maintenance. Launch of New Global Bank Branches. Beware of Fraudulent Calls & Emails.")}>🔊 Read Aloud</button>
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

export default BankUpdates;