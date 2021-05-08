import React from "react";
import { Form, Button, Container, Col } from "react-bootstrap";
function Vaccination() {
  return (
    <>
      <Container className="pt-5">
        <h1>Add Vaccination</h1>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Select Hostel</Form.Label>
              <Form.Control as="select">
                <option>Choose...</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Select Hostel</Form.Label>
              <Form.Control as="select">
                <option>Choose...</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Vaccine Name</Form.Label>
              <Form.Control as="select">
                <option>Choose...</option>
                <option>Covishield</option>
                <option>Covaxin</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
              <Form.Label>Vaccination Report</Form.Label>
              <br />
              <Form.Control className="ml-4" type="file" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <div style={{ height: "20px" }} />
            {/* <center> */}
            <Form.Group as={Col}>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form.Group>
            {/* </center> */}
          </Form.Row>
        </Form>
      </Container>
    </>
  );
}

export default Vaccination;
