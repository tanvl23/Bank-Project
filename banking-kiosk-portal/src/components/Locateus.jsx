import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/LocateUs.css";
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
const LocateUs = () => {
    const navigate = useNavigate();
  return (
    <div>
        <Header />
    {/* <div className="locate-us-page">
      
        
        </div> */}
        <div className="locate-content">
        <div className="locate-content-in">
        <h1>Locate Us</h1>
        <p>Find our various branch locations, emergency contacts, and follow us on social media for updates.</p>
        <h3>Branch Locations:</h3>
        <p>
        <ul>
          <li>Branch A: 123 Main St, City, Phone: (123) 456-7890</li>
          <li>Branch B: 456 Side St, City, Phone: (234) 567-8901</li>
          <li>Branch C: 789 High St, City, Phone: (345) 678-9012</li>
        </ul></p>
        <h3>Emergency Contacts:</h3>
        <p>For urgent inquiries, call our 24/7 hotline: +1 234 567 890</p>
        <h3>Follow Us:</h3>
        <p>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a> |{' '}
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a> |{' '}
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </p>
     </div>
    </div>
    <Footer />
    </div>
  );
};

export default LocateUs;
