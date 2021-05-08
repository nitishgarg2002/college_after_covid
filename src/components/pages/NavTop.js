import React from "react";
import { NavDropdown, Button, Nav, Navbar, Container } from "react-bootstrap";
function NavTop({ isLoggedin }) {
  return (
    <div className="bg-dark">
      <Container className="container-fluid bg-dark">
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="/">College-After-Covid</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
          {isLoggedin ? (
            <Button variant="danger" className="ml-5 shadow-none ">
              LogOut
            </Button>
          ) : (
            <>
              <Navbar>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Button className="mx-3">Log In</Button>
                <Button>Register</Button>
              </Navbar>
            </>
          )}
        </Navbar>
      </Container>
    </div>
  );
}

export default NavTop;
