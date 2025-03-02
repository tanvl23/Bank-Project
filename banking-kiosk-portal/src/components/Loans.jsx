import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../style/Loans.css";
import Header from './Header';
import Footer from './Footer';
import hloan from '../assets/home.png'
import edu from '../assets/edu.png'
import bloan from '../assets/busi.png'
import ploan from '../assets/pers.png'
import gloan from '../assets/gold.png'
import vloan from '../assets/car.png'
// import { Link } from "react-router-dom";
// import React from "react";

const loans = [
  { path: "/homeloan", img: hloan, label: "Home Loan" },
  { path: "/eduloan", img: edu, label: "Education Loan" },
  { path: "/busiloan", img: bloan, label: "Business Loan" },
  { path: "/perloan", img: ploan, label: "Personal Loan" },
  { path: "/goldloan", img: gloan, label: "Gold Loan" },
  { path: "/vehloan", img: vloan, label: "Vehical Loan" },
  // { path: "/", img: insur, label: "Insurance Loan" },
];

const LoanServices = () => {
  
  const navigate = useNavigate();
  const [visibleIndexes, setVisibleIndexes] = useState([0, 1]); // Show first two tabs initially

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndexes(([first, second]) => {
        let nextFirst = (first + 2) % loans.length;
        let nextSecond = (second + 2) % loans.length;
        return [nextFirst, nextSecond];
      });
    }, 5000); // Change tabs every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage-loan">
      <Header />

      {/* Main Content */}
      <main className="content-loan">
        <div className="loan">
          {loans.map((tab, index) => (
            <div
              key={index}
              className={`loan-item ${visibleIndexes.includes(index) ? "active" : "hidden"}`}
              onClick={() => navigate(tab.path)}
            >
              <Link to={tab.path} className="loan-icon-container">
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


export default LoanServices;