import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";
import TextToSpeech from "../TextToSpeech";
import "../style/Salary.css";

const SalaryAccount = () => {
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
      <div className="salary-account-container">
        <h2>Salary Account Management</h2>
        <div className="sal-acc-sections">
          
          {/* Creating Account Section */}
          <div className="sal-acc-box">
            <div className="sal-acc-content">
              <h3>How to Create a Salary Account</h3>
              <p><strong>Step 1:</strong> Check Eligibility</p>
              <p>You must be employed by a company that offers salary account benefits.<br />Some banks require a minimum salary to open an account.</p>
              
              <p><strong>Step 2:</strong> Collect Required Documents</p>
              <ul>
                <li>✅ Proof of Employment (Offer Letter, Salary Slip, or Employer Certificate)</li>
                <li>✅ Government ID (Aadhaar, Passport, Driver’s License, etc.)</li>
                <li>✅ PAN Card or Tax Identification Number</li>
                <li>✅ Passport-size Photos</li>
                <li>✅ Proof of Address (Utility Bill, Rental Agreement, etc.)</li>
              </ul>
              
              <p><strong>Step 3:</strong> Choose Your Bank</p>
              <p>Your employer may have a tie-up with a specific bank.<br />If not, you can choose a bank that suits your needs (low fees, good services, etc.).</p>
              
              <p><strong>Step 4:</strong> Fill Out the Application Form</p>
              <p>Visit the bank’s website, branch, or employer’s HR department.<br />Fill out the Salary Account Opening Form with your details.</p>
              
              <p><strong>Step 5:</strong> Verify Your Identity</p>
              <p>Submit your documents and undergo KYC (Know Your Customer) verification.<br />Some banks may require an in-person visit or video verification.</p>
              
              <p><strong>Step 6:</strong> Receive Your Account Details</p>
              <p>Once approved, you will receive:</p>
              <ul>
                <li>✅ Account Number & Customer ID</li>
                <li>✅ ATM/Debit Card</li>
                <li>✅ Net Banking & Mobile Banking Access</li>
                <li>✅ Checkbook (if applicable)</li>
              </ul>
              <p>✅ Your salary account is now active! Your employer will start crediting your salary into this account.</p>
            </div>
            <div className="button-container">
              <button className="read-aloud" onClick={() => handleReadAloud("How to Create a Salary Account. Step 1: Check Eligibility. You must be employed by a company that offers salary account benefits. Some banks require a minimum salary to open an account. Step 2: Collect Required Documents. Proof of Employment, Government ID, PAN Card, Passport-size Photos, and Proof of Address. Step 3: Choose Your Bank. Step 4: Fill Out the Application Form. Step 5: Verify Your Identity. Step 6: Receive Your Account Details. Your salary account is now active!")}>🔊 Read Aloud</button>
              <button className="stop" onClick={handleStop}>⏹ Stop</button>
            </div>
          </div>

          {/* Managing Account Section */}
          <div className="sal-acc-box">
            <div className="sal-acc-content">
              <h3>How to Manage Your Salary Account</h3>
              <p><strong>1.</strong> Receive Salary Automatically – Your salary is credited directly to your account every month. You will receive an SMS/Email alert when your salary is deposited.</p>
              <p><strong>2.</strong> Withdraw & Transfer Money – Use your Debit Card/UPI/Net Banking to withdraw cash or transfer money. Some salary accounts offer higher withdrawal limits.</p>
              <p><strong>3.</strong> Monitor Transactions & Statements – Log in to Net Banking/Mobile Banking to check:</p>
              <ul>
                <li>✅ Salary credits</li>
                <li>✅ Deductions (if any)</li>
                <li>✅ Transaction history</li>
              </ul>
              <p><strong>4.</strong> Set Up Auto Payments & Savings – Set up automatic bill payments for electricity, rent, and loans. Open a Fixed Deposit (FD) or Recurring Deposit (RD) to save money.</p>
              <p><strong>5.</strong> Avail Salary Account Benefits – Some salary accounts offer:</p>
              <ul>
                <li>✅ Zero balance requirement (No minimum balance needed)</li>
                <li>✅ Overdraft facility (Borrow money if your balance is low)</li>
                <li>✅ Credit card with pre-approved limits</li>
                <li>✅ Insurance coverage</li>
              </ul>
              <p><strong>6.</strong> Keep Your Account Secure – Enable Two-Factor Authentication (2FA) for online banking. Change your password/PIN regularly. Report lost/stolen debit cards immediately.</p>
              <p>✅ Your salary account is now managed efficiently!</p>
            </div>
            <div className="button-container">
              <button className="read-aloud" onClick={() => handleReadAloud("How to Manage Your Salary Account. Receive Salary Automatically, Withdraw & Transfer Money, Monitor Transactions & Statements, Set Up Auto Payments & Savings, Avail Salary Account Benefits, Keep Your Account Secure. Your salary account is now managed efficiently!")}>🔊 Read Aloud</button>
              <button className="stop" onClick={handleStop}>⏹ Stop</button>
            </div>
          </div>

          {/* Closing Account Section */}      
            <div className="sal-acc-box">
            <div className="sal-acc-content">
              <h3>How to Close a Salary Account</h3>
              <p><strong>Step 1:</strong> Stop Salary Credits</p>
              <p>Inform your employer to deposit your salary in a different account.</p>
              <p><strong>Step 2:</strong> Check Your Account Balance</p>
              <p>Ensure there are no pending transactions or negative balances.<br />Withdraw or transfer any remaining funds.</p>
              <p><strong>Step 3:</strong> Visit the Bank or Apply Online</p>
              <p>Some banks allow online closure requests via net banking.<br />Otherwise, visit the bank branch and submit an Account Closure Form.</p>
              <p><strong>Step 4:</strong> Submit Required Documents</p>
              <p>You may need to provide:</p>
              <ul>
                <li>✅ Identity Proof</li>
                <li>✅ Account Closure Form</li>
                <li>✅ Unused Checkbooks/Debit Cards (if required)</li>
              </ul>
              <p><strong>Step 5:</strong> Confirm Closure & Get a Statement</p>
              <p>The bank will verify your request and close the account.<br />Request a Closure Confirmation Letter or Final Statement for your records.</p>
              <p>✅ Your salary account is now closed! You won’t be able to access it anymore.</p>
            </div>
            <div className="button-container">
              <button className="read-aloud" onClick={() => handleReadAloud("How to Close a Salary Account. Step 1: Stop Salary Credits. Inform your employer to deposit your salary in a different account. Step 2: Check Your Account Balance. Ensure there are no pending transactions or negative balances. Withdraw or transfer any remaining funds. Step 3: Visit the Bank or Apply Online. Some banks allow online closure requests via net banking. Otherwise, visit the bank branch and submit an Account Closure Form. Step 4: Submit Required Documents. Identity Proof, Account Closure Form, Unused Checkbooks/Debit Cards. Step 5: Confirm Closure & Get a Statement. The bank will verify your request and close the account. Request a Closure Confirmation Letter or Final Statement. Your salary account is now closed!")}>🔊 Read Aloud</button>
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
export default SalaryAccount;

