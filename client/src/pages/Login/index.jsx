import React from "react";

const Login = () => {
  const [useName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email", email);
  };

  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

export default Login;
