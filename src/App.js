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
import { currentUserId } from "./constants/constant";
import QuizWindow from "./components/QuizWindow";

// restrict routing

function App() {
  var userId = currentUserId;
  if (userId === 0) userId = 1;
  console.log("user id", userId);
  return (
    <Router>
      <div className="bg-indigo-900 h-screen p-5 md:p-10 lg:p-12">
        <div className="bg-white h-full rounded-lg overflow-scroll overflow-x-hidden">
          <Switch>
            <Route exact path="/">
              {userId ? (
                <Redirect to="/dashboard" />
              ) : (
                <Redirect to={"/login"} />
              )}
            </Route>
            <Route exact path="/signup">
              {userId ? <Redirect to="/dashboard" /> : <Signup />}
            </Route>
            <Route exact path="/login">
              {userId ? <Redirect to="/dashboard" /> : <Login />}
            </Route>
            <Route exact path="/dashboard">
              {userId ? <Dashboard /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/quiz/:id">
              {userId ? <QuizWindow /> : <Redirect to="/login" />}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
