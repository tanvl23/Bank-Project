import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Rules.css";
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

const RulesAndRegulations = () => {
    const navigate = useNavigate();
    return (
        <div>
        <Header />
      <div className="rules-page">
      
        <div className="rules-content">
        <div className="rules-content-in">
          <h1>Rules and Regulations</h1>
          <p>
            Here you will find all the rules and regulations governing our banking services. Please read them carefully to understand your rights and responsibilities.
          </p>
          <h3>General Guidelines:</h3>
          <ul>
            <li>All customers must abide by the bank's policies.</li>
            <li>Usage of services must comply with legal requirements.</li>
            <li>Any violation may lead to service restrictions or account suspension.</li>
            <li>For further details, refer to our complete terms and conditions document.</li>
          </ul>
        </div>
        </div>
       
      </div>
       <Footer />
       </div>
    );
  };
  
  export default RulesAndRegulations;
  
  