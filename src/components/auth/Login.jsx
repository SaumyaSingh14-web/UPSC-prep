import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "717571065768-cso7ati6hjmd28hv69brkvlqn5de1mo2.apps.googleusercontent.com";

function Login() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onLogoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Log in with Google "
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isLoggedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={onLogoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
    );
}
export default Login;