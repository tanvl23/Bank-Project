import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { getFAQs } from "../services/faq-service";
import { BeatLoader, ClipLoader } from "react-spinners";
import "../style/Faq.css";
// import "./Faq";
import Footer from "./Footer";
import Header from "./Header";

const General = () => {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const data = await getFAQs();
                setFaqs(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchFAQs();
    }, []);

    return (
        <div>
            <Header />
            <div className="faq-container">
                {faqs.length > 0 ? (
                    <div className="faq-section">
                        {/* Category Header Displayed Only Once */}
                        {/* <h2 className="faq-category">General Banking</h2> */}
                        <Accordion>
                            {faqs.map((faq, index) => (
                                <Accordion.Item eventKey={index.toString()} key={index}>
                                    <Accordion.Header>{faq.question}</Accordion.Header>
                                    <Accordion.Body>{faq.answer}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                ) : ((
                    // Show spinner while loading
                    <div className="spinner-container">
                        <BeatLoader color="#36D7B7" size={50} />
                    </div>
                ) 
                    // <p className="no-faq">FREQUENTLY ASKED QUESTIONS</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default General;