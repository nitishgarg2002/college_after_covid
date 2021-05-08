import React, { useState } from "react";
import {
  Card,
  Form,
  Button,
  ListItem,
  ListGroup,
  Row,
  Col,
} from "react-bootstrap";
import NavTop from "./NavTop";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const handleRegister = () => {
    setIsLogin((prev) => !prev);
  };

  const SignIn = () => (
    <>
      <div className=" mt-5 align-items-center d-flex justify-content-center">
        {" "}
        <Card
          style={{
            backgroundColor: "black",
            width: "30vw",
            content: "center",
          }}
          text="white"
        >
          <Row>
            <Col>
              <ListGroup.Item
                style={{ backgroundColor: "black", color: "white" }}
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
                style={{ backgroundColor: "black", color: "white" }}
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
              <Button variant="primary" className="mt-2" type="submit">
                Log In
              </Button>
            </footer>
          </Card.Body>
        </Card>
      </div>
    </>
  );
  const Register = () => (
    <>
      <div className=" mt-5 align-items-center d-flex justify-content-center">
        {" "}
        <Card
          style={{
            backgroundColor: "black",
            width: "30vw",
            content: "center",
          }}
          text="white"
        >
          <Row>
            <Col>
              <ListGroup.Item
                style={{ backgroundColor: "black", color: "white" }}
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
                style={{ backgroundColor: "black", color: "white" }}
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
              <Button variant="primary" className="mt-2" type="submit">
                Register
              </Button>
            </footer>
          </Card.Body>
        </Card>
      </div>
    </>
  );
  return (
    <div>
      <NavTop isLoginPage={true} />
      {isLogin ? <SignIn /> : <Register />}
    </div>
  );
};

export default Login;
