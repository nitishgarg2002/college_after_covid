import React from "react";

import { Form, Button, Container, Col, Row, Card } from "react-bootstrap";

function AdminHostel() {
  return (
    <div>
        <Container className="mt-4 mb-4">
      <h1>Admin Hostel</h1>
      <h2>Hostel Sanitized</h2>
      <Form>
        <Row>
          <Col className="my-3">
            <Card>
              <Card.Body>
                <Row>
                  <Col sm={10}>
                    <h3>Hostel A</h3>
                  </Col>
                  <Col sm={2}>
                    <center>
                      {" "}
                      {/* <Button className=" shadow-none ">Add</Button> */}
                      <Button className=" shadow-none ">Remove</Button>
                    </center>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>{" "}
        <Row>
          <Col className="my-3">
            <Card>
              <Card.Body>
                <Row>
                  <Col sm={10}>
                    <h3>Hostel B</h3>
                  </Col>
                  <Col sm={2}>
                    <center>
                      {" "}
                      {/* <Button className=" shadow-none ">Add</Button> */}
                      <Button className=" shadow-none ">Remove</Button>
                    </center>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>{" "}
      </Form>
      <h2>Add Sanitization Hostel</h2>
      <Form>
        <Row>
          <Col className="my-3">
            <Card>
              <Card.Body>
                <Row>
                  <Col sm={10}>
                    <h3>Hostel D</h3>
                  </Col>
                  <Col sm={2}>
                    <center>
                      {" "}
                      <Button className=" shadow-none ">Add</Button>
                      {/* <Button className=" shadow-none ">Remove</Button> */}
                    </center>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="my-3">
            <Card>
              <Card.Body>
                <Row>
                  <Col sm={10}>
                    <h3>Hostel C</h3>
                  </Col>
                  <Col sm={2}>
                    <center>
                      {" "}
                      <Button className=" shadow-none ">Add</Button>
                      {/* <Button className=" shadow-none ">Remove</Button> */}
                    </center>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>{" "}
      </Form>
      </Container>
    </div>
  );
}

export default AdminHostel;
