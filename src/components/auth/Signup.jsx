import React from "react";
import Title from "./Title";
import Inputbox from "./Inputbox";
import Button from "./Button";
//import bgimg from '.';

function Signup() {
  return (
    <div>
      {/* <div className='flex sm:w-1/2 sm:max-h-screen'>
            <img src="" alt="" />
        </div> */}

      <div className="text-center text-gray-900 m-2 sm:m-25">
        <Title title="Sign Up" />
        <Inputbox
          label="First Name"
          type="text"
          placeholder="Enter your first name"
          name="firstName"
        />
        <Inputbox
          label="Last Name"
          type="text"
          placeholder="Enter your last name"
          name="lastName"
        />
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
        <Button btn="Sign Up" className="max-w-max" />
      </div>
    </div>
  );
}

export default Signup;