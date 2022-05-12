import React, { useState } from "react";
import Login from "./Login/Login";

export default () => {
  const [token, setToken] = useState("a");
  return (
    <div>
      {token ? 
        <h1> Welcome to The App!</h1> 
        : <Login setToken={setToken} />
    }
    </div>
  );
};
