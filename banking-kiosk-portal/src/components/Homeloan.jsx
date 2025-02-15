import React from 'react';
import { useNavigate } from "react-router-dom";
import '../style/Homeloan.css';
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css"
import "../style/Footer.css"

const HomeLoan = () => {
  const navigate = useNavigate();

  return (
    <div>
        <Header/>
    {/* <div className="hmloan-container">
        
              <h1>Home Loan</h1>
              </div> */}
              <div className="hmloan-info">
              <div className="hmloan-info-in">
              <h2>Home Loan</h2>
      <h3>How to Access:</h3>
      <p>Users can apply for a home loan through multiple channels. 
        They can visit the nearest Vistara Capital branch, apply via the official website, or use the mobile banking application. 
        Dedicated loan officers are also available for personalized assistance.</p>
       

      <h3>Procedure:</h3>
      <p>The process begins with filling out an online or offline application form, providing details such as personal information, income details, and property-related data. After submission, the bank conducts an initial verification followed by a property evaluation. The bank reviews the applicant's credit history, employment status, and financial standing. If eligible, the applicant will receive a sanction letter. After signing the loan agreement, the loan amount is disbursed directly to the seller or builder.</p>

      <h3>Documents Required:</h3>
      <ul>
        <li>Identity proof (Aadhaar, Passport, Voter ID)</li>
        <li>Address proof (Utility bill, Rent agreement)</li>
        <li>Income proof (Salary slips for salaried individuals, IT returns for self-employed)</li>
        <li>Property documents (Sale deed, property title, agreement to sell)</li>
        <li>Bank statements (Last 6 months)</li>
        <li>Passport-size photographs</li>
      </ul>
      </div>
      </div>
      <Footer/>
    </div>
  
  );
};

export default HomeLoan;


