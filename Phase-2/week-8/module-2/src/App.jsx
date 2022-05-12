import React, { useState } from "react";
import Login from "./Login/Login";

export default () => {
  const tokenFromStorage = localStorage.getItem("jwt")
  const [token, setToken] = useState(tokenFromStorage);


  return (
    <div>
      {token ? 
        <h1> Welcome to The App!</h1> 
        : <Login setToken={setToken} />
    }
    </div>
  );
};
