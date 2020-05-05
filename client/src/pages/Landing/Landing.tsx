import React from 'react';
import AuthCard from '../../components/Landing/AuthCard/AuthCard';

const Landing = () => {
  return (
    <div className='landing'>
      <div className='landing__hero'>
        <div className='hero__header'></div>
        <div className='hero__display'></div>
        <div className='hero__auth'>
          <AuthCard />
        </div>
      </div>
      <section className='landing__about'></section>
    </div>
  );
};

export default Landing;
