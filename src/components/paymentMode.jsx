import React from "react";
import { Card, Container, ListGroup } from "react-bootstrap";

function PaymentMode() {
  return (
    <Container
      className="mt-5"
      style={{
        backgroundColor: "white",
        padding: "40px",
        borderRadius: "5px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Card className="mt-3">
        <Card.Header>Payment Mode</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <i className="fas fa-check-circle mr-2 text-success"></i>
            Deposit to Account
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="fas fa-check-circle mr-2 text-success"></i>
            Credit Card/Debit Card
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="fas fa-check-circle mr-2 text-success"></i>
            Net Banking
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="fas fa-check-circle mr-2 text-success"></i>
            UPI
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="fas fa-check-circle mr-2 text-success"></i>
            Wallets (PayTM/PhonePe/Amazon etc.)
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
}

export default PaymentMode;
