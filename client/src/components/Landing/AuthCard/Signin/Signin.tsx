import React from 'react';
import GoogleIcon from '../../../common/GoogleIcon';

interface SigninFormProps {
  setFormDisplay: Function;
}

const Signin: React.FunctionComponent<SigninFormProps> = ({
  setFormDisplay,
}) => {
  return (
    <div className='signin'>
      <h2 className='signin__title'>Signin to your account</h2>
      <button className='oauth-btn'>
        <span>
          <GoogleIcon />
        </span>
        Signin with Google
      </button>
      <div className='or-hr'>
        <hr />
        <span>or</span>
        <hr />
      </div>
      <input type='email' className='auth-input' placeholder='Email' />
      <input type='password' className='auth-input' placeholder='Password' />
      <button className='app-theme-btn'>Signin</button>
      <div className='switch'>
        Dont have an account?
        <span onClick={() => setFormDisplay('RENDER_DEFAULT')}>Signup</span>
      </div>
    </div>
  );
};

export default Signin;
