import React, { useState } from 'react'; 
import { useNavigate } from "react-router-dom";
import '../style/Eduloan.css';
import Header from './Header';
import Footer from './Footer';
import "../style/Header.css";
import "../style/Footer.css";
import TextToSpeech from "../TextToSpeech"; 

const EducationalLoan = () => {
  const navigate = useNavigate();
  const [textToRead, setTextToRead] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State for pop-up

  const handleReadAloud = (text) => {
    setTextToRead(text);
  };

  const handleStop = () => {
    setTextToRead(""); // Stop the speech
  };

  return (
    <div className="edu-loan-container">
      <Header />
      <h2 className="page-title">Educational Loan</h2>
      <div className="loan-info-container">
        <div className="loan-box">
          <h3>How to Access:</h3>
          <p>
            Students can apply for an educational loan online through Vistara Capital’s education loan portal, visit the nearest branch, or apply via partner institutions.
          </p>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Students can apply for an educational loan online through Vistara Capital’s education loan portal, visit the nearest branch, or apply via partner institutions.")}>
              🔊 Read Aloud
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ Stop
            </button>
          </div>
        </div>
        <div className="loan-box">
          <h3>Procedure:</h3>
          <p>
            Applicants need to fill out the educational loan form and submit admission-related documents. The bank evaluates the applicant’s academic record, the credibility of the institution, and the course details. Co-applicants (parents/guardians) may be required for loan security. Once approved, the loan is disbursed directly to the educational institution in installments as per the fee schedule.
          </p>
          <div className="button-group">
            <button className="read-aloud-btn" onClick={() => handleReadAloud("Applicants need to fill out the educational loan form and submit admission-related documents. The bank evaluates the applicant’s academic record, the credibility of the institution, and the course details. Co-applicants (parents/guardians) may be required for loan security. Once approved, the loan is disbursed directly to the educational institution in installments as per the fee schedule.")}>
              🔊 Read Aloud
            </button>
            <button className="stop-btn" onClick={handleStop}>
              ⏹ Stop
            </button>
          </div>
        </div>
      </div>

      <TextToSpeech text={textToRead} stop={handleStop} />

      {/* Button to open the popup */}
      <button className="documents-btn" onClick={() => setShowPopup(true)}>
        Documents Required
      </button>

      {/* Popup Box */}
      {showPopup && (
        <div className="popup-box show">
          <div className="popup-content">
            <h3>Required Documents</h3>
            <ul id="documents-list">
              <li>Admission letter from the institution</li>
              <li>Identity and address proof of the student and co-applicant</li>
              <li>Academic records (Mark sheets, certificates)</li>
              <li>Income proof of co-applicant (Salary slips, IT returns)</li>
              <li>Bank statements (Last 6 months)</li>
              <li>Passport-size photographs</li>
            </ul>
            <div className="button-group">
              <button
                className="read-aloud-btn"
                onClick={() => {
                  const docText = Array.from(document.querySelectorAll("#documents-list li"))
                    .map(li => li.textContent)
                    .join(". ");
                  handleReadAloud(`Required Documents: ${docText}`);
                }}
              >
                🔊 Read Aloud
              </button>
              <button className="stop-btn" onClick={handleStop}>
                ⏹ Stop
              </button>
            </div>
            <button className="close-btn" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};  

export default EducationalLoan;
