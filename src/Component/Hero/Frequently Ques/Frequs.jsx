import React, { useState } from 'react';
import './faq.css';
import { Col, Container, Row } from 'react-bootstrap';
import SectionDivider from '../../../assets/Sectiondivider/SectionDivider';

const faqData = [
  {
    question: "Question1",
    answer: "Answer1"
  },
  {
    question: "Question2",
    answer: "Answer2"
  },
  {
    question: "Question3",
    answer: "Answer3"
  },
  {
    question: "Question4",
    answer: "Answer4"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section mt-5">
      
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <Container>
        <Row className="d-flex">
          <Col style={{ flex: 2}}>
          <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <button className="faq-question" onClick={() => toggle(index)}>
              {item.question}
              <span className={`arrow ${openIndex === index ? 'open' : ''}`}>▼</span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
          
          </Col>
          <Col style={{ flex: 1}}>
          <div className='FAQ'>
            <img src="/partners/FAQ.png" alt="" />
          </div>
          
          </Col>
        </Row>
      </Container>
      
      
    </div>
  );
}
