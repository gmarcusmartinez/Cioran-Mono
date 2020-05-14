import React from 'react';
import axios from 'axios';

interface SignupFormProps {
  setFormDisplay: Function;
}
interface SignupFormState {
  name: string;
  email: string;
  password: string;
}
const Signup: React.FunctionComponent<SignupFormProps> = ({
  setFormDisplay,
}) => {
  const [formData, setFormData] = React.useState<SignupFormState>({
    name: '',
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
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post('/api/auth/signup', formData, config);

    console.log(response.data);
    setFormData({ name: '', email: '', password: '' });
  };
  const { name, email, password } = formData;

  return (
    <form className='signup' onSubmit={handleSubmit}>
      <h2 className='signup__title'>Create Your Account</h2>
      <input
        placeholder='Name'
        type='text'
        className='auth-input'
        name='name'
        value={name}
        onChange={handleChange}
      />
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
      <button className='signup-btn btn-primary'>Get Started!</button>
      <div className='switch'>
        Already have an account?
        <span onClick={() => setFormDisplay('RENDER_LOGIN')}>Signin</span>
      </div>
    </form>
  );
};

export default Signup;
