import { React, useState } from "react";
import Inputbox from "../Inputbox";
import Button from "../Button";
import Title from "../Title";
import { Link } from "react-router-dom";
import { details } from "../../constants/constant";

function Login() {
  const [initialEntry, setInitialEntry] = useState({
    emailAdd: "",
    password: "",
  });

  const [inputErrors, setInputErrors] = useState({
    emailAdd: "",
    password: "",
  });

  const userDetails = details;
  const [errorWhileLogin, setErrorWhileLogin] = useState("");

  return (
    <div className="text-gray-900 text-center">
      <Title title="Login" />
      <Link to="/signup">
        <span className="text-sm text-indigo-400 hover:underline">click here to create an account!</span>
      </Link>
      <form
        method="post"
        onSubmit={(event) => {
          event.preventDefault();
          if (userDetails) {
            let flag = false;
            for (var i = 0; i < userDetails.length; ++i) {
              if (
                userDetails[i].emailAdd === initialEntry.emailAdd &&
                userDetails[i].password === initialEntry.password
              ) {
                flag = true;
                break;
              }
            }
            if(flag) {
              localStorage.setItem("loggedInUser", JSON.stringify(i));
              window.location.href = '/dashboard';
            } else {
              setErrorWhileLogin("Oops! Could not find the user");
            }
            // userDetails.forEach((item, index) => {
              
            // });
          } else {
            setErrorWhileLogin("Oops! Could not find the user");
          }
        }}
      >
        <Inputbox
          errorMessage={inputErrors.emailAdd}
          value={initialEntry.emailAdd}
          onChange={(e) => {
            setInitialEntry({ ...initialEntry, emailAdd: e.target.value });
            const emailRegex =
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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
          value={initialEntry.password}
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
        <Button btn="Login" type="submit" className="max-w-max" />
      </form>
      <p className="text-2xl font-semibold text-red-700 mt-14">{errorWhileLogin}</p>
    </div>
  );
}

export default Login;
