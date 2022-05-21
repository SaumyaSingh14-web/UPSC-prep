import React from "react";
import Signup from "./components/auth/Signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/auth/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen sm:p-20">
        <div className="bg-white min-h-full rounded-xl">
          <Switch>
            <Route exact path="/">
              <Redirect to={"/login"} />
            </Route>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
