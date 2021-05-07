import React from "react";
import { Row, Card, Col, Container, Button } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card className="bg-success  ">
              <Card.Body>
                <Row>
                  <Col>
                    <h3>Total Students Vaccinated</h3>
                  </Col>
                  <Col>
                    <img />
                  </Col>
                </Row>
                <footer>123</footer>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="bg-primary ">
              <Card.Body>
                <Row>
                  <Col>
                    <h3>Total Students Vaccinated</h3>
                  </Col>
                  <Col>
                    <img />
                  </Col>
                </Row>
                <footer>123</footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Col className="my-2">
          <Card>
            <Card.Body>
              <Row>
                <Col sm={10}>
                  <h3>Total Students Vaccinated</h3>
                </Col>
                <Col sm={2}>
                  <center>
                    {" "}
                    <Button>View</Button>
                  </center>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col className="my-2">
          <Card>
            <Card.Body>
              <Row>
                <Col sm={10}>
                  <h3>Total Students Vaccinated</h3>
                </Col>
                <Col sm={2}>
                  <center>
                    {" "}
                    <Button>View</Button>
                  </center>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col className="my-2">
          <Card>
            <Card.Body>
              <Row>
                <Col sm={10}>
                  <h3>Total Students Vaccinated</h3>
                </Col>
                <Col sm={2}>
                  <center>
                    {" "}
                    <Button>View</Button>
                  </center>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col className="my-2">
          <Card>
            <Card.Body>
              <Row>
                <Col sm={10}>
                  <h3>Total Students Vaccinated</h3>
                </Col>

                <Col sm={2}>
                  <center>
                    {" "}
                    <Button>View</Button>
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
