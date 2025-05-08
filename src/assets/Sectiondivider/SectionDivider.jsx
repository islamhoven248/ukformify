import React, { useEffect } from "react";
import "./SectionDivider.css"
import AOS from "aos";
import "aos/dist/aos.css";

export default function SectionDivider({bottom}) {


  return <div data-aos="fade-left">
 
    <div className="section-divider" style={{ bottom: `${bottom}px` }}></div>
  </div>;
}
