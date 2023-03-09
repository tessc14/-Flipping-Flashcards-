import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../contexts";
import "./login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const { setUser, user } = useAuth();

  const getPayload = () => {
    const token = window.localStorage.getItem("token");
    if (!token) return false;
    const parts = token.split(".");
    if (parts.length < 3) return false;
    return JSON.parse(atob(parts[1]));
  };

  let userId = getPayload().userId;
  setUser(userId);
  console.log({ user });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin) {
      console.log("Login");
      // send login info to server
      fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          password: password,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const token = data.token;
          localStorage.setItem("token", token);
          console.log(token);
          let userId = getPayload().userId;
          setUser(userId);
          console.log(userId);
          setTimeout(() => {
            navigate("/");
          }, 200);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (isLogin) {
      if (userName.length == 0 || password !== confirmPassword) {
        console.log("Invalid properties");
      } else {
        console.log("Register");
        // send registration info to server
        axios
          .post("/users/register", {
            username: userName,
            password: password,
          })
          .then((response) => {
            console.log(response.data);
            toggleLogin();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  const toggleLogin = () => {
    setUserName("");
    setPassword("");
    setIsLogin(!isLogin);
  };

  return (
    <>
      <div className="loginWrapper">
        {isLogin ? (
          <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit} id='register-form'>
              <label htmlFor="userName">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button aria-label="register" className="register-button" type="submit">
                Register
              </button>
              <button aria-label="login" className="toggle-button" onClick={() => toggleLogin()}>
                Go to Login
              </button>
            </form>
          </>
        ) : (
          <>
            <h1 className="login-title">Login</h1>
            <form onSubmit={handleSubmit} id='login-form'>
              <label htmlFor="userName">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
              <button className="toggle-button" onClick={() => toggleLogin()}>
                Go to Register
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
