import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/SavingAcc.css";
//import bankLogo from "../assets/bank-logo.png";
//import searchIcon from "../assets/search-icon.png";
//import homeIcon from "../assets/home-icon.png";
//import chatbotIcon from "../assets/chatbot-icon.png";
// import backIcon from "../assets/back-icon.png";
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css"
import "../style/Footer.css"
import { Link } from "react-router-dom";

const SavingAccount = () => {
    const navigate = useNavigate();
    return (
        <div>
        <Header />
    
        <div className="saving-page">
          <div className="saving-content">
          <div className="salary-account-header">How to Handle Your Savings Account</div>
            <div className="saving-content-in">
                <h3>Creating a Savings Account</h3>
                <ol>
                    <li>Visit your bank or apply online.</li>
                    <li>Provide necessary documents like ID and proof of address.</li>
                    <li>Choose an account type that suits your needs.</li>
                    <li>Make an initial deposit as required.</li>
                    <li>Receive account details and set up online banking.</li>
                </ol>
                
                <h3>Managing Your Savings Account</h3>
                <ol>
                    <li>Deposit funds regularly to grow your savings.</li>
                    <li>Monitor your account balance to track your financial goals.</li>
                    <li>Review your transactions frequently for any unauthorized activity.</li>
                    <li>Set up automatic transfers to maintain consistent savings.</li>
                    <li>Withdraw funds responsibly to ensure financial stability.</li>
                </ol>
                
                <h3>Discarding a Savings Account</h3>
                <ol>
                    <li>Ensure all pending transactions are cleared.</li>
                    <li>Transfer remaining funds to another account.</li>
                    <li>Visit the bank or use online banking to request closure.</li>
                    <li>Complete any necessary paperwork.</li>
                    <li>Confirm account closure and obtain documentation.</li>
                </ol>
            </div>
           </div>
        </div>

        <Footer />
        </div>
    );
};
  
  export default SavingAccount;
  
  