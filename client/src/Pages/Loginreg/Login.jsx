import React, { useEffect, useState } from 'react';
import './Login.css';
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [location, setLocation] = useState(null);
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    city: undefined,
    country: undefined,
    phone: undefined,
    password: undefined,
    Profession: "user"
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick1 = (e) => {
    e.preventDefault();
    register(dispatch, credentials)
  };

  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  const [containerClass, setContainerClass] = useState('');

  const handleRegisterClick = () => {
    setContainerClass('active');
  };

  const handleLoginClick = () => {
    setContainerClass('close');
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (location) {
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${location.lat}&lon=${location.lng}&format=jsonv2`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.address.city) {
            credentials.city = data.address.city;
            credentials.country = data.address.country;
          } else if (data.address.town) {
            credentials.city = data.address.town;
            credentials.country = data.address.country;
          } else if (data.address.village) {
            credentials.city = data.address.village;
            credentials.country = data.address.country;
          } else if (data.address.county) {
            credentials.city = data.address.county;
            credentials.country = data.address.country;
          } else {
            credentials.city = data.display_name;
            credentials.country = data.address.country;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [location]);
  return (
    <>
      <div id="LoginReg" className={containerClass}>
        <div className="Login">
          <div className="content">
            <h1>Log In</h1>
            <label className="inp" for="inp">
              <input placeholder="" id="inp" type="text" onChange={(e) => setUsername(e.target.value)} />
              <span className="label">Name</span>
              <span className="focus-bg"></span>
            </label>
            <label className="inp" for="inp">
              <input placeholder="" id="inp" type="password" onChange={(e) => setPassword(e.target.value)} />
              <span className="label">Password</span>
              <span className="focus-bg"></span>
            </label>
            <button disabled={isFetching} className="LoginBtn" role="button" onClick={handleClick}>Sign In</button>
            {error && <span>Something went wrong...</span>}
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
            <button type="" id="login" onClick={handleLoginClick}>
              Log In
            </button>
          </div>
        </div>

        <div className="Register">
          <div className="content">
            <h1>Sign Up</h1>
            <label className="inp" for="inp">
              <input placeholder="" id="inp" type="email" onChange={handleChange} />
              <span className="label">Email</span>
              <span className="focus-bg"></span>
            </label>
            <label className="inp" for="inp">
              <input placeholder="" id="inp" type="text" onChange={handleChange} />
              <span className="label">Name</span>
              <span className="focus-bg"></span>
            </label>
            <label className="inp" for="inp">
              <input placeholder="" id="inp" type="number" onChange={handleChange} />
              <span className="label">Phone Number</span>
              <span className="focus-bg"></span>
            </label>
            <label className="inp" for="inp">
              <input placeholder="" id="inp" type="password" onChange={handleChange} />
              <span className="label">Password</span>
              <span className="focus-bg"></span>
            </label>
            <button className="LoginBtn" role="button" onChange={handleClick1}>Sign Up</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login