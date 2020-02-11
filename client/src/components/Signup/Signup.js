import React from "react";

const Signup = () => {
  return (
    <div data-test="component-signup" className="signup">
      <h3>Get Started</h3>
      <form>
        <div className="input-field">
          <input type="email" data-test="email-input" />
          <label>Email</label>
        </div>
        <div className="input-field">
          <input type="password" data-test="password-input" />
          <label>Password</label>
        </div>
        <div className="input-field">
          <input type="password" data-test="confirm-password-input" />
          <label>Confrim Password</label>
        </div>
        <input type="submit" value="Signup" className="auth-btn" />
      </form>
    </div>
  );
};

export default Signup;
