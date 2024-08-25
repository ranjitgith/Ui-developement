import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Navbar,
  Nav,
  Image,
} from "react-bootstrap";

const Footer = () => {
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
      <Container
        className="mt-5"
        style={{ backgroundColor: "#ffeaaa", padding: "20px" }}
      >
        <Row>
          <Col md={6} className="d-flex flex-column align-items-center">
            <h1>Have a question about Tyres?</h1>
            <p>Get an answer in 24 hours from our experts.</p>
            <Form style={{ display: "flex", gap: "10px" }}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Ask or search your question"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <Image
              src="https://cdn.tyreplex.net/themes/moonlight/images/haveQuestion-bg.png?v=600&tr=q-60"
              fluid
            />
          </Col>
        </Row>
      </Container>
      <Navbar bg="light" expand="lg" className="mt-5">
        <Container>
          <Navbar.Brand href="#home">TyrePlex</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Who We Are</Nav.Link>
              <Nav.Link href="#link">Are you a Tyre Dealer?</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#link">Privacy Policy</Nav.Link>
              <Nav.Link href="#link">Terms of Use</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#link">Contact Us</Nav.Link>
              <Nav.Link href="#link">Career</Nav.Link>
              <Nav.Link href="#link">Shipping & Return Policy</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="text-center mt-3">
        <p>
          © 2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </Container>
  );
};

export default Footer;
