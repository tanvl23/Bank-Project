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

const SalaryAccount = () => {
    const navigate = useNavigate();
    return (
        <div>
        <Header />
        <div className="salary-page">
        <div className="salary-content">
            <div className="salary-account-header">How to Handle Your Salary Account</div>
            <div className="salary-info">
                <h3>Creating a Salary Account</h3>
                <ol>
                    <li>Check with your employer for preferred bank options.</li>
                    <li>Provide necessary documents like ID and employment proof.</li>
                    <li>Fill out the application form at the bank or online.</li>
                    <li>Receive account details and link it to your payroll.</li>
                    <li>Activate online banking for easy access.</li>
                </ol>
                
                <h3>Managing Your Salary Account</h3>
                <ol>
                    <li>Ensure salary deposits are received on time.</li>
                    <li>Monitor your account balance and transactions.</li>
                    <li>Utilize benefits like zero-balance maintenance.</li>
                    <li>Set up automatic bill payments and savings transfers.</li>
                    <li>Update personal details with the bank when needed.</li>
                </ol>
                
                <h3>Discarding a Salary Account</h3>
                <ol>
                    <li>Transfer any remaining balance to another account.</li>
                    <li>Check for pending debits or credits before closure.</li>
                    <li>Visit the bank or use online banking for closure.</li>
                    <li>Complete necessary paperwork if required.</li>
                    <li>Confirm closure and obtain final statements.</li>
                </ol>
            </div>
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default SalaryAccount;