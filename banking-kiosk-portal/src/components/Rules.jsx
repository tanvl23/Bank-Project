import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import TextToSpeech from "../TextToSpeech";
import "../style/Header.css";
import "../style/Footer.css";
import "../style/Rules.css";

const Rules = () => {
  const rulesData = [
    {
      title: "1. Account Opening & Maintenance 🏦",
      text: "✔ Eligibility: Individuals must meet the bank's age and identity verification requirements to open an account.\n" +
            "✔ KYC (Know Your Customer): Customers must submit valid ID proof, address proof, and photographs as per RBI guidelines.\n" +
            "✔ Account Updates: Any change in personal details must be reported to the bank immediately.\n" +
            "📌 Non-maintenance of minimum balance may result in penalty charges.",
    },
    {
      title: "2. Digital & Online Banking 📲",
      text: "✔ Secure Login: Customers must use strong passwords, OTP verification, and secure devices./n" +
            "✔ Unauthorized Transactions: Must be reported within 24 hours for resolution./n"  +
            "✔ Phishing & Cybersecurity: The bank never asks for OTPs, passwords, or PINs via calls, SMS, or emails.\n" +
            "📌 Customers must update passwords regularly and enable two-factor authentication.",
    },
    {
      title: "3. Service Charges & Fees 💲",
      text: "✔ Account Maintenance Charges: Certain accounts may have annual maintenance fees.\n" +
            "✔ Transaction Fees: Some transactions include additional charges.\n" +
            "✔ Check Bounce Charges: A penalty is levied for insufficient funds.",
    },
    {
      title: "4. Customer Rights & Responsibilities 👤",
      text: "✔ Right to Information: Customers have the right to receive clear information.\n" +
            "✔ Privacy & Data Protection: Customer data is protected under banking laws.\n" +
            "📌 Customers must keep banking credentials confidential.",
    },
    {
      title: "5. Banking Hours & Holiday Policies 🏦",
      text: "✔ Working Hours: Monday to Friday, 9:30 AM – 4:30 PM; Saturday, 9:30 AM – 1:00 PM.\n" +
            "✔ Public Holidays: The bank remains closed on national and state-specific public holidays.\n" +
            "✔ 24/7 Banking Services: Customers can access ATMs and online banking anytime.",
    }
  ];

  const textToSpeechRefs = useRef(rulesData.map(() => React.createRef()));
  const scrollRef = useRef(null);

  // Scroll functions
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -420, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 420, behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header />
      <div className="rules-container">
        <h1 className="title">Bank Rules & Regulations</h1>

        <div className="scroll-buttons">
          <button onClick={scrollLeft} className="scroll-btn">⬅</button>
          <button onClick={scrollRight} className="scroll-btn">➡</button>
        </div>

        <div className="rules-scroll" ref={scrollRef}>
          {rulesData.map((rule, index) => (
            <div key={index} className="rule-card">
              <h2>{rule.title}</h2>
              <div className="rule-text">
                <p>{rule.text}</p>
              </div>
              <div className="tts-buttons">
                <TextToSpeech ref={textToSpeechRefs.current[index]} text={rule.title + "." + rule.text} />
                <button onClick={() => textToSpeechRefs.current[index].current.speak()}>
                  🔊 Read Aloud
                </button>
                <button onClick={() => textToSpeechRefs.current[index].current.stop()}>
                  ⏹ Stop
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rules;