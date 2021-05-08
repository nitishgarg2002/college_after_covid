import React from "react";
import { Button } from "react-bootstrap";
import Navbar from "./NavTop";
import "./style.css";
const Onboarding = () => {
  return (
    <div className="image">
      <Navbar isLoggedin={false} />
      <h1 className="h1  m-5">Welcome back to College!!!</h1>
      <Button className="m-5 rounded btnn shadow-none">Go to Dashboard</Button>
      <h1 className="infoo h2 mb-5">Total Students Registered: 123</h1>
    </div>
  );
};

export default Onboarding;
