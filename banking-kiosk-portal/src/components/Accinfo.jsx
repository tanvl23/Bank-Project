import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
// import "./Accinfo.css"; // Import CSS file
// Import Image Icons (Replace with actual image paths)
import bankIcon from "../assets/bank.png"; // Vistara Capital icon
import savingIcon from "../assets/saving.png";
import salaryIcon from "../assets/salary.png";
import recurringIcon from "../assets/recurring.png";
import fixedIcon from "../assets/fixed.png";
import currentIcon from "../assets/current.png";
// import searchIcon from "../assets/search.png";
// import chatbotIcon from "../assets/chatbot.png";
import Header from "./Header";
import Footer from "./Footer";


const AccountInfo = () => {

  return (
    <div>
      <Header />

      {/* Account Icons */}
      <div className="account-icons">
        <Link to="/savingAcc" className="acc-container">
          <img src={savingIcon} alt="Saving Account" />
          <p>Saving Account</p>
        </Link>
        <Link to="/recurring" className="acc-container">
          <img src={recurringIcon} alt="Recurring Account" />
          <p>Recurring Account</p>
        </Link>
        <Link to="/fixed" className="acc-container">
          <img src={fixedIcon} alt="Fixed Account" />
          <p>Fixed Account</p>
        </Link>
        <Link to="/salary" className="acc-container">
          <img src={salaryIcon} alt="Salary Account" />
          <p>Salary Account</p>
        </Link>
        <Link to="/current" className="acc-container">
          <img src={currentIcon} alt="Current Account" />
          <p>Current Account</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default AccountInfo;