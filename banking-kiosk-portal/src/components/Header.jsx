import React from 'react';
import '../style/Header.css';
import bankIcon from '../assets/bank.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (

    <div className="account-info-container">
      {/* Header */}
      <div className="header">
        <div className='dashboard-logo'>
        <img src={bankIcon} alt="Bank Logo" className="bank-logo" />
            <h1 className="shiny-text">GLOBAL BANK</h1>
             <Link to="/faq" className='nav'>
              <p>Chat</p>
            </Link>
        </div>
        </div>
        <div className="title-bar">
            
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

export default Header