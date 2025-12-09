import React from "react";
import { setToken } from "../utils/token"; 
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const testLogin = () => {
    setToken("access_token", {
      token: "dummy-token-123",
      role: "admin",
    });

    navigate("/admin/users");
  };

  return (
    <div>
      <h1>Test Login</h1>
      <button onClick={testLogin}>Login as Admin (Test)</button>
    </div>
  );
};

export default Login;
