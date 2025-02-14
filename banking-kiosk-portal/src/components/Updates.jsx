import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Updates.css";
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

const BankUpdates = () => {
    const navigate = useNavigate();
    return (
        <div>
        <Header />
      <div className="bank-updates-page">
      <div className="bank-updates-ttle"> 
      <p>
            Stay updated with the latest news, updates, and announcements from Vistara Capital. We provide timely information on new services, policies, and offers.
          </p>
          </div>
        <div className="updates-content">
        <div className="updates-content-in">
          <h1>Bank Updates & Announcements</h1>
         
          <h3>Latest Announcements:</h3>
          <ul>
            <li>Announcement 1: Details about update.</li>
            <li>Announcement 2: Details about update.</li>
            <li>Announcement 3: Details about update.</li>
          </ul>
        </div>
       </div>
      </div>
       <Footer />
      </div>
    );
  };
  
  export default BankUpdates;
  