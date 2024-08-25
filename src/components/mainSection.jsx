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

const MainSection = ({ mainContentData }) => {
  const {
    title,
    mainContent: { ratings, reviewsAmount, address },
    serviceProvide,
    openAt,
    closeAt,
    images,
    reviews: { reviwers },
  } = mainContentData;
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
      <Row>
        <Col md={6}>
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Title
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>
                  <h4 className="">{title}</h4>
                </span>
                <span style={{ marginLeft: 10, color: "green" }}>Verified</span>
              </Card.Title>
              <Card.Title>
                <Badge bg="success">{ratings}</Badge>{" "}
                <span className="ms-2">{`${reviewsAmount} Reviews`}</span>
                <Button variant="outline-primary" className="ms-2">
                  Rate
                </Button>
              </Card.Title>
              <Card.Text>
                <span className="me-2">
                  <i className="bi bi-geo-alt"></i>
                </span>{" "}
                {address}
              </Card.Text>
              <Card.Text>
                <span className="me-2">
                  <i className="bi bi-clock"></i>
                </span>{" "}
                {`Open - ${serviceProvide} - ${openAt} to ${closeAt}`}
              </Card.Text>
              <Button variant="outline-danger" className="mt-2">
                Get Directions
              </Button>
            </Card.Body>
          </Card>
        </Col>
        {images.map((image, index) => (
          <Col key={index} md={3}>
            <Image
              src={image}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "80%",
                aspectRatio: "3/2",
              }}
              className="me-2"
            />
          </Col>
        ))}
      </Row>
      <Row className="mt-3">
        <Row>
          <Col md={3}>
            <h5> {`${reviewsAmount} Google Reviews`}</h5>
          </Col>
        </Row>
        <Row
          className="scrollbar-hidden mt-3"
          style={{
            display: "flex",
            flexWrap: "nowrap",
            overflowY: "scroll",
            height: "180px",
          }}
        >
          {reviwers.map((profile) => (
            <Col
              style={{
                flexShrink: 0,
                marginRight: "10px",
                width: "350px",
                height: "100%",
              }}
            >
              <Card
                style={{
                  width: "350px",
                  height: "100%",
                }}
              >
                <Card.Body
                  style={{
                    width: "350px",
                    height: "100%",
                  }}
                >
                  <Card.Title
                    style={{ fontSize: 16, fontWeight: 500, display: "flex" }}
                  >
                    <img
                      src={profile?.image}
                      alt={profile?.fullName}
                      style={{
                        objectFit: "cover",
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        marginRight: 10,
                      }}
                    />
                    <h4> {profile?.fullName}</h4>
                  </Card.Title>
                  <Card.Text style={{ fontSize: 14, color: "#666" }}>
                    {profile?.comment.length > 180
                      ? profile?.comment.slice(0, 180) + "..."
                      : profile?.comment}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>
    </Container>
  );
};

export default MainSection;
