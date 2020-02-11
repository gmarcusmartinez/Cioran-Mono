import React from "react";

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: ""
  });

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };
  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div data-test="component-login" className="login">
      <h3>Log in to your account</h3>
      <form data-test="login-form" onSubmit={e => onSubmit(e)}>
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
        <input type="submit" value="Login" className="auth-btn" />
      </form>
    </div>
  );
};
export default Login;
