import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>🛒 ShopEase</h1>
        <h2>Register</h2>

        <input
          type="text"
          placeholder="Enter Name"
        />

        <input
          type="email"
          placeholder="Enter Email"
        />

        <input
          type="password"
          placeholder="Enter Password"
        />

        <button>Register</button>

        <p>
          Already have an account?{" "}
          <Link to="/">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;