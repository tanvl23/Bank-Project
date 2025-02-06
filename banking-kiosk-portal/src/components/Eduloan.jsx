import React from "react";
import "./Homeloan.css"; 

function HomeLoan() {
  return (
    <div className="loan-container">
      <h1 className="loan-title">Home Loan</h1>
      <p className="loan-description">
        Get your dream home with our flexible and affordable home loan plans.
      </p>
      <ul className="loan-features">
        <li>🏠 Low-interest rates</li>
        <li>🏠 Flexible repayment options</li>
        <li>🏠 Loan up to 90% of property value</li>
      </ul>
      <button className="apply-button">Apply Now</button>
    </div>
  );
}

export default HomeLoan;
