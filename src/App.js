import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavTop from "./components/pages/NavTop";
import Dashboard from "./components/pages/Dashboard";
import Onboarding from "./components/pages/Onboarding";
import Login from "./components/pages/Login";
function App() {
  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <Login />
      {/* <Onboarding /> */}
      {/* <NavTop />
      <Dashboard /> */}
    </div>
  );
}

export default App;
