import React from "react";

const Login = () => {
  return (
    <div data-test="component-login" className="login">
      <h3>Log in to your account</h3>
      <form>
        <div className="input-field">
          <input type="email" data-test="email-input" />
          <label>Email</label>
        </div>
        <div className="input-field">
          <input type="password" data-test="password-input" />
          <label>Password</label>
        </div>
        <input type="submit" value="Login" className="auth-btn" />
      </form>
    </div>
  );
};
export default Login;
