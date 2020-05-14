import React from 'react';
import axios from 'axios';
import AuthCard from '../../components/Landing/AuthCard/AuthCard';

const Landing = () => {
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
          <AuthCard />
        </div>
      </div>
      <section className='landing__about'></section>
    </div>
  );
};

export default Landing;
