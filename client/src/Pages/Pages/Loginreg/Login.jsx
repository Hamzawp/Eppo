import React, { useState } from 'react';
import './Login.css';
// import User from '../assets/User.jpg';
import { Link } from 'react-router-dom';
const Login = () => {

    const [containerClass, setContainerClass] = useState('');

  const handleRegisterClick = () => {
    setContainerClass('active');
  };

  const handleLoginClick = () => {
    setContainerClass('close');
  };

  return (
    <>
        <div id="LoginReg" className={containerClass}>
            <div className="Login">
                <div className="content">
                    <h1>Log In</h1>
                    <label className="inp" for="inp">
                        <input placeholder="" id="inp" type="text" />
                        <span className="label">Name</span>
                        <span className="focus-bg"></span>
                    </label>
                    <label className="inp" for="inp">
                        <input placeholder="" id="inp" type="password" />
                        <span className="label">Password</span>
                        <span className="focus-bg"></span>
                    </label>
                    <button className="LoginBtn" role="button">Sign In</button>
                </div>
            </div>

            <div class="page front">
        <div class="content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="96"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-user-plus"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <line x1="20" y1="8" x2="20" y2="14" />
            <line x1="23" y1="11" x2="17" y2="11" />
          </svg>
          <h1>Hello, friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <button type="" id="register" onClick={handleRegisterClick}>
            Register
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-arrow-right-circle"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 16 16 12 12 8" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg> */}
          </button>
        </div>
            </div>
            
            <div class="page back">
                <div class="content">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="96"
                    height="96"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-log-in"
                >
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button type="" id="login"  onClick={handleLoginClick}>
                    {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-arrow-left-circle"
                    >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 8 8 12 12 16" />
                    <line x1="16" y1="12" x2="8" y2="12" />
                    </svg> */}
                    Log In
                </button>
                </div>
            </div>

            <div className="Register">
                <div className="content">
                <h1>Sign Up</h1>
                    <label className="inp" for="inp">
                        <input placeholder="" id="inp" type="email" />
                        <span className="label">Email</span>
                        <span className="focus-bg"></span>
                    </label>
                    <label className="inp" for="inp">
                        <input placeholder="" id="inp" type="text" />
                        <span className="label">Name</span>
                        <span className="focus-bg"></span>
                    </label>
                    <label className="inp" for="inp">
                        <input placeholder="" id="inp" type="number" />
                        <span className="label">Phone Number</span>
                        <span className="focus-bg"></span>
                    </label>
                    <label className="inp" for="inp">
                        <input placeholder="" id="inp" type="password" />
                        <span className="label">Password</span>
                        <span className="focus-bg"></span>
                    </label>
                    <button className="LoginBtn" role="button">Sign Up</button>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Login