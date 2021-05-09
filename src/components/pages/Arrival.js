import React from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";

function Arrival() {
  return (
    <div>
      <Container className="pt-2">
        <h1 className="mt-4 mb-4"
              style={{
                fontFamily: "'Courier New', Courier, monospace",
                // fontWeight: "bold",
                fontSize: "3rem",
              }}>Arrival Form</h1>
        <Form>
          <Row>
            <Form.Group as={Col} controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="email" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formBasicPassword">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="formBasicEmail">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter city" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Select Hostel</Form.Label>
              <Form.Control as="select">
                <option>Choose...</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
              </Form.Control>
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Roll Number</Form.Label>
                <Form.Control type="text" placeholder="Roll Number" />
              </Form.Group>
            </Col>
            <Col>
              {" "}
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="number" placeholder="Contact Details" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Arrival Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Covid Report</Form.Label>
                <br />
                <Form.Control type="file" />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit" className="mt-4" size="lg">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Arrival;
