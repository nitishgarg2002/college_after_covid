import React from "react";
import { Row, Card, Col, Container, Button } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Container className="mt-4">
        <Row>
          <Col>
            <Card className="bg-warning text-light mb-3 shadow-rg">
              <Card.Body>
                <Row>
                  <Col>
                    <h3>Total Students Vaccinated</h3>
                  </Col>
                </Row>
                <footer className="h4">123</footer>
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
            <Card className="bg-warning text-light mb-3 shadow-rg">
              <Card.Body>
                <Row>
                  <Col>
                    <h3>Rooms Vacant</h3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <footer className="h4">Boys: 2</footer>
                  </Col>
                  <Col>
                    <footer className="h4">Girls: 2</footer>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Col className="my-3">
          <Card>
            <Card.Body>
              <Row>
                <Col sm={10}>
                  <h3>Recent Orders</h3>
                </Col>
                <Col sm={2}>
                  <center>
                    {" "}
                    <Button className=" shadow-none ">View All</Button>
                  </center>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </div>
  );
}

export default Home;
