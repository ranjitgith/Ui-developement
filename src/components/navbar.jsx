import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

function NavbarSection({ navbarData }) {
  const { title, content } = navbarData;
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary bold "
        style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
      >
        <Container>
          <Navbar.Brand href="#home">{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {content.map((data, index) => {
                return data.dropDown.length > 0 ? (
                  <NavDropdown
                    key={index}
                    title={data.title}
                    id="collapsible-nav-dropdown"
                  >
                    {data?.dropDown?.map(
                      (item, index) =>
                        item.length > 0 && (
                          <NavDropdown.Item key={index}>
                            {item}
                          </NavDropdown.Item>
                        )
                    )}
                  </NavDropdown>
                ) : (
                  <Nav.Link key={index} href="#home">
                    {data.title}
                  </Nav.Link>
                );
              })}
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-success">Login</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarSection;
