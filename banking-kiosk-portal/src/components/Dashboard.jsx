import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
// import "../assets/loans.png";
import bs from "../assets/bsbank.png";
import cust from "../assets/custmsupport.png";
import accinfo from "../assets/accinfo.png";
import "../style/Header.css"
import "../style/Footer.css"


const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <Header />


      {/* Main Content */}
      <main className="content">
        <div className="services">
          <div className="service-item" onClick={() => {
            navigate('/accinfo')

          }}>
            {/* <img src="/accinfo.png" alt="Account Information" /> */}
            <Link to="/accinfo" className="icon-container">
              <img src={accinfo} alt="Account Information" />
              <p>Account Information</p>
            </Link>
            {/* <p>Account Information</p> */}
          </div>


          <div className="service-item" onClick={() => {
            navigate('/bank-services')
          }}>
            <Link to="/bank-services" className="icon-container">
              <img src={bs} alt="Banking Services" />
              <p>Banking Services</p>
            </Link>
            {/* <img src="/bank-logo.png" alt="Banking Services" />
            <p>Banking Services</p> */}
          </div>


          <div className="service-item" onClick={() => {
            navigate('./loans')
          }}>
            <img src="/loans-icon.png" alt="Loans" />
            {/* <p>Loans</p> */}
          </div>



          <div className="service-item" onClick={() => {
            navigate('/custsupport')
          }}>
            <Link to="/custsupport" className="icon-container">
              <img src={cust} />
              <p>Customer Support</p>
            </Link>
            {/* <img src="/custmsupport.png" alt="Customer Support" />
            <p>Customer Support</p> */}
          </div>
        </div>
      </main>
      <Footer />



    </div>
  );
};


export default Dashboard;
