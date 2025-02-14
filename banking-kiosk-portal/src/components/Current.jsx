import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Current.css";
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

const CurrentAccount = () => {
    const navigate = useNavigate();
    return (
        <div>
        <Header />
        <div className="current-page">

        <div className="current-content">
            <div className="current-account-header">How to Handle Your Current Account</div>
            <div className="current-in">
                <h3>Creating a Current Account</h3>
                <ol>
                    <li>Visit the bank or apply online.</li>
                    <li>Provide necessary documents like ID, business registration (if applicable), and address proof.</li>
                    <li>Choose an account type that suits your business needs.</li>
                    <li>Make the initial deposit as per the bank’s requirements.</li>
                    <li>Receive account details and activate online banking.</li>
                </ol>
                
                <h3>Managing Your Current Account</h3>
                <ol>
                    <li>Monitor transactions regularly for better cash flow management.</li>
                    <li>Maintain the required minimum balance to avoid penalties.</li>
                    <li>Utilize overdraft facilities if needed.</li>
                    <li>Ensure timely payments and deposits.</li>
                    <li>Set up automated payments for recurring expenses.</li>
                </ol>
                
                <h3>Discarding a Current Account</h3>
                <ol>
                    <li>Settle all outstanding dues and overdraft balances.</li>
                    <li>Transfer remaining funds to another account.</li>
                    <li>Visit the bank or use online banking to initiate closure.</li>
                    <li>Complete any required paperwork.</li>
                    <li>Confirm closure and obtain necessary documentation.</li>
                </ol>
            </div>
        </div>
        </div>
        <Footer />
        </div>
    );
};

export default CurrentAccount;