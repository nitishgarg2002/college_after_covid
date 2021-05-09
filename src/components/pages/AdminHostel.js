import React, { useState } from "react";

import { Form, Button, Container, Col, Row, Card } from "react-bootstrap";

function AdminHostel() {
  const [added, setAdded] = useState([
    {
      name: "Hostel A",
    },
  ]);
  const [canbeadded, setCanbeadded] = useState([
    {
      name: "Hostel B",
    },
    {
      name: "Hostel C",
    },
    {
      name: "Hostel D",
    },
  ]);
  return (
    <div>
      <Container className="mt-4 mb-4">
        <center>
          <h1
            className="mt-4 mb-4"
            style={{
              fontFamily: "'Courier New', Courier, monospace",
              fontWeight: "bold",
              fontSize: "3rem",
            }}
          >
            Admin Hostel
          </h1>
        </center>
        <h2
          className="ml-4 mt-4  "
          style={{
            fontFamily: "'Courier New', Courier, monospace",
            // fontWeight: "600",
            fontSize: "2rem",
          }}
        >
          Hostel Sanitized
        </h2>
        <Form>
          {added.map((user) => {
            return (
              <Row>
                <Col className="my-3">
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col sm={10}>
                          <h3>{user.name}</h3>
                        </Col>
                        <Col sm={2}>
                          <center>
                            <Button className=" shadow-none">Remove</Button>
                          </center>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            );
          })}
        </Form>
        <h2 className="ml-4 mt-4  "
          style={{
            fontFamily: "'Courier New', Courier, monospace",
            // fontWeight: "600",
            fontSize: "2rem",
          }}>Add Sanitization Hostel</h2>
        <Form>
          {/* {canbeadded.map(user=>  {return (<p>{user.name}</p>)})} */}
          {canbeadded.map((user) => {
            return (
              <Row>
                <Col className="my-3">
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col sm={10}>
                          <h3>{user.name}</h3>
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
            );
          })}
        </Form>
      </Container>
    </div>
  );
}

export default AdminHostel;
