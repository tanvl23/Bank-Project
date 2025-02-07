import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Chkbook.css";
//import bankLogo from "../assets/bank-logo.png";
//import searchIcon from "../assets/search-icon.png";
//import homeIcon from "../assets/home-icon.png";
//import chatbotIcon from "../assets/chatbot-icon.png";
// import backIcon from "../assets/back-icon.png";
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css"
import "../style/Footer.css"

const CheckbookServices = () => {
  const navigate = useNavigate();

  return (
    <div className="banking-container">
            <Header/> 
     
      
      {/* Title */}
      <h2 className="service-title">Checkbook Services</h2>

    

      {/* Information Section */}
      <div className="service-info">
        <h3>Overview</h3>
        <p>Checkbooks allow customers to make payments through bank-issued checks. Banks offer both personal and business checkbooks.</p>

        <h3>How to Request a Checkbook</h3>
        <ol>
          <li>Log in to your internet banking or mobile banking app.</li>
          <li>Navigate to the "Checkbook Request" section.</li>
          <li>Choose the type of checkbook (number of leaves, personal/business).</li>
          <li>Submit your request.</li>
          <li>Track the delivery status through your banking dashboard.</li>
        </ol>

        <h3>Other Methods</h3>
        <ul>
          <li>Visit the bank branch and fill out a checkbook request form.</li>
          <li>Call customer service to request a checkbook via phone banking.</li>
        </ul>
        <Footer/>
      </div>
 
      </div>
  );
    
  
};

export default CheckbookServices;
