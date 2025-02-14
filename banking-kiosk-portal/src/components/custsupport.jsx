import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/custsupport.css";
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

const CustomerSupport = () => {
    const navigate = useNavigate();
  
    return (
      <div>
        <Header />
        
          {/* Banking Services Grid */}
          <div className="cust-container">
  
          <div className="cust-item" onClick={() => {
              navigate('/locateus')
            }}>
              <Link to="/locateus" className="custinfo-container">
                {/* <img src={taxIcon} alt="Tax Services" /> */}
                <p>Locate Us</p>
              </Link>
            </div>
            
            <div className="cust-item" onClick={() => {
              navigate('/rules')
            }}>
              <Link to="/rules" className="custinfo-container">
                {/* <img src={} alt="Checkbook Services" /> */}
                <p>Rules and Regulations</p>
              </Link>
            </div>
  
            
            <div className="cust-item" onClick={() => navigate("/updates")}>
            <Link to="/updates" className="custinfo-container">
              {/* <img src={billIcon} alt="Bill Utility Services" /> */}
              <p>Latest Bank Updates</p>
              </Link>
            </div>
  
          </div>
  
        
        <Footer />
      </div>
    );
  };
  
  export default CustomerSupport;