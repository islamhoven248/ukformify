import React from 'react'

import "./Slider/sli.css";
import { Button, Container } from 'react-bootstrap';
export default function Banner() {
  return (

    <section>
      <Container>
       <div className="slider-box ">
       <img src="/Banner1.jpeg" alt=""   />
      <Button
        className="cta-button "
        onClick={() => alert("Booking a free call...")}
      >
        Book a free call
      </Button>
    </div>
    </Container>    
    </section> 
  
  )
}
