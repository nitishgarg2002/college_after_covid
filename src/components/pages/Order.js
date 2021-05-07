import React from "react";

import { Form, Button, Row, Col, Container } from "react-bootstrap";
function Order() {
  return (
    <div>
      <Container className="pt-5">
        <h1>Order Something</h1>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Order From</Form.Label>
                <Form.Control as="select">
                  <option>Canteen</option>
                  <option>G block</option>
                  <option>Jaggis</option>
                  <option>Gopal</option>
                  {/* <option>5</option> */}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="number" placeholder="Enter mobile number" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Hostel</Form.Label>
                <Form.Control as="select">
                  {/* <option value="">Choose...</option> */}
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  {/* <option>5</option> */}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Item description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <br />
          <Button variant="primary" type="submit">
            Order
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Order;
