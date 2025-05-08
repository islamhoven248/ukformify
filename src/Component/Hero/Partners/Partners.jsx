import React from 'react';
import './partners.css';
import SectionDivider from '../../../assets/Sectiondivider/SectionDivider';

export default function Partners() {
  const logos = [
    '/partners/1.png',
    '/partners/2.png',
    '/partners/3.png',
    '/partners/4.png',
    '/partners/5.png',
    '/partners/6.png',
    '/partners/7.png',
    '/partners/8.png',
    '/partners/9.png',
    '/partners/10.png'
  ];
  return (
    <div className="partners-wrapper pt-5">
      
      <h2 className="text-center mt-5 mb-3">Our Partners</h2>
      <div className="logo-row move-left">
        {[...logos, ...logos].map((logo, i) => (
          <img src={logo} alt={`logo-${i}`} key={`row1-${i}`} />
        ))}
      </div>
      <div className="logo-row move-right">
        {[...logos, ...logos].map((logo, i) => (
          <img src={logo} alt={`logo-${i}`} key={`row2-${i}`} />
        ))}
      </div>
      <div className="logo-row move-left">
        {[...logos, ...logos].map((logo, i) => (
          <img src={logo} alt={`logo-${i}`} key={`row3-${i}`} />
        ))}
      </div>
    </div>
  );
}
