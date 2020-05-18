import React from 'react';
import { connect } from 'react-redux';

import Alert from '../../components/common/Alert/Alert';
import AuthCard from '../../components/Landing/AuthCard';

interface LandingProps {
  getCurrentUser: Function;
}
const Landing: React.FC<LandingProps> = () => {
  return (
    <div className='landing'>
      <div className='landing__hero'>
        <div className='hero__header'></div>
        <div className='hero__display'>
          <h1 className='app-logo'>Cioran</h1>
          <p className='hero__slogan'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            fugit aperiam earum explicabo porro nam temporibus sed dicta
            deleniti dolorem?
          </p>
        </div>
        <div className='hero__auth'>
          <Alert />
          <AuthCard />
        </div>
      </div>
      <section className='landing__about'></section>
    </div>
  );
};

export default connect(null, {})(Landing);
