import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Bill.css";
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css"
import "../style/Footer.css"

const BillPaymentServices = () => {
  const navigate = useNavigate();

  return (
    <div className="banking-container">
          <Header/>
      <h2 className="service-title">Bill Payment Services</h2>
      <div className="service-info">
        <h3>Overview</h3>
        <p>Bill payment services allow customers to pay utility bills such as electricity, water, gas, and phone bills through online banking.</p>

        <h3>Steps to Pay Bills</h3>
        <ol>
          <li>Log in to your net banking or mobile banking app.</li>
          <li>Go to the "Bill Payment" or "Utilities" section.</li>
          <li>Select the biller or add a new biller.</li>
          <li>Enter the bill details and amount.</li>
          <li>Confirm and complete the payment.</li>
        </ol>

        <h3>Additional Features</h3>
        <ul>
          <li>Schedule automatic bill payments.</li>
          <li>View bill payment history.</li>
          <li>Receive SMS/email alerts for due payments.</li>
        </ul>
      </div>
      <Footer/>
    </div>
);
};

export default BillPaymentServices;

