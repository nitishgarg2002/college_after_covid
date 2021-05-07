import React, { useEffect, useState } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Arrival from "./Arrival";
import Order from "./Order";
import Home from "./Home";

import Vaccination from "./Vaccination";

function Dashboard() {
  const [route, setRoute] = useState("");
  return (
    <Row>
      <Col sm={6} md={2} fluid className=" shadow-lg">
        <Router>
          <ul style={{ height: "window.innerHeight" }}>
            <Route
              render={({ history }) => (
                <ListGroup.Item
                  type="button"
                  className="h4 bg-dark text-light text-center mt-4 mb-5"
                  onClick={() => {
                    history.replace(`/`);
                    setRoute("");
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
                  className="h4 bg-dark text-light text-center mb-5"
                  onClick={() => {
                    history.replace(`/arrival`);
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
                  className="h4 bg-dark text-light text-center mb-5"
                  onClick={() => {
                    history.replace(`/order`);
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
                  className="h4 bg-dark text-light text-center mb-5"
                  onClick={() => {
                    history.replace(`/vaccination`);
                    setRoute("vaccination");
                  }}
                >
                  Vaccination
                </ListGroup.Item>
              )}
            />
          </ul>
        </Router>
      </Col>

      <Col style={{ height: "100vh" }} className="shadow-lg">
        {route === "" ? <Home /> : <div></div>}
        {route === "arrival" ? <Arrival /> : <div></div>}
        {route === "order" ? <Order /> : <div></div>}
        {route === "vaccination" ? <Vaccination /> : <div></div>}
      </Col>
    </Row>
  );
}

export default Dashboard;
