import React from 'react';
import { useNavigate } from "react-router-dom";
import '../style/Goldloan.css';
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";

const GoldLoan = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      {/* <div className="goldloan-container">
       
      </div> */}
      <div className="goldloan-info">
        <div className="goldloan-info-in">
        <h1>Gold Loan</h1>
          <h3>How to Access:</h3>
          <p>
            Gold loans can be accessed by visiting any Vistara Capital branch offering this service. Some branches offer doorstep gold loan services, and initial applications can be submitted online for faster processing.
          </p>

          <h3>Procedure:</h3>
          <p>
            The applicant needs to bring their gold ornaments to the branch. The gold is evaluated for purity and weight, and based on its value, the loan amount is sanctioned. The process is quick, often taking less than an hour. After verification, the gold is securely stored by the bank until the loan is repaid.
          </p>

          <h3>Documents Required:</h3>
          <ul>
            <li>Identity proof (Aadhaar, PAN, Passport)</li>
            <li>Address proof (Utility bill, Driving license)</li>
            <li>Recent passport-size photographs</li>
            <li>No income proof required as the loan is secured by gold</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GoldLoan;
