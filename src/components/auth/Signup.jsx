import React from 'react';
import bgimg from '';

function Signup() {
  return (
    <div className='text-gray-800 flex'>

        <div className='flex sm:w-1/2 sm:max-h-screen'>
            <img src="" alt="" />
        </div>

        <div className='text-teal-800 p-8 font-semibold w-1/2'>

            <div className='font-extrabold text-2xl p-6 underline'>
                Sign Up
            </div>

            <div className='p-3 mb-2 rounded-full shadow-lg hover:bg-white'>
                First Name :
                <input type="text" placeholder=' Type here' name='firstName'/>
            </div>

            <div className='p-3 mb-2 rounded-full shadow-lg hover:bg-white'>
                Last Name :
                <input type="text" placeholder=' Type here' name='lastName'/>
            </div>

            <div className='p-3 mb-2 rounded-full shadow-lg hover:bg-white'>
                E-mail Address : 
                <input type="text" placeholder=" Type here" name='email'/>
            </div>

            <div className='p-3 mb-4 rounded-full shadow-lg hover:bg-white'>
                Password : 
                <input type="password" placeholder=" Type here" name='pass'/>
            </div>

            <div className='bg-teal-600 shadow-lg rounded-full text-center font-bold text-white p-2 mb-2 hover:bg-teal-700' >
                <button>SIGN UP</button>
            </div>
           

        </div>

    </div>

  );
}

export default Signup;
