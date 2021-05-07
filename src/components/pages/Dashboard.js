import React, { useEffect, useState } from "react";
import { Card, Container, Col, Row, ListGroup, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Arrival from "./Arrival";
import Order from "./Order";
import Home from "./Home";

import Vaccination from "./Vaccination";

function Dashboard() {
  const [route, setRoute] = useState("");
  return (
    <Row>
      <Col sm={2}>
        <Router>
          <ul>
            <Route
              render={({ history }) => (
                <li
                  onClick={() => {
                    history.replace(`/`);
                    setRoute("");
                  }}
                >
                  Home
                </li>
              )}
            />
            <Route
              render={({ history }) => (
                <li
                  onClick={() => {
                    history.replace(`/arrival`);
                    setRoute("arrival");
                  }}
                >
                  Arrival
                </li>
              )}
            />
            <Route
              render={({ history }) => (
                <li
                  onClick={() => {
                    history.replace(`/order`);
                    setRoute("order");
                  }}
                >
                  Order
                </li>
              )}
            />
            <Route
              render={({ history }) => (
                <li
                  onClick={() => {
                    history.replace(`/vaccination`);
                    setRoute("vaccination");
                  }}
                >
                  vaccination
                </li>
              )}
            />
          </ul>
        </Router>
      </Col>

      <Col>
        {route === "" ? <Home /> : <div></div>}
        {route === "arrival" ? <Arrival /> : <div></div>}
        {route === "order" ? <Order /> : <div></div>}
        {route === "vaccination" ? <Vaccination /> : <div></div>}
      </Col>
    </Row>
  );
}

export default Dashboard;
