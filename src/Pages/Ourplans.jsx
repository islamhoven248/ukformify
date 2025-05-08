import React from 'react';
import { Container, Table } from 'react-bootstrap';
import plans from '/public/data/plans.json'; 

export default function Ourplans() {
  return (
    <Container className="py-5">
      <Table striped bordered hover responsive>
      <thead>
              <tr>
                <th>Feature</th>
                <th>Starter</th>
                <th>Business</th>
                <th>Premium</th>
              </tr>
            </thead>
        <tbody>
          {plans.map((plan, index) => (
            <tr key={index}>
              <td>{plan.title}</td>
              <td>{plan.priceEG}</td>
              <td>{plan.priceER}</td>
              
              <td>{plan.desc}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
