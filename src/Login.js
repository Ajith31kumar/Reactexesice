import React from 'react';
import ParticlesComponent from './ParticlesComponent';
import './Login.css'; // Assuming you have custom styles for login page

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic
  };

  return (
    <div className="login-container">
      <ParticlesComponent id="tsparticles" />
      <div className="login-form-container">
        <img src="/path/to/your/logo.png" alt="Logo" className="logo" />
        <h2>Sign In</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-person"></i>
              </span>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                id="password"
                required
              />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <button
              type="button"
              className="btn btn-link forgot-password"
              onClick={handleForgotPassword}
            >
              I forgot my password
            </button>
            <button type="submit" className="btn btn-primary">
              Secure Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
