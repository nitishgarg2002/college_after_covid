import React from "react";
import Navbar from "./NavTop";
import "./style.css";
const Onboarding = () => {
  return (
    <div className="image">
      <Navbar isLoggedin={false} />
      <h1 className="h1  m-5">Welcome back to College!!!</h1>
      <h1 className="infoo h2 ">Total Students Registered: 123</h1>
    </div>
  );
};

export default Onboarding;
