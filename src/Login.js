import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const submitForm = (e) => {
    e.preventDefault();
    if (!username && !password) {
      alert("Either Username or Password missing");
      return null;
    }
    localStorage.setItem(
      "userLoginData",
      JSON.stringify({ username, password })
    );
    setUsername("");
    setPassword("");
    history.push("/");
  };
  return (
    <form onSubmit={(e) => submitForm(e)}>
      <h3>Login</h3>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <input type="submit" onClick={(e) => submitForm(e)} />
    </form>
  );
};

export default Login;
