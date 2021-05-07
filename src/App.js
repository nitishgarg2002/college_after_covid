import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavTop from "./components/pages/NavTop";
import Dashboard from "./components/pages/Dashboard";
function App() {
  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <NavTop />
      <Dashboard />
    </div>
  );
}

export default App;
