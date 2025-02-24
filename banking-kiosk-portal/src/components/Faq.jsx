import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { getFAQs } from "../services/faq-service";
import "../style/Faq.css";
import Footer from "./Footer";
import Header from "./Header";

const FAQAccordion = () => {
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
                        <h2 className="faq-category">General Banking</h2>
                        <Accordion>
                            {faqs.map((faq, index) => (
                                <Accordion.Item eventKey={index.toString()} key={index}>
                                    <Accordion.Header>{faq.question}</Accordion.Header>
                                    <Accordion.Body>{faq.answer}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                ) : (
                    <p className="no-faq">FREQUENTLY ASKED QUESTIONS</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default FAQAccordion;
