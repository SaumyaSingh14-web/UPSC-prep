import { React, useState } from "react";
import Title from "../Title";
import Inputbox from "../Inputbox";
import Button from "../Button";
import { Link } from "react-router-dom";
import { details } from "../../constants/constant";

function Signup() {
  const previousDetails = details;
  console.log(typeof previousDetails);
  const [initialEntry, setInitialEntry] = useState({
    firstName: "",
    lastName: "",
    emailAdd: "",
    password: "",
  });

  const [inputErrors, setInputErrors] = useState({
    firstName: "",
    lastName: "",
    emailAdd: "",
    password: "",
  });

  console.log("inputErrors", inputErrors);
  return (
    <div className="text-center text-gray-900 m-2 sm:m-25">
      <Title title="Sign Up" />
      <Link to={"/login"}>Already have an account?</Link>
      <form method="post" onSubmit={(e) => {
          e.preventDefault();
          console.log(initialEntry);
          if(previousDetails) {
            localStorage.setItem("details", JSON.stringify([...previousDetails, initialEntry]));
          } else {
            localStorage.setItem("details", JSON.stringify([initialEntry]));
          }
        }}>
      <Inputbox
        errorMessage={inputErrors.firstName}
        value={initialEntry.firstName}
        onChange={(e) => {
          setInitialEntry({ ...initialEntry, firstName: e.target.value });

          if (initialEntry.firstName.length < 3) {
            setInputErrors({
              ...inputErrors,
              firstName: "First Name is invalid!",
            });
          } else {
            setInputErrors({
              ...inputErrors,
              firstName: "",
            });
          }
        }}
        label="First Name"
        type="text"
        placeholder="Enter your first name"
        name="firstName"
      />
      <Inputbox
        value={initialEntry.lastName}
        onChange={(e) => {
          setInitialEntry({ ...initialEntry, lastName: e.target.value });
          if (initialEntry.lastName.length < 3) {
            setInputErrors({
              ...inputErrors,
              lastName: "Last Name is invalid!",
            });
          } else {
            setInputErrors({
              ...inputErrors,
              lastName: "",
            });
          }
        }}
        errorMessage={inputErrors.lastName}
        label="Last Name"
        type="text"
        placeholder="Enter your last name"
        name="lastName"
      />
      <Inputbox
        errorMessage={inputErrors.emailAdd}
        value={initialEntry.emailAdd}
        onChange={(e) => {
          setInitialEntry({ ...initialEntry, emailAdd: e.target.value });
          const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          if (!emailRegex.test(initialEntry.emailAdd)) {
            setInputErrors({
              ...inputErrors,
              emailAdd: "Email is invalid!",
            });
          } else {
            setInputErrors({
              ...inputErrors,
              emailAdd: "",
            });
          }
        }}
        label="Email Add"
        type="email"
        placeholder="Enter your email"
        name="email"
      />
      <Inputbox
        errorMessage={inputErrors.password}
        value={initialEntry.passwordName}
        onChange={(e) => {
          setInitialEntry({ ...initialEntry, password: e.target.value });
          if (initialEntry.password.length < 5) {
            setInputErrors({
              ...inputErrors,
              password: "Password is invalid!",
            });
          } else {
            setInputErrors({
              ...inputErrors,
              password: "",
            });
          }
        }}
        label="Password"
        type="password"
        placeholder="Enter your password"
        name="password"
      />
      <Button
        btn="Sign Up"
        className="max-w-max"
        type="submit"
      />
      </form>
    </div>
  );
}

export default Signup;
