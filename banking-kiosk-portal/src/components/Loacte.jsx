import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/LocateUs.css";
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";

const branches = [
  { name: "Global Bank -Branch 1", address: " Andheri-Kurla Road, Andheri East, Mumbai" },
  { name: "Global Bank -Branch 2", address: " Baner Road, Baner, Pune"  },
  { name: "Global Bank -Branch 3", address: " Linking Road, Bandra West, Mumbai" }
];  

const Locateus = () => {
  const navigate = useNavigate();

  const openGoogleMaps = (address) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/place/${encodedAddress}`, "_blank");
  };

  return (
    <div>
      <Header />
      <div className="locate-us-page">
        <h1>Locate Us</h1>
        <p>Find our various branch locations, emergency contacts, and follow us on social media for updates.</p>
      </div>
      <div className="locate-content">
        <div className="locate-content-in">
          <h3>Branch Locations:</h3>
          <ul>
            {branches.map((branch, index) => (
              <li key={index} onClick={() => openGoogleMaps(branch.address)} className="branch-item">
                {branch.name}: {branch.address} (Click to View on Map)
              </li>
            ))}
          </ul>
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

export default Locateus;
