import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Badge,
} from "react-bootstrap";

const Deals = ({ dealsData }) => {
  const { title, content } = dealsData;
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
      <Row md={3}>
        <h3>{title}</h3>
      </Row>
      <Row
        className="scrollbar-hidden mt-3"
        style={{
          display: "flex",
          flexWrap: "nowrap",
          overflowY: "scroll",
          height: "100px",
        }}
      >
        {content.map((profile) => (
          <Col
            style={{
              flexShrink: 0,
              marginRight: "10px",
              width: "200px",
              height: "100%",
            }}
          >
            <Card
              style={{
                width: "200px",
                height: "100%",
              }}
            >
              <Card.Body
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Card.Title
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={profile?.images[0]}
                    alt={profile?.name}
                    style={{
                      objectFit: "cover",
                      width: "50%",
                      height: "50%",
                    }}
                  />
                </Card.Title>
                <Card.Text
                  style={{ fontSize: 14, color: "#666", textAlign: "center" }}
                >
                  {profile.dealName}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Deals;
