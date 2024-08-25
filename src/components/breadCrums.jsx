import React from "react";
import { Breadcrumb, Container } from "react-bootstrap";

function BreadcrumbComponent() {
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
      <Breadcrumb style={{ margin: "40px 0" }}>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/tyre-dealers">Tyre Dealers</Breadcrumb.Item>
        <Breadcrumb.Item href="/tyre-dealers-ghaziabad">
          Tyre Dealers Ghaziabad
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          SHREE HEMKUNT TYRES AND SERVICES
        </Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
}

export default BreadcrumbComponent;
