import React from "react";

import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const Landing = () => {
  const [displaySignup, setDisplaySignup] = React.useState(false);

  return (
    <div className="landing" data-test="app-landing">
      <div className="landing-display" data-test="app-landing-display"></div>
      <div className="auth" data-test="app-auth-section">
        <button
          data-test="signup-btn"
          className="signup-btn"
          onClick={() => setDisplaySignup(!displaySignup)}
        >
          Signup
        </button>
        {displaySignup ? <Signup /> : <Login />}
      </div>
    </div>
  );
};

export default Landing;
