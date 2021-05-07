import React from "react";
import { NavDropdown, Nav, Navbar, Container } from "react-bootstrap";
function Home() {
  return (
    <div className="bg-dark">
      <Container className="container-fluid bg-dark">
        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="#">College-After-Covid</Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default Home;
