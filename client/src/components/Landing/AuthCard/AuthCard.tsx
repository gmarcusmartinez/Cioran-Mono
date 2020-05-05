import React from 'react';
import { Link } from 'react-router-dom';
import Default from './Default/Default';
import Signup from './Signup/Signup';
import Signin from './Signin/Signin';

const AuthCard: React.FunctionComponent = () => {
  const [formDisplay, setFormDisplay] = React.useState('RENDER_DEFAULT');
  const renderContent = () => {
    switch (formDisplay) {
      case 'RENDER_DEFAULT':
        return <Default setFormDisplay={setFormDisplay} />;
      case 'RENDER_LOGIN':
        return <Signin setFormDisplay={setFormDisplay} />;
      case 'RENDER_SIGNUP':
        return <Signup setFormDisplay={setFormDisplay} />;
    }
  };

  return <div className='auth-card'>{renderContent()}</div>;
};

export default AuthCard;
