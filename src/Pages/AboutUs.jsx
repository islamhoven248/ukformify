// pages/AboutUs.jsx
import React from 'react';
import './about.css';

export default function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Our Company</h1>
        <p>We help entrepreneurs from around the world establish their businesses in the UK with ease, confidence, and professionalism.</p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>To simplify the process of company formation and provide full legal, financial, and technical support to our clients.</p>
      </div>

      <div className="about-section">
        <h2>Our Vision</h2>
        <p>To be the leading company in business formation services in the UK and a trusted partner for entrepreneurs globally.</p>
      </div>

      <div className="about-section values">
        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Integrity:</strong> We operate with transparency and honesty.</li>
          <li><strong>Efficiency:</strong> We deliver fast and accurate services.</li>
          <li><strong>Support:</strong> We care about our clients’ growth and success.</li>
          <li><strong>Innovation:</strong> We embrace technology to improve our solutions.</li>
        </ul>
      </div>

      <div className="about-image">
        <img src="/public/logo.png" alt="About our company" />
      </div>
    </div>
  );
}
