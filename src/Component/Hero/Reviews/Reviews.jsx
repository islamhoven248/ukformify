import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./reviews.css";
import testimonials from "../../../data/Reviews.json";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Reviews() {
  useEffect(() => {
    AOS.init({
      duration: 1000,      
      once: true,          
      offset: 100          
    });
  }, []);
  return (
    <section className="services-section mt-5 pt-5">
      
      <Container className="mt-5 ">
        <h2 className="text-center mb-5 ">What Our Clients Say</h2>
        <Row className="justify-content-center">
          {testimonials.map((t, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <div data-aos="fade-up">
              <Card className="testimonial-card h-100 shadow-sm">
                <Card.Body>
                  <div className="quote-icon top">
                    <img src="/partners/qutup.png" alt="quote up" />
                  </div>

                  <Card.Text className="quote-text text-muted fst-italic">
                    {t.feedback}
                  </Card.Text>

                  <div className="quote-icon bottom">
                  <img src="/partners/sas.png" alt="quote up" />
                  </div>
                </Card.Body>
                <Card.Footer className="border-0 bg-transparent">
                  <h6 className="mb-0 text-primary">{t.name}</h6>
                  <small className="text-secondary">{t.role}</small>
                </Card.Footer>
              </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      
    </section>
  );
}
