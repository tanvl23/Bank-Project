import React from 'react';
import { useNavigate } from "react-router-dom";
import '../style/Vehloan.css';
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";

const VehicleLoan = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      {/* <div className="vehloan-container">
        
      </div>
       */}
      <div className="vehloan-info">
        <div className="vehloan-info-in">
        <h1>Vehicle Loan</h1>
          <h3>How to Access:</h3>
          <p>
            Users can apply for a vehicle loan through Vistara Capital’s official website, 
            mobile banking app, or by visiting the nearest branch. Authorized vehicle dealers 
            also assist in facilitating loan applications in partnership with the bank.
          </p>

          <h3>Procedure:</h3>
          <p>
            Applicants must fill out the vehicle loan application form with personal and vehicle details. 
            The bank evaluates the applicant’s credit score, income stability, and repayment capacity. 
            Once verified, the loan is sanctioned, and the funds are disbursed directly to the vehicle dealer. 
            The applicant signs a loan agreement specifying the repayment terms.
          </p>

          <h3>Documents Required:</h3>
          <ul>
            <li>Identity proof (Aadhaar, Passport, Voter ID)</li>
            <li>Address proof (Utility bill, Rental agreement)</li>
            <li>Income proof (Salary slips, IT returns)</li>
            <li>Vehicle-related documents (Proforma invoice, RC copy)</li>
            <li>Bank statements (Last 6 months)</li>
            <li>Passport-size photographs</li>
          </ul>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default VehicleLoan;
