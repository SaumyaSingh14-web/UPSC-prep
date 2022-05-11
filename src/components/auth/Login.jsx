import React from 'react';

function Login() {
  return (
    <div className='text-gray-800'>

        <div>
            <img src="" alt="" />
        </div>

        <div className='p-10'>

            <div className='font-bold text-2xl p-6'>
                Login
            </div>

            <div className='p-2'>
                First Name :
                <input type="text" placeholder=' Type here' name='firstName'/>
            </div>

            <div className='p-2'>
                Last Name :
                <input type="text" placeholder=' Type here' name='lastName'/>
            </div>

            <div className='p-2'>
                E-mail Address : 
                <input type="text" placeholder=" Type here" name='email'/>
            </div>

            <div className='p-2'>
                Password : 
                <input type="password" placeholder=" Type here" name='pass'/>
            </div>

            <div className='bg-teal-600 shadow-sm rounded-full font-bold text-center'>
                <button>Login</button>
            </div>

        </div>

    </div>

  );
}

export default Login;
