import React, { useState } from "react";
import "./Home.css";

function LoginForm() {
  const [userId, setUserId] = useState("");
  const [role, setRole] = useState("student");

  const handleLogin = () => {
    if (!userId.trim()) {
      alert("Please enter your User ID");
      return;
    }

    const loginData = { userId: userId.trim(), role };
    localStorage.setItem("loginData", JSON.stringify(loginData));
    alert("Data saved to localStorage!");
  };

  return (
    
    <div className="login-wrapper">
      

      <div className="login-container">
        
        <h2 className="login-heading">Sign In</h2>

        <label htmlFor="userId" className="login-label">
          User ID:
        </label>
        <input
          id="userId"
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="login-input"
          placeholder="Enter your user ID"
        />

        <label htmlFor="role" className="login-label">
          Role:
        </label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="login-select"
        >
          <option value="student">Student</option>
          <option value="staff">Staff</option>
          <option value="guest">Guest</option>
        </select>

        <button onClick={handleLogin} className="login-button">
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginForm;