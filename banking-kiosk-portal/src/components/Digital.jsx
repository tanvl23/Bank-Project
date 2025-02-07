import React from "react";
import { useNavigate } from "react-router-dom";
import '../style/Digital.css'
import "../style/Header.css"
import "../style/Footer.css"
import Header from "./Header";
import Footer from "./Footer";


const DigitalBanking = () => {
  const navigate = useNavigate();

  return (
    <div className="banking-container">
        <Header/>
      <h2 className="service-title">Digital Banking</h2>
      <div className="service-info">
        <h3>Overview</h3>
        <p>Digital banking allows users to access banking services online via a mobile app or website.</p>

        <h3>How to Register for Digital Banking</h3>
        <ol>
          <li>Visit the bank’s website or download the mobile banking app.</li>
          <li>Click on "Register" and enter your account details.</li>
          <li>Set up a username and password.</li>
          <li>Verify your identity using OTP or security questions.</li>
          <li>Log in and start using online banking services.</li>
        </ol>

        <h3>Services Offered</h3>
        <ul>
          <li>Fund transfers</li>
          <li>Bill payments</li>
          <li>Account statements</li>
          <li>Mobile recharge</li>
          <li>Investment management</li>
        </ul>
</div>
<Footer/>
    </div>
  );
};

export default DigitalBanking;
