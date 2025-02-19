import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Salary.css";
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

const FixedAccount = () => {
    const navigate = useNavigate();
    
        return (
            <div>
        <Header />
            <div className="fixed-page">

            <div className="fixed-content">
                <div className="fixed-account-header">How to Handle Your Fixed Account</div>
                <div className="fixed-in">
                    <h3>Creating a Fixed Account</h3>
                    <ol>
                        <li>Visit the bank or apply online for a fixed deposit account.</li>
                        <li>Provide the required documents such as ID proof, address proof, and income proof.</li>
                        <li>Choose the deposit amount and tenure based on your financial goals.</li>
                        <li>Make the fixed deposit and wait for the account to be activated.</li>
                        <li>Receive your fixed deposit receipt and account details.</li>
                    </ol>
                    
                    <h3>Managing Your Fixed Account</h3>
                    <ol>
                        <li>Track your deposit maturity date to plan for renewal or withdrawal.</li>
                        <li>Consider reinvesting the maturity amount to maximize returns.</li>
                        <li>Keep your account details safe for easy access.</li>
                        <li>Monitor interest rates and consider transferring to better options if rates change.</li>
                        <li>Ensure timely renewal to avoid losing out on interest.</li>
                    </ol>
                    
                    <h3>Withdrawing from a Fixed Account</h3>
                    <ol>
                        <li>Withdraw the fixed deposit at maturity or before maturity (if permissible, but with penalties).</li>
                        <li>Transfer the amount to another account or convert it into cash.</li>
                        <li>Visit the bank or use online banking to initiate the withdrawal process.</li>
                        <li>Ensure you receive the total principal and interest before completing the transaction.</li>
                        <li>Obtain the receipt or confirmation for withdrawal completion.</li>
                    </ol>
                </div>
            </div>
            </div>
            <Footer />
            </div>
        );
    };
    
    export default FixedAccount;