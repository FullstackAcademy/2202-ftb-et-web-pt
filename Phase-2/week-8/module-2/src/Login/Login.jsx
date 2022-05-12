   
import React, { useState } from "react";

const Login = ({ setToken }) => {
  //form state
  const [userName, setUserName] = useState("your username");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Implement Login")        
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
      
    </form>
  );
};

export default Login;
