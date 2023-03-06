import React, { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log("object");

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
              <button onClick={() => setIsLogin(!isLogin)}>Go to Login</button>
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
              <button onClick={() => setIsLogin(!isLogin)}>
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
