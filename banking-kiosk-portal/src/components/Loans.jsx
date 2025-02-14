import { Link, useNavigate } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import hloan from '../assets/home.png'
import edu from '../assets/edu.png'
import bloan from '../assets/busi.png'
import ploan from '../assets/pers.png'
import gloan from '../assets/gold.png'
import vloan from '../assets/car.png'
// import { Link } from "react-router-dom";
import React from "react";


const LoanServices = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />

      <div className="container">

        <main className="main-content">
          <h2>Loans</h2>
          <div className="loan-options">
            <div className="loan-card" onClick={() => {
              navigate('/homeloan')

            }}>
              {/* <img src="/accinfo.png" alt="Account Information" /> */}
              <Link to="/homeloan" className="icon-container">
                <img src={hloan} alt="Home Loan" />
                <p>Home Loan</p>
              </Link>
              {/* <p>Account Information</p> */}
            </div>


            <div className="loan-card" onClick={() => {
              navigate('/eduloan')
            }}>
              <Link to="/eduloan" className="icon-container">
                <img src={edu} alt="Car Loans" />
                <p>Educationl Loan </p>
              </Link>
              {/* <img src="/bank-logo.png" alt="Banking Services" />
            <p>Banking Services</p> */}
            </div>


            <div className="loan-card" onClick={() => {
              navigate('/busiloan')

            }}>
              {/* <img src="/accinfo.png" alt="Account Information" /> */}
              <Link to="/busiloan" className="icon-container">
                <img src={bloan} alt="Home Loan" />
                <p>Business Loan</p>
              </Link>
              {/* <p>Account Information</p> */}
            </div>

            <div className="loan-card" onClick={() => {
              navigate('/perloan')
            }}>
              <Link to="/perloan" className="icon-container">
                <img src={ploan} />
                <p>Personal Loan</p>
              </Link>
              {/* <img src="/custmsupport.png" alt="Customer Support" />
            <p>Customer Support</p> */}
            </div>

            <div className="loan-card" onClick={() => {
              navigate('/goldloan')
            }}>
              <Link to="/goldloan" className="icon-container">
                <img src={gloan} />
                <p>Gold Loan</p>
              </Link>
            </div>

            <div className="loan-card" onClick={() => {
              navigate('/vehloan')
            }}>
              <Link to="/vehloan" className="icon-container">
                <img src={vloan} alt="Vehicle Loan" />
                <p>Vehicle Loan</p>
              </Link>
            </div>

          </div>
        </main>
      </div>

      <Footer />

    </div>
  );
};

export default LoanServices;