import React from "react";
import { Link } from "react-router-dom";
import { details } from "../constants/constant";
import Button from "./auth/Button";
import TestPage from "./TestPage";

function Dashboard() {
  const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const users = details;
  return (
    <div>
      <div><TestPage/></div>
      <div>
        <Link to={"/login"} onClick={() => {localStorage.removeItem("loggedInUser")}}><Button btn="Logout"/></Link>
      </div>
    </div>
  );
}

export default Dashboard;
