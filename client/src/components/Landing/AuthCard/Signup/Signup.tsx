import React from 'react';

interface SignupFormProps {
  setFormDisplay: Function;
}

const Signup: React.FunctionComponent<SignupFormProps> = ({
  setFormDisplay,
}) => {
  return (
    <div className='signup'>
      <h2 className='signup__title'>Create Your Account</h2>
      <input type='text' className='auth-input' placeholder='Name' />
      <input type='email' className='auth-input' placeholder='Email' />
      <input type='password' className='auth-input' placeholder='Password' />
      <button className='app-theme-btn'>Get Started!</button>
      <div className='switch'>
        Already signedup?
        <span onClick={() => setFormDisplay('RENDER_LOGIN')}>Login</span>
      </div>
    </div>
  );
};

export default Signup;
