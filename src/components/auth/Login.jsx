import React from "react";
import Inputbox from "./Inputbox";
import Button from "./Button";
import Title from "./Title";

function Login(props) {
  return (
    <div className="text-gray-900 text-center">
      <Title title="Login" />
      <Inputbox
        label="Email Add"
        type="email"
        placeholder="Enter your email"
        name="email"
      />
      <Inputbox
        label="Password"
        type="password"
        placeholder="Enter your password"
        name="password"
      />
      <Button btn="Login" className="max-w-max" />
    </div>
  );
}

export default Login;