   
import React, { useState } from "react";
import loginFunc from '../api/login';

const Login = ({ setToken }) => {
  //form state
  const [userName, setUserName] = useState("your username");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        
        e.preventDefault();
        loginFunc(userName, password, setToken); 

      }}
    >
      <div className="mb-3">
        <label className="form-label">
          Username
        </label>
        <input
          type="text"
          value={userName}
          onChange={({target: {value}}) => setUserName(value)}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="your username"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={({target: {value}}) => setPassword(value)}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder=""
        />
      </div>
      <button type="submit"> Login </button>
    </form>
  );
};

export default Login;
