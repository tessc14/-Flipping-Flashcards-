import React, { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin) {
      console.log("Login");
    }
    if (isLogin) {
      if (userName.length == 0 || password !== confirmPassword) {
        console.log("Invalid properties");
      } else {
        console.log("Register");
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
      <div>
        {isLogin ? (
          <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
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
              <button type="submit">Register</button>
              <button onClick={() => toggleLogin()}>Go to Login</button>
            </form>
          </>
        ) : (
          <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="userName">UserName</label>
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
              <button onClick={() => toggleLogin()}>Go to Register</button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
