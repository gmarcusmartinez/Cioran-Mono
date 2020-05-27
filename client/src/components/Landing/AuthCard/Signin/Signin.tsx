import React from 'react';
import GoogleBtn from '../../../common/GoogleBtn/GoogleBtn';

import { connect } from 'react-redux';
import { signin, ISigninForm, setAlert } from '../../../../store/actions';

interface SigninProps {
  setFormDisplay: Function;
  signin: Function;
  setAlert: Function;
}

const Signin: React.FunctionComponent<SigninProps> = ({
  setFormDisplay,
  signin,
}) => {
  const [formData, setFormData] = React.useState<ISigninForm>({
    email: '',
    password: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signin(formData);
    setFormData({ email: '', password: '' });
  };
  const { email, password } = formData;

  return (
    <form className='signin' onSubmit={handleSubmit}>
      <h2 className='signin__title'>Signin to your account</h2>
      <GoogleBtn title='Signin' />
      <div className='or-hr'>
        <hr />
        <span>or</span>
        <hr />
      </div>
      <input
        placeholder='Email'
        type='text'
        className='auth-input'
        name='email'
        value={email}
        onChange={handleChange}
      />
      <input
        placeholder='Password'
        type='password'
        className='auth-input'
        name='password'
        value={password}
        onChange={handleChange}
      />
      <button className='signin-btn btn-primary'>Signin</button>
      <div className='switch'>
        Dont have an account?
        <span onClick={() => setFormDisplay('RENDER_DEFAULT')}>Signup</span>
      </div>
    </form>
  );
};

export default connect(null, { signin, setAlert })(Signin);
