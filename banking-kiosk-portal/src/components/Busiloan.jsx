import React from 'react';
import { useNavigate } from "react-router-dom";
import '../style/Busiloan.css';
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";

const BusinessLoan = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      {/* <div className="busiloan-container">
       
      </div> */}
      <div className="busiloan-info">
        <div className="busiloan-info-in">
        <h1>Business Loan</h1>
          <h3>How to Access:</h3>
          <p>Businesses can apply for a loan online through Vistara Capital’s business banking portal, via relationship managers, or by visiting the nearest branch.</p>

          <h3>Procedure:</h3>
          <p>Applicants must complete the business loan application form and provide business-related documents. The bank evaluates the business plan, cash flow, credit history, and profitability. After an internal assessment and due diligence, the loan is sanctioned, and the funds are credited to the business account. A relationship manager may assist throughout the process.</p>

          <h3>Documents Required:</h3>
          <ul>
            <li>Business registration certificate</li>
            <li>Identity and address proof of business owners</li>
            <li>Bank statements (Last 12 months)</li>
            <li>Income tax returns (Last 2-3 years)</li>
            <li>Financial statements (Profit & loss statement, balance sheet)</li>
            <li>Business plan with projections</li>
            <li>GST registration (if applicable)</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusinessLoan;