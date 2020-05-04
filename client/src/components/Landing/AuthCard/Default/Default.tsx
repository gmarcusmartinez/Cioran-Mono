import React from 'react';
import GoogleIcon from '../../../common/GoogleIcon';

interface DefaultFormProps {
  setFormDisplay: Function;
}

const Default: React.FunctionComponent<DefaultFormProps> = ({
  setFormDisplay,
}) => {
  return (
    <div className='default'>
      <div className='auth-title'>
        <span>Get started for free!</span>
      </div>
      <button className='oauth-btn'>
        <span>
          <GoogleIcon />
        </span>
        Signup with Google
      </button>
      <button
        className='app-theme-btn'
        onClick={() => setFormDisplay('RENDER_SIGNUP')}
      >
        Signup with email
      </button>
      <div className='switch'>
        Already have an account?
        <span onClick={() => setFormDisplay('RENDER_LOGIN')}>Signin</span>
      </div>
    </div>
  );
};

export default Default;
