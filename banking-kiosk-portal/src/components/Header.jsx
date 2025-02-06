import React from 'react';
// import './Header.css';
import bankIcon from '../assets/bank.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (

    <div className="account-info-container">
      {/* Header */}
      <div className="header">
        <div className='dashboard-logo'>
        <img src={bankIcon} alt="Bank Logo" className="bank-logo" />
        <h1>ABC BANK</h1>
        </div>
        <div className="icons">
          <input type="text" placeholder="Search" />
          <select>
            <option value="All">All</option>
            <option value="Services">
              <Link to = "/bank-services"> 
              </Link> </option>
          </select>
        </div>
        </div>
        <div className="title-bar">
          {/* Back Button */}
          <div className="nav-links">
            <Link to="/" className='nav'>
              <p>Home</p>
            </Link>
            <Link to="/accinfo" className='nav'>
              <p>Account Information</p>
            </Link>
            <Link to="/bank-services" className='nav'>
              <p>Bank Service</p>
            </Link>
            <Link to="/loans" className='nav'>
              <p>Loans</p>
            </Link>
            <Link to="/custsupport" className='nav'>
              <p>Customer Support</p>
            </Link>
          </div>
      </div>
    </div>
  );
}

export default Header; 
