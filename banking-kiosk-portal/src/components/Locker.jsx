import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Locker.css";
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css"
import "../style/Footer.css"


const LockerServices = () => {
  const navigate = useNavigate();

  return (
    <div>
    <div className="banking-container">
        <Header/>
      
      <div className="loc-info">
      <h2 >Locker Services</h2>
        <h3>Overview</h3>
        <p>Bank lockers provide a secure place to store valuables such as jewelry, important documents, and cash.</p>

        <h3>How to Avail Locker Services</h3>
        <ol>
          <li>Visit your bank branch and inquire about locker availability.</li>
          <li>Submit a locker application form with valid identity proof.</li>
          <li>Pay the required security deposit and annual rental fees.</li>
          <li>Receive your locker key and access it as needed.</li>
        </ol>

        <h3>Security Measures</h3>
        <ul>
          <li>Only the account holder can access the locker.</li>
          <li>Dual-key system ensures enhanced security.</li>
          <li>Access hours are limited to bank working hours.</li>
        </ul>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default LockerServices;
