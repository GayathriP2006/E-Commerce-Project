import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">

        <h1>ShopEase</h1>
        <h2>Welcome Back</h2>

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <p>
          New User? <Link to="/register">Create Account</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;