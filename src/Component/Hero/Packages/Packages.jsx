import React from 'react'
import { Container, Row } from 'react-bootstrap'
import PackageCards from './PackageCards'

export default function Packages() {
  return (
    <section style={{ backgroundColor: "#1a1a1a", padding: "60px 0" ,marginTop:"50px" }}>
    <Container>
      <h2 className="text-white text-center mb-5">Our Packages</h2>
      <Row className="mt-5">
        <PackageCards />
      </Row>
    </Container>
    
  </section>
  )
}
