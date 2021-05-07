import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
function Checkup() {
  return (
    <div>
      <Container>
        <h1>Request Check-Up</h1>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="Enter Name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Age" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Symptoms</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <hr />
        <br />
        <h1>Requested Checkups</h1>
      </Container>
    </div>
  );
}

export default Checkup;
