import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import TyreCard from "./tyreCard";
import Dropdown from "react-bootstrap/Dropdown";

const TyresSold = ({ tyreSold }) => {
  const { title, content } = tyreSold;
  const [data, setData] = useState(content);
  const [printItems, setPrintItems] = useState(9);
  const [renderedAllData, setRenderedAllData] = useState(false);

  const loadMoreItemsHandler = () => {
    setPrintItems(data.length);
    setRenderedAllData(true);
  };
  return (
    <>
      <Container className="mt-5">
        <Row md={3}>
          <h4>{title}</h4>
        </Row>
        <Row>
          <Col md={7}></Col>
          <Col md={2}>
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                id="dropdown-basic"
                style={{ border: "1px solid black" }}
              >
                Filter By
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Apollo</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Bedrock</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Birla</Dropdown.Item>
                <Dropdown.Item href="#/action-3">CEAT</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md={2}>
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                id="dropdown-basic"
                style={{ border: "1px solid black" }}
              >
                Price High to Low
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Most Popular</Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  Price High to Low
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Price Low to High
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          {data.map((obj, index) => {
            if (index < printItems) {
              return (
                <Col md={4} className="mt-4">
                  <TyreCard {...obj} />
                </Col>
              );
            }
          })}
        </Row>
        <Row
          style={{
            marginTop: "10px",
          }}
        >
          {" "}
          {!renderedAllData && (
            <Col md={12} style={{ display: "flex", justifyContent: "center" }}>
              <Button variant="primary" onClick={loadMoreItemsHandler}>
                View More
              </Button>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default TyresSold;
