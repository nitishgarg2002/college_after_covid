import React, { useEffect, useState } from "react";
import { Col, ListGroup, Nav, Navbar, Row } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavTop from "./NavTop";
import Arrival from "./Arrival";
import Order from "./Order";
import Home from "./Home";

import Vaccination from "./Vaccination";

function Dashboard() {
  const [route, setRoute] = useState("home");
  return (
    <>
      <NavTop isLoggedin={true} />
      <Row>
        <Col sm={12} md={2} className="justify-content-center shadow-lg">
          <Router>
            <Nav>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />

              <ul style={{ height: "window.innerHeight" }}>
                <Route
                  render={({ history }) => (
                    <ListGroup.Item
                      type="button"
                      className="h4 bg-dark text-center text-light  mt-4 mb-5"
                      onClick={() => {
                        history.replace(`/User/Dashboard`);
                        setRoute("home");
                      }}
                    >
                      Home
                    </ListGroup.Item>
                  )}
                />
                <Route
                  render={({ history }) => (
                    <ListGroup.Item
                      type="button"
                      className="h4 bg-dark text-center text-light  mb-5"
                      onClick={() => {
                        history.replace(`/User/Arrival`);
                        setRoute("arrival");
                      }}
                    >
                      Arrival
                    </ListGroup.Item>
                  )}
                />
                <Route
                  render={({ history }) => (
                    <ListGroup.Item
                      type="button"
                      className="h4 bg-dark text-center text-light  mb-5"
                      onClick={() => {
                        history.replace(`/User/Order`);
                        setRoute("order");
                      }}
                    >
                      Order
                    </ListGroup.Item>
                  )}
                />
                <Route
                  render={({ history }) => (
                    <ListGroup.Item
                      type="button"
                      className="h4 bg-dark text-center text-light  mb-5"
                      onClick={() => {
                        history.replace(`/User/Vaccination`);
                        setRoute("vaccination");
                      }}
                    >
                      Vaccination
                    </ListGroup.Item>
                  )}
                />
              </ul>
            </Nav>
          </Router>
        </Col>

        <Col style={{ height: "100vh" }} className="shadow-lg">
          {route === "home" ? <Home /> : <div></div>}
          {route === "arrival" ? <Arrival /> : <div></div>}
          {route === "order" ? <Order /> : <div></div>}
          {route === "vaccination" ? <Vaccination /> : <div></div>}
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
