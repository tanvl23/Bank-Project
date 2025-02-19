import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../style/Accinfo.css";
import "../style/Header.css"
import "../style/Footer.css"
// Import Account Icons
import saving from "../assets/saving.png";
import sal from "../assets/salary.png";
import recur from "../assets/recurring.png";
import fixed from "../assets/fixed.png";
import cur from "../assets/current.png";

const accounts = [
  { path: "/savingAcc", img: saving, label: "Saving Account" },
  { path: "/recurring", img: recur, label: "Recurring Account" },
  { path: "/fixed", img: fixed, label: "Fixed Account" },
  { path: "/salary", img: sal, label: "Salary Account" },
  { path: "/current", img: cur, label: "Current Account" },
];

const AccountInfo = () => {
  const navigate = useNavigate();
  const [visibleIndexes, setVisibleIndexes] = useState([0, 1]); // Show first two tabs initially

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndexes(([first, second]) => {
        let nextFirst = (first + 2) % accounts.length;
        let nextSecond = (second + 2) % accounts.length;
        return [nextFirst, nextSecond];
      });
    }, 3000); // Change tabs every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage-acc">
      <Header />

      {/* Main Content */}
      <main className="content-acc">
        <div className="acc">
          {accounts.map((tab, index) => (
            <div
              key={index}
              className={`acc-item ${visibleIndexes.includes(index) ? "active" : "hidden"}`}
              onClick={() => navigate(tab.path)}
            >
              <Link to={tab.path} className="acc-icon-container">
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

export default AccountInfo;
