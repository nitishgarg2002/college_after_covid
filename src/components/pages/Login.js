import React, { useState, useEffect } from "react";
import { Card, Form, Button, ListGroup, Row, Col } from "react-bootstrap";
import NavTop from "./NavTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const handleRegister = () => {
    setIsLogin((prev) => !prev);
  };
  const [response, setResponse] = useState(true);
  const [role, setRole] = useState("user");
  const SignIn = () => (
    <>
      <div className=" mt-5 d-flex justify-content-center">
        {" "}
        <Card
          style={{
            backgroundColor: "#292B2C",
            width: "45rem",
            content: "center",
          }}
          text="white"
        >
          <Row>
            <Col>
              <ListGroup.Item
                style={{
                  backgroundColor: "#292B2C",
                  color: "white",
                  borderBlockColor: "black",
                }}
              >
                {" "}
                <Card.Header
                  type="button"
                  className="bg-white text-dark hover-white h4"
                >
                  LogIn
                </Card.Header>
              </ListGroup.Item>{" "}
            </Col>
            <Col>
              <ListGroup.Item
                style={{
                  backgroundColor: "#292B2C",
                  color: "white",
                  borderBlockColor: "black",
                }}
              >
                {" "}
                <Card.Header
                  type="button"
                  className="  hover-white h4"
                  onClick={handleRegister}
                >
                  Register
                </Card.Header>
              </ListGroup.Item>{" "}
            </Col>
          </Row>

          <Card.Body>
            <Card.Title>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Card.Title>
            <Card.Title>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Card.Title>

            <footer>
              <Route
                render={({ history }) => (
                  <Button
                    className="mt-2"
                    type="submit"
                    onClick={() => {
                      response
                        ? role === "user"
                          ? history.push("/home")
                          : history.push("/AdminDashboard")
                        : alert("user not valid");
                    }}
                  >
                    Login
                  </Button>
                )}
              />
            </footer>
          </Card.Body>
        </Card>
      </div>
    </>
  );
  const Register = () => (
    <>
      <div className=" mt-5 d-flex justify-content-center">
        {" "}
        <Card
          style={{
            backgroundColor: "#292B2C",
            width: "45rem",
            content: "center",
          }}
          text="white"
        >
          <Row>
            <Col>
              <ListGroup.Item
                style={{
                  backgroundColor: "#292B2C",
                  color: "white",
                  borderBlockColor: "black",
                }}
              >
                {" "}
                <Card.Header
                  type="button"
                  className=" hover-white h4"
                  onClick={handleRegister}
                >
                  LogIn
                </Card.Header>
              </ListGroup.Item>{" "}
            </Col>
            <Col>
              <ListGroup.Item
                style={{
                  backgroundColor: "#292B2C",
                  color: "white",
                  borderBlockColor: "black",
                }}
              >
                {" "}
                <Card.Header
                  type="button"
                  className=" bg-white text-dark hover-white h4"
                >
                  Register
                </Card.Header>
              </ListGroup.Item>{" "}
            </Col>
          </Row>

          <Card.Body>
            <Card.Title>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter Name" />
              </Form.Group>
            </Card.Title>
            <Card.Title>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Card.Title>
            <Card.Title>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Institution Roll Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Roll Number" />
              </Form.Group>
            </Card.Title>
            <Card.Title>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Card.Title>

            <footer>
              <Route
                render={({ history }) => (
                  <Button
                    className="mt-2"
                    type="submit"
                    onClick={() => {
                      response
                        ? history.push("/home")
                        : alert("user not valid");
                    }}
                  >
                    Register
                  </Button>
                )}
              />{" "}
            </footer>
          </Card.Body>
        </Card>
      </div>
    </>
  );
  return (
    <div>
      <NavTop
        isLoginPage={true}
        handleRegister={handleRegister}
        setIsLogin={setIsLogin}
      />
      {isLogin ? <SignIn /> : <Register />}
    </div>
  );
};

export default Login;
