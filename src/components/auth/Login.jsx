import React from 'react';


function Login() {
  return (
    <div className='text-gray-800 flex'>

        {/* <div className='flex sm:w-1/2 sm:max-h-screen'>
            <img src="" alt="" />
        </div> */}

        <div className='text-teal-800 p-8 font-semibold w-1/2'>

            <div className='font-extrabold text-2xl p-6 underline'>
                Login
            </div>

            <div className='p-3 mb-2 rounded-full bg-gray-100 hover:bg-gray-50'>
                E-mail : 
                <input type="text" placeholder=" example123@gmail.com" name='email'/>
            </div>

            <div className='p-3 mb-12 rounded-full bg-gray-100 hover:bg-gray-50'>
                Password : 
                <input type="password" placeholder=" password" name='pass'/>
            </div>

            <div className='bg-teal-600 shadow-lg rounded-full text-center font-bold text-white p-2 mb-2 hover:bg-teal-800' >
                <button>LOGIN</button>
            </div>

        </div>

    </div>

  );
}

export default Login;
