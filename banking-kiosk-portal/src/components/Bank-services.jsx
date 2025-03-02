import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Bank-services.css";

// import bankLogo from "../assets/bank.png";
// import searchIcon from "../assets/search.png";
import Header from "./Header";
import Footer from "./Footer";
import "../style/Header.css"
import "../style/Footer.css"
// import homeIcon from "../assets/home.png"; 
// import chatbotIcon from "../assets/chatbot-icon.png"; 

// // Icons for services
import tax from "../assets/tax.png";
import chk from "../assets/checkbook.png";
import bill from "../assets/bill.png";
import atm from "../assets/atm.png";
import locker from "../assets/locker.png";
import digi from "../assets/digital.png";
import insur from "../assets/insurance.png";

const banks = [
  { path: "/tax", img: tax, label: "Tax Services" },
  { path: "/chkbook", img: chk, label: "checkBook Services" },
  { path: "/bill", img: bill, label: "Bill Services" },
  { path: "/atmser", img: atm , label: "ATM Services" },
  { path: "/locker", img: locker, label: "Locker Services" },
  { path: "/digital", img: digi, label: "Digital Services" },
  { path: "/insurance", img: insur, label: "Insurance Services" },
];

const BankingServices = () => {
  const navigate = useNavigate();
  const [visibleIndexes, setVisibleIndexes] = useState([0, 1]); // Show first two tabs initially

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndexes(([first, second]) => {
        let nextFirst = (first + 2) % banks.length;
        let nextSecond = (second + 2) % banks.length;
        return [nextFirst, nextSecond];
      });
    }, 3000); // Change tabs every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage-bank">
      <Header />

      {/* Main Content */}
      <main className="content-bank">
        <div className="bank">
          {banks.map((tab, index) => (
            <div
              key={index}
              className={`bank-item ${visibleIndexes.includes(index) ? "active" : "hidden"}`}
              onClick={() => navigate(tab.path)}
            >
              <Link to={tab.path} className="bank-icon-container">
                <img src={tab.img} alt={tab.label} />
                <p>{tab.label}</p>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BankingServices;
