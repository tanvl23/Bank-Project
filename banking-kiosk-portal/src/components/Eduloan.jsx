import React from 'react';
import { useNavigate } from "react-router-dom";
import '../style/Eduloan.css';
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css"
import "../style/Footer.css"

const EducationalLoan = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header/>
      {/* <div className="eduloan-container">
      
      </div> */}
      <div className="eduloan-info">
        <div className="eduloan-info-in">
        <h1>Educational Loan</h1>
          <h3>How to Access:</h3>
          <p>Students can apply for an educational loan online through Vistara Capital’s education loan portal, visit the nearest branch, or apply via partner institutions.</p>

          <h3>Procedure:</h3>
          <p>Applicants need to fill out the educational loan form and submit admission-related documents. The bank evaluates the applicant’s academic record, the credibility of the institution, and the course details. Co-applicants (parents/guardians) may be required for loan security. Once approved, the loan is disbursed directly to the educational institution in installments as per the fee schedule.</p>

          <h3>Documents Required:</h3>
          <ul>
            <li>Admission letter from the institution</li>
            <li>Identity and address proof of the student and co-applicant</li>
            <li>Academic records (Mark sheets, certificates)</li>
            <li>Income proof of co-applicant (Salary slips, IT returns)</li>
            <li>Bank statements (Last 6 months)</li>
            <li>Passport-size photographs</li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default EducationalLoan;
