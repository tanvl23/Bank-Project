import React from 'react';
import { useNavigate } from "react-router-dom";
import '../style/Perloan.css';
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";

const PersonalLoan = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      {/* <div className="perloan-container">
       
      </div> */}
      <div className="perloan-info">
        <div className="perloan-info-in">
        <h1>Personal Loan</h1>
          <h3>How to Access:</h3>
          <p>
            Personal loans can be accessed through the Vistara Capital website, mobile app, or by visiting a branch. Users can also contact customer service or loan officers for assistance.
          </p>

          <h3>Procedure:</h3>
          <p>
            Applicants need to fill out the loan application form with basic personal and employment details. After submission, the bank verifies the credit score, employment status, and income to assess repayment capacity. If the applicant meets the criteria, the loan is approved, and the funds are disbursed directly to the applicant’s account, often within 24-48 hours.
          </p>

          <h3>Documents Required:</h3>
          <ul>
            <li>Identity proof (PAN Card, Aadhaar, Passport)</li>
            <li>Address proof (Electricity bill, Rental agreement)</li>
            <li>Proof of income (Latest salary slips, bank statements)</li>
            <li>Employment proof (Company ID card, employment certificate)</li>
            <li>Passport-size photographs</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PersonalLoan;


