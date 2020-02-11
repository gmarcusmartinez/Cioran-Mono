import React from "react";

const Signup = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };
  const { email, password, confirmPassword } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div data-test="component-signup" className="signup">
      <h3>Create your account</h3>
      <form onSubmit={e => onSubmit(e)}>
        <div className="input-field">
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            data-test="email-input"
          />
          <label>Email</label>
        </div>
        <div className="input-field">
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            data-test="password-input"
          />
          <label>Password</label>
        </div>
        <div className="input-field">
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={e => onChange(e)}
            data-test="confirm-password-input"
          />
          <label>Confrim Password</label>
        </div>
        <input type="submit" value="Signup" className="auth-btn" />
      </form>
    </div>
  );
};

export default Signup;
