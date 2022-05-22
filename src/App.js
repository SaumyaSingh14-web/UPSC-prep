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
      <div className="bg-orange-100 h-screen p-5 md:p-10 lg:p-12">
        <div className="bg-white h-full rounded-lg overflow-scroll overflow-x-hidden">
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
