import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap'

function AdminHome() {
    return (
        <div>
            <Container>
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
                    <h3>Total Hostels Vaccinated</h3>
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
            </Container>
        </div>
    )
}

export default AdminHome
