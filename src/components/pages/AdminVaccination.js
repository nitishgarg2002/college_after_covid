import React, { useState } from "react";
import { Table, Button, Container, Row, Col, Card } from "react-bootstrap";
function AdminVaccination() {
  const [student_Vaccination_data, setStudent_Vaccination_data] = useState([
    {
        uname: "abc",
        email: "j@123",
        password: "123",
        role: "user",
      },{
        uname: "abc",
        email: "j@123",
        password: "123",
        role: "user",
      },{
        uname: "abc",
        email: "j@123",
        password: "123",
        role: "user",
      },{
        uname: "abc",
        email: "j@123",
        password: "123",
        role: "user",
      },{
        uname: "abc",
        email: "j@123",
        password: "123",
        role: "user",
      },{
        uname: "abc",
        email: "j@123",
        password: "123",
        role: "user",
      },
  ]);
  const [admin_Vaccination_data, setAdmin_Vaccination_data] = useState([
    {
        uname: "abc",
        email: "j@123",
        password: "123",
        role: "admin",
      },{
        uname: "abc",
        email: "j@123",
        password: "123",
        role: "admin",
      },{
        uname: "abc",
        email: "j@123",
        password: "123",
        role: "admin",
      },{
        uname: "abc",
        email: "j@123",
        password: "123",
        role: "admin",
      },{
        uname: "abc",
        email: "j@123",
        password: "123",
        role: "admin",
      },{
        uname: "abc",
        email: "j@123",
        password: "123",
        role: "admin",
      },
  ]);
  const [showtable, setShowtable] = useState("");
  return (
    <div>
      {showtable === "" ? (
        <>
          <Container>
            <center>
              {" "}
              <h1
                className="mt-4 mb-4"
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  fontWeight: "bold",
                  fontSize: "3rem",
                }}
              >
                Vaccination Data
              </h1>
            </center>

            <Row>
              <Col>
                <Card
                  className="bg-warning text-light mb-3 shadow-rg"
                  onClick={() => setShowtable("user")}
                >
                  <Card.Body>
                    <Row>
                      <Col>
                        <h3>User</h3>
                      </Col>
                    </Row>
                    <footer className="h4">123</footer>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card
                  className="bg-info text-light mb-3 shadow-rg"
                  onClick={() => setShowtable("admin")}
                >
                  <Card.Body>
                    <Row>
                      <Col>
                        <h3>Admin</h3>
                      </Col>
                    </Row>
                    <footer className="h4">2</footer>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <div></div>
      )}
      {showtable === "user" ? (
        <>
          <Container>
            <center>
              <Button className="mt-4 mb-4" onClick={() => setShowtable("")}>
                Go Back
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
                  <th>Degree</th>
                  <th>Institution</th>
                  <th>CGPA/%</th>
                </tr>
              </thead>
              <tbody>
                {student_Vaccination_data.map((data) => {
                  return (
                    <tr>
                      <td>{data.uname}</td>
                      <td>{data.email}</td>
                      <td>{data.password}</td>
                      <td>{data.role}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </>
      ) : (
        <div></div>
      )}
      {showtable === "admin" ? (
        <>
          <Container>
            <center>
              {" "}
              <Button className="mt-4 mb-4" onClick={() => setShowtable("")}>
                Go Back
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
                  <th>Degree</th>
                  <th>Institution</th>
                  <th>CGPA/%</th>
                </tr>
              </thead>
              <tbody>
                {admin_Vaccination_data.map((data) => {
                  return (
                    <tr>
                      <td>{data.uname}</td>
                      <td>{data.email}</td>
                      <td>{data.password}</td>
                      <td>{data.role}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default AdminVaccination;
