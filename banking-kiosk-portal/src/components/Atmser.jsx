import React from "react";
import { useNavigate } from "react-router-dom";
import '../style/Atm.css'
// import bankLogo from "../assets/bank-logo.png";
// import searchIcon from "../assets/search-icon.png";
// import homeIcon from "../assets/home-icon.png";
// import chatbotIcon from "../assets/chatbot-icon.png";
import "../style/Header.css"
import "../style/Footer.css"
 import Header from "./Header";
  import Footer from "./Footer";



const AtmServices = () => {
  const navigate = useNavigate();

  return (
        
    <div className="banking-container">
        <Header/>
      <h2 className="service-title">ATM Services</h2>

      <div className="service-info">
        <div> 
            <p>ATM (Automated Teller Machine) services allow customers to withdraw cash, check account balances, deposit money, and more without visiting a bank branch.</p>
    
            <h3>How to Use ATM Services</h3>
            <ol>
              <li>Insert your debit or credit card into the ATM.</li>
              <li>Enter your PIN securely.</li>
              <li>Select the desired service (withdrawal, deposit, balance inquiry, etc.).</li>
              <li>Follow on-screen instructions to complete your transaction.</li>
              <li>Take your card and transaction receipt after completion.</li>
            </ol>
    
            <h3>Additional ATM Services</h3>
            <ul>
              <li>Cash withdrawal and deposits</li>
              <li>Mini statement and balance inquiry</li>
              <li>PIN change</li>
              <li>Fund transfers between accounts</li>
              <li>Mobile number registration for SMS alerts</li>
            </ul>
     </div>
      </div>
     <Footer/>
</div>
  );
};

export default AtmServices;
