import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Recurring.css";
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

const RecurringAccount = () => {
    const navigate = useNavigate();
    return (
        <div>
        <Header />
        <div className="recurring-page">
            <div className="recurring-content">
            <div className="recurring-account-header">How to Handle Your Recurring Account</div>
            <div className="recurring-in">
            {/* <h3>Handle Your Recurring Account</h3> */}
                <h3>Creating a Recurring Account</h3>
                <ol>
                    <li>Visit your bank or apply online.</li>
                    <li>Provide necessary documents like ID and proof of address.</li>
                    <li>Choose a deposit tenure and amount.</li>
                    <li>Set up automatic monthly deposits.</li>
                    <li>Receive account details and start saving.</li>
                </ol>
                
                <h3>Managing Your Recurring Account</h3>
                <ol>
                    <li>Ensure timely monthly deposits to avoid penalties.</li>
                    <li>Track your account balance regularly.</li>
                    <li>Review statements for any discrepancies.</li>
                    <li>Adjust deposit amount if necessary (if allowed).</li>
                    <li>Plan for maturity and reinvest if needed.</li>
                </ol>
                
                <h3>Discarding a Recurring Account</h3>
                <ol>
                    <li>Ensure all pending deposits are processed.</li>
                    <li>Withdraw the matured amount after tenure completion.</li>
                    <li>Visit the bank or use online banking for closure.</li>
                    <li>Complete necessary paperwork if required.</li>
                    <li>Confirm closure and obtain documentation.</li>
                </ol>
            </div>
        </div>
        </div>
        <Footer />
       </div>
    );
};

export default RecurringAccount;