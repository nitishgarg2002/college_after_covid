import React from "react";
import { NavDropdown, Button, Nav, Navbar, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function NavTop({ isLoggedin, isLoginPage, handleRegister, setIsLogin }) {
  return (
    <div className="bg-dark">
      <Container className="container-fluid bg-dark">
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="/">College-After-Covid</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
          {isLoginPage ? null : isLoggedin ? (
            <Route
              render={({ history }) => (
                <Button
                  className="ml-5 shadow-none "
                  variant="danger"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  LogOut
                </Button>
              )}
            />
          ) : (
            // <Button variant="danger" className="ml-5 shadow-none ">
            //   LogOut
            // </Button>
            <>
              <Navbar>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Route
                  render={({ history }) => (
                    <Button
                      className="mx-3"
                      onClick={() => {
                        history.push("/login-register");
                      }}
                    >
                      Log In
                    </Button>
                  )}
                />
              </Navbar>
            </>
          )}
        </Navbar>
      </Container>
    </div>
  );
}

export default NavTop;
