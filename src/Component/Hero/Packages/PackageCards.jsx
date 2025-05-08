import React, { useEffect } from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./Packages.css";
import plans from "../../../data/Plans.json";
import { useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

export default function PackageCards() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,      
      once: true,          
      offset: 100          
    });
  }, []);

  return (
    <>
      {plans.map((plan, index) => (
        <Col md={4} className="mb-4" key={index}>
         <div data-aos="zoom-in" data-aos-delay={plan.delay}>
          <Card
            className={`package-card ${plan.featured ? "featured-card" : ""}`}
          >
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title className="text-center fs-4">
                  {plan.title}
                </Card.Title>
                <Card.Text className="text-center ">{plan.desc}</Card.Text>
                <Card.Text className="text-center mb-5 price-text">
                  <span className="price-amount">{plan.priceER}</span>
                  <span className="price-period">/year</span>
                </Card.Text>
              </div>
              <div>
                <div className="d-flex justify-content-center">
                  <Button onClick={() => navigate("/Ourplans")}>
                    More Details
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
          </div>
        </Col>
      ))}
    </>
  );
}
