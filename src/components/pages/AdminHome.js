import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function AdminHome() {
  return (
    <div>
      <Container className="mt-4">
        <Row>
          <center>
            <h1
              className="mt-4 mb-4"
              style={{
                fontFamily: "'Courier New', Courier, monospace",
                fontWeight: "bold",
                fontSize: "3rem",
              }}
            >
              Admin Page
            </h1>
            <br />
          </center>
        </Row>
        <Row>
          <Col>
            <Card className="bg-warning text-light mb-3 shadow-rg">
              <Card.Body>
                <Row>
                  <Col>
                    <h3>Total Students Vaccinated</h3>
                  </Col>
                </Row>
                <footer className="h4">158</footer>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="bg-info text-light mb-3 shadow-rg">
              <Card.Body>
                <Row>
                  <Col>
                    <h3>Total Hostels Sanitized</h3>
                  </Col>
                </Row>
                <footer className="h4">2</footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="bg-info text-light mb-3 shadow-rg">
              <Card.Body>
                <Row>
                  <Col>
                    <h3>Total Students Arrived at Campus</h3>
                  </Col>
                </Row>
                <footer className="h4">123</footer>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="bg-warning text-light mb-3 shadow-rg ">
              <Card.Body>
                <Row>
                  <Col>
                    <h3>Total Admin/Staff Vaccinated</h3>
                  </Col>
                </Row>
                <footer className="h4">15</footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminHome;
