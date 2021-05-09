import React, { useState } from "react";
import { Table, Button, Container, Row, Col, Card } from "react-bootstrap";
import ArrivalDetailsModal from "./ArrivalDetailsModal.js";

function AdminArrival() {
  const [data_Hostel_A, setData_Hostel_A] = useState([
    {
      name: "A",
    },
  ]);
  const [data_Hostel_B, setData_Hostel_B] = useState([
    {
      name: "B",
    },
  ]);
  const [data_Hostel_C, setData_Hostel_C] = useState([
    {
      name: "C",
    },
  ]);
  const [data_Hostel_D, setData_Hostel_D] = useState([
    {
      name: "D",
    },
  ]);
  const [arrival, setArrival] = useState("");
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div>
      {arrival === "" ? (
        <Container className="mt-5">
          <center>
            {" "}
            <h1
              className="mt-2 mb-5"
              style={{
                fontFamily: "'Courier New', Courier, monospace",
                fontWeight: "bold",
                fontSize: "3rem",
              }}
            >
              Student/Staff Arrival Information
            </h1>
          </center>
          <Row>
            <Col>
              <Card
                className="bg-warning text-light mb-3 shadow-rg"
                onClick={() => setArrival("A")}
              >
                <Card.Body>
                  <Row>
                    <Col>
                      <h3>Hostel A</h3>
                    </Col>
                  </Row>
                  <footer className="h4">123</footer>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card
                className="bg-warning text-light mb-3 shadow-rg"
                onClick={() => setArrival("B")}
              >
                <Card.Body>
                  <Row>
                    <Col>
                      <h3>Hostel B</h3>
                    </Col>
                  </Row>
                  <footer className="h4">2</footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card
                className="bg-info text-light mb-3 shadow-rg"
                onClick={() => setArrival("C")}
              >
                <Card.Body>
                  <Row>
                    <Col>
                      <h3>Hostel C</h3>
                    </Col>
                  </Row>
                  <footer className="h4">123</footer>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card
                className="bg-info text-light mb-3 shadow-rg"
                onClick={() => setArrival("D")}
              >
                <Card.Body>
                  <Row>
                    <Col>
                      <h3>Hostel D</h3>
                    </Col>
                  </Row>
                  <footer className="h4">2</footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <div></div>
      )}

      {arrival === "A" ? (
        <>
          <Container>
            {/* <ArrivalDetailsModal show={show} handleShow={handleShow} /> */}
            <center>
              {" "}
              <Button
                className="mt-4 mb-4"
                onClick={() => {
                  setArrival("");
                }}
              >
                GO Back
              </Button>{" "}
            </center>
            <Table
              striped
              bordered
              hover
              variant="light"
              className="table-responsive-md "
            >
              <thead style={{ backgroundColor: "#E2E3E5" }}>
                <tr>
                  <th>Year</th>
                  <th>Accept</th>
                  <th>Reject</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {data_Hostel_A.map((data) => {
                  return (
                    <tr>
                      <td>{data.name}</td>
                      <td>
                        <Button variant="outline-success">Accept</Button>
                      </td>
                      <td>
                        <Button variant="outline-danger">Reject</Button>
                      </td>
                      <td>
                        {/* <Button variant="outline-info" onClick={handleShow}> */}
                        <Button variant="outline-info">View Details</Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </>
      ) : (
        <></>
      )}
      {arrival === "B" ? (
        <>
          <Container>
            {/* <ArrivalDetailsModal show={show} handleShow={handleShow} /> */}
            <center>
              <Button
                className="mt-4 mb-4"
                onClick={() => {
                  setArrival("");
                }}
              >
                GO Back
              </Button>{" "}
            </center>
            <Table
              striped
              bordered
              hover
              variant="light"
              className="table-responsive-md "
            >
              <thead style={{ backgroundColor: "#E2E3E5" }}>
                <tr>
                  <th>Year</th>
                  <th>Accept</th>
                  <th>Reject</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {data_Hostel_B.map((data) => {
                  return (
                    <tr>
                      <td>{data.name}</td>
                      <td>
                        <Button variant="outline-success">Accept</Button>
                      </td>
                      <td>
                        <Button variant="outline-danger">Reject</Button>
                      </td>
                      <td>
                        {/* <Button variant="outline-info" onClick={handleShow}> */}
                        <Button variant="outline-info">View Details</Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </>
      ) : (
        <></>
      )}
      {arrival === "C" ? (
        <>
          <Container>
            {/* <ArrivalDetailsModal show={show} handleShow={handleShow} /> */}
            <center>
              <Button
                className="mt-4 mb-4"
                onClick={() => {
                  setArrival("");
                }}
              >
                GO Back
              </Button>
            </center>
            <Table
              striped
              bordered
              hover
              variant="light"
              className="table-responsive-md "
            >
              <thead style={{ backgroundColor: "#E2E3E5" }}>
                <tr>
                  <th>Year</th>
                  <th>Accept</th>
                  <th>Reject</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {data_Hostel_C.map((data) => {
                  return (
                    <tr>
                      <td>{data.name}</td>
                      <td>
                        <Button variant="outline-success">Accept</Button>
                      </td>
                      <td>
                        <Button variant="outline-danger">Reject</Button>
                      </td>
                      <td>
                        {/* <Button variant="outline-info" onClick={handleShow}> */}
                        <Button variant="outline-info">View Details</Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </>
      ) : (
        <></>
      )}
      {arrival === "D" ? (
        <>
          <Container>
            {/* <ArrivalDetailsModal show={show} handleShow={handleShow} /> */}
            <center>
              <Button
                className="mt-4 mb-4"
                onClick={() => {
                  setArrival("");
                }}
              >
                GO Back
              </Button>
            </center>
            <Table
              striped
              bordered
              hover
              variant="light"
              className="table-responsive-md "
            >
              <thead style={{ backgroundColor: "#E2E3E5" }}>
                <tr>
                  <th>Year</th>
                  <th>Accept</th>
                  <th>Reject</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {data_Hostel_D.map((data) => {
                  return (
                    <tr>
                      <td>{data.name}</td>
                      <td>
                        <Button variant="outline-success">Accept</Button>
                      </td>
                      <td>
                        <Button variant="outline-danger">Reject</Button>
                      </td>
                      <td>
                        {/* <Button variant="outline-info" onClick={handleShow}> */}
                        <Button variant="outline-info">View Details</Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default AdminArrival;
