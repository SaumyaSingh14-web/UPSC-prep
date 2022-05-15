import React from 'react';
import Title from './Title';
import Inputbox from './Inputbox';
import Button from './Button';
//import bgimg from '.';

function Signup() {
  return (
    <div>

        {/* <div className='flex sm:w-1/2 sm:max-h-screen'>
            <img src="" alt="" />
        </div> */}

        <div className='text-center text-gray-900 m-2 sm:m-25'>
            <Title title = "Sign Up"/>
            <Inputbox inputBox = "First Name"/>
            <Button btn = "Sign Up"/>

        </div>

    </div>

  );
}

export default Signup;