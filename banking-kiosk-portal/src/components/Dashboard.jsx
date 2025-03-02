import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ls from "../assets/loans.png";
import bs from "../assets/bsbank.png";
import cust from "../assets/custmsupport.png";
import accinfo from "../assets/accinfo.png";
import "../style/Header.css";
import "../style/Footer.css";
import "../style/Home.css"; // Ensure CSS is linked

const serviceTabs = [
  { path: "/accinfo", img: accinfo, label: "Account Information" },
  { path: "/bank-services", img: bs, label: "Banking Services" },
  { path: "/loans", img: ls, label: "Loans Services" },
  { path: "/custsupport", img: cust, label: "Customer Support" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % serviceTabs.length);
    }, 3000); // Change tabs every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      <Header />
      {/* <InactivityHandler timeout={60000} /> */}
      {/* Main Content */}
      <main className="content">
  <div className="services">
    {serviceTabs.map((tab, index) => (
      <div
        key={index}
        className={`service-item ${index === visibleIndex ? "active" : "hidden"}`}
        onClick={() => navigate(tab.path)}
      >
        <Link to={tab.path} className="icon-container">
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

export default Dashboard;
