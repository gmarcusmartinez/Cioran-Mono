import React from 'react';
import GoogleIcon from './GoogleIcon';

interface GoogleBtProps {
  title: string;
}
const GoogleBtn: React.FC<GoogleBtProps> = ({ title }) => {
  return (
    <button className='oauth-btn'>
      <span>
        <GoogleIcon />
      </span>
      {title} with Google
    </button>
  );
};

export default GoogleBtn;
