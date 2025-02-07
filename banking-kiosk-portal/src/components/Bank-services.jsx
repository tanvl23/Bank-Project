import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./Bank-services.css";

import bankLogo from "../assets/bank.png";
import searchIcon from "../assets/search.png";
import Header from "./Header";
import Footer from "./Footer";
// import homeIcon from "../assets/home.png"; 
// import chatbotIcon from "../assets/chatbot-icon.png"; 

// // Icons for services
// import taxIcon from "../assets/tax-icon.png";
// import checkbookIcon from "../assets/checkbook-icon.png";
// import billIcon from "../assets/bill-icon.png";
// import atmIcon from "../assets/atm-icon.png";
// import lockerIcon from "../assets/locker-icon.png";
// import digitalIcon from "../assets/digital-icon.png";
// import insuranceIcon from "../assets/insurance-icon.png";

const BankingServices = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      
        {/* Banking Services Grid */}
        <div className="services-container">

        <div className="services-item" onClick={() => {
            navigate('/tax')
          }}>
            <Link to="/tax" className="bank-container">
              {/* <img src={taxIcon} alt="Tax Services" /> */}
              <p>Tax Services</p>
            </Link>
          </div>
          
          <div className="services-item" onClick={() => {
            navigate('/chkbook')
          }}>
            <Link to="/chkbook" className="bank-container">
              {/* <img src={} alt="Checkbook Services" /> */}
              <p>Checkbook Services</p>
            </Link>
          </div>

          
          <div className="services-item" onClick={() => navigate("/bill")}>
          <Link to="/bill" className="bank-container">
            {/* <img src={billIcon} alt="Bill Utility Services" /> */}
            <p>Bill Utility Services</p>
            </Link>
          </div>


          <div className="services-item" onClick={() => navigate("/atmser")}>
          <Link to="/atmser" className="bank-container">
            {/* <img src={atmIcon} alt="ATM Services" /> */}
            <p> ATM Services</p>
            </Link>
          </div>


          <div className="services-item" onClick={() => navigate("/locker")}>
          <Link to="/locker" className="bank-container">
            {/* <img src={lockerIcon} alt="Locker Services" /> */}
            <p> Locker Services</p>
            </Link>
          </div>


          <div className="services-item" onClick={() => navigate("/digital")}>
          <Link to="/digital" className="bank-container">
            {/* <img src={digitalIcon} alt="Digital Services" /> */}
            <p>Digital Services</p>
            </Link>
          </div>


          <div className="services-item" onClick={() => navigate("/insurance")}>
          <Link to="/insurance" className="bank-container">
            {/* <img src={insuranceIcon} alt="Insurance Services" /> */}
            <p>Insurance Services</p>
            </Link>
          </div>
        </div>

      
      <Footer />
    </div>
  );
};

export default BankingServices;
