import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import TestPage from "./TestPage";

function Dashboard() {
  return (
    <div>
      <div><TestPage/></div>
      <div>
        <div onClick={() => {localStorage.removeItem("loggedInUser"); window.location.href = '/login'}}><Button btn="Logout"/></div>
      </div>
    </div>
  );
}

export default Dashboard;
