import React from 'react';
import GoogleBtn from '../../../common/GoogleBtn/GoogleBtn';

interface DefaultFormProps {
  setFormDisplay: Function;
}

const Default: React.FunctionComponent<DefaultFormProps> = ({
  setFormDisplay,
}) => {
  return (
    <div className='default'>
      <div className='auth-title'>Get started for free!</div>
      <GoogleBtn title='Signup' />
      <button
        className='app-theme-btn'
        onClick={() => setFormDisplay('RENDER_SIGNUP')}
      >
        Signup with Email
      </button>
      <div className='switch'>
        Already have an account?
        <span onClick={() => setFormDisplay('RENDER_LOGIN')}>Signin</span>
      </div>
    </div>
  );
};

export default Default;
