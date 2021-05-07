import React from "react";
import { Card, Container, Col, Row, ListGroup, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Checkup from './Checkup';
import Arrival from "./Arrival";
import Order from "./Order";
import Home from "./Home";
// import Leave from './Leave';
import Vaccination from "./Vaccination";
// import {} from 'bootstrap';
function Dashboard() {
  return (
    <Row>
      <Col sm={2}>
        {/* <ListGroup  variant="flush" className="text-center py-3">
        <Button><ListGroup.Item component={Link} to="/" className="my-3" style={{listStyleType:'none'}}>Home</ListGroup.Item></Button>
        <Button><ListGroup.Item  component={Link} to="/arrival" className="my-3 " > Arrival</ListGroup.Item></Button>
        <Button><ListGroup.Item  component={Link} to="/checkup" className="my-3">Checkup</ListGroup.Item></Button>
        <Button><ListGroup.Item  component={Link} to="/leave" className="my-3">Leave</ListGroup.Item></Button>
        // { <ListGroup.Item  component={Link} to="/" className="my-3">Home</ListGroup.Item> }
      </ListGroup> */}
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/arrival">Arrival</Link>
            </li>
          </ul>
        </Router>
      </Col>

      <Col>
        <Router>
          <Switch>
            {/* <Route exact path="/" exact component={Home}></Route> */}
            <Route path="/arrival" component={Arrival}></Route>
            <Route path="/" component={Order}></Route>
            <Route path="/vaccination" component={Vaccination}></Route>
          </Switch>
        </Router>
      </Col>
    </Row>
  );
}

export default Dashboard;
