import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setAlert } from "../../store/actions/alert";
import { signup } from "../../store/actions/authActions";

const Signup = ({ setAlert, signup }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAlert("Passwords do not match", "fail");
    } else {
      signup({ name, email, password });
    }
  };
  const { name, email, password, confirmPassword } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div data-test="component-signup" className="signup">
      <h3>Create your account</h3>
      <form onSubmit={e => onSubmit(e)}>
        <div className="input-field">
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => onChange(e)}
            data-test="userName-input"
          />
          <label>Name</label>
        </div>
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

Signup.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired
};

export default connect(null, { setAlert, signup })(Signup);
// export default Signup;
