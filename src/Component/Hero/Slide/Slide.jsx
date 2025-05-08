import React, { useEffect } from "react";

import Blocks from "./Slider/Blocks";

import "./slide.css";

import AOS from "aos";
import "aos/dist/aos.css";
import SectionDivider from "../../../assets/Sectiondivider/SectionDivider";
import { Container } from "react-bootstrap";





export default function Slide() {
  useEffect(() => {
    AOS.init({
      duration: 1000,      
      once: true,          
      offset: 100          
    });
  }, []);
  return (
    
     

      

<section className="services-section ">
        <Container className="mt-5">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
           
            <div data-aos="fade-up">
            <Blocks  icon="tachometer-alt" text="Speed ​​of establishment" />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
            <Blocks  icon="headset" text="Legal support" />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
            <Blocks  icon="map-marked-alt" text="Virtual address" />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
            <Blocks  icon="money-check-alt" text="Open a bank account" />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
            <Blocks  icon="tasks" text="CRM" />
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
            <Blocks  icon="calculator" text="Accounting tools" />
            </div>
          </div>
        </Container>
      </section>
     
  
  );
}
