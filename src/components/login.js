import React from 'react';
import '../styles/Login.css';  // Importing the CSS file

function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="text" className="login-input" placeholder="Username" />
      <input type="password" className="login-input" placeholder="Password" />
      <button className="login-button">Login</button>
    </div>
  );
}

export default Login;
