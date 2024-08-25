import React from "react";
import { Card, Col, Row, Badge, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function TyreCard({
  name,
  warranty,
  lifespan,
  tyrePrice,
  rating,
  reviews,
  price,
  offer,
  type,
  images,
}) {
  return (
    <Card style={{ width: "20rem", overflow: "hidden", height: "280px" }}>
      <Card.Body>
        <Row>
          <Col md={6}>
            <Card.Title>{name}</Card.Title>
          </Col>
          <Col md={6}>
            <Badge bg="success">{warranty}</Badge>
          </Col>
        </Row>
        <Card.Text className="mt-3">
          <small className="text-muted">{lifespan}</small> <br />
          <strong>{tyrePrice}</strong> <br />
          <Row className="mt-3 mb-3">
            <Col md={6}>
              <Row>
                <Col md={12}>
                  <Badge bg="success" style={{ marginRight: "5px" }}>
                    {4.1}
                  </Badge>
                  <small>({reviews} Reviews)</small>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>₹{price}</Col>
              </Row>
              <Row>
                <Col>
                  <p style={{ color: "green", cursor: "pointer" }}>{offer}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <small className="text-muted">{type}</small>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <img
                src={images[0]}
                alt={name}
                style={{
                  objectFit: "cover",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                }}
              />
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TyreCard;
