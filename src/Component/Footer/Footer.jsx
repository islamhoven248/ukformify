import React from 'react';

import './footer.css';
import { Col, Container, Row } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h4 style={{color:"white"}}>UK FORMIFY</h4>
            <p>Discover top-quality products at amazing prices. Shop smart, live stylish.</p>
            <div className="social-icons d-flex gap-3 mt-3">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-whatsapp"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </Col>

          <Col md={2} className="mb-4">
            
            <ul className="list-unstyled">
            <li><a href="#">Contact</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Returns</a></li>
              
            </ul>
          </Col>

          <Col md={2} className="mb-4">
            
            <ul className="list-unstyled">
            <li><a href="#">Contact</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Returns</a></li>
              
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5>Stay Updated</h5>
            <p>Get our latest updates and promotions straight to your inbox.</p>
            <input type="email" className="form-control mb-2" placeholder="Email address" />
            <button className="btn btn-danger w-100">Subscribe</button>
          </Col>
        </Row>
        <hr />
        <p className="text-center text-light mt-3">&copy; 2025 UK FORMIFY. All rights reserved.</p>
      </Container>
    </footer>
  );
}
