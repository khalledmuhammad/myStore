import React from "react";
import "./Navbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";

function Navbaar() {
  return (
    <Navbar  bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
            <h1>Navbar</h1>
            </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbaar;
