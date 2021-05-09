import AdminVaccination from "./AdminVaccination.js";
import React, { useEffect, useState } from "react";
import { Col, ListGroup, Nav, Navbar, Row } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AdminHome from "./AdminHome";
import AdminArrival from "./AdminArrival";
import AdminHostel from "./AdminHostel";
import NavTop from "./NavTop.js";

function AdminDashboard() {
  const [route, setRoute] = useState("AdminHome");

  return (
    <div>
      <NavTop isLoggedin={true}/>
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
                        history.replace(`/Admin/Home`);
                        setRoute("AdminHome");
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
                        history.replace(`/Admin/Arrival`);
                        setRoute("AdminArrival");
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
                        history.replace(`/Admin/Hostel`);
                        setRoute("AdminHostel");
                      }}
                    >
                      Hostel
                    </ListGroup.Item>
                  )}
                />
                <Route
                  render={({ history }) => (
                    <ListGroup.Item
                      type="button"
                      className="h4 bg-dark text-center text-light  mb-5"
                      onClick={() => {
                        history.replace(`/Admin/Vaccination`);
                        setRoute("AdminVaccination");
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
          {route === "AdminHome" ? <AdminHome /> : <div></div>}
          {route === "AdminArrival" ? <AdminArrival /> : <div></div>}
          {route === "AdminHostel" ? <AdminHostel /> : <div></div>}
          {route === "AdminVaccination" ? <AdminVaccination /> : <div></div>}
        </Col>
      </Row>
    </div>
  );
}

export default AdminDashboard;
