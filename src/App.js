import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/pages/Dashboard";
import Onboarding from "./components/pages/Onboarding";
import Login from "./components/pages/Login";
import AdminDashboard from "./components/pages/AdminDashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Onboarding} />
          <Route exact path="/login-register" component={Login} />
          <Route path="/User/Home" component={Dashboard} />
          <Route path="/Admin/Home" component={AdminDashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
