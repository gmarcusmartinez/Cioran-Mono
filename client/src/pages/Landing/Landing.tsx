import React from 'react';
import { Redirect } from 'react-router-dom';
import AuthCard from '../../components/AuthCard';
import { ICurrentUser } from '../../store/actions';
import Alert from '../../components/common/Alert/Alert';

interface LandingProps {
  user: ICurrentUser;
}

const Landing: React.FC<LandingProps> = ({ user }) => {
  return (
    <>
      {user ? (
        <Redirect to='/dashboard' />
      ) : (
        <div className='landing'>
          <div className='landing__hero'>
            <div className='hero__header'></div>
            <div className='hero__display'>
              <h1 className='app-logo'>Cioran</h1>
              <p className='hero__slogan'>
                Plan, track, and manage your agile and software development
                projects in Cioran. Customize your workflow, collaborate, and
                release great software.
              </p>
            </div>
            <div className='hero__auth'>
              <Alert />
              <AuthCard />
            </div>
          </div>
          <section className='landing__about'></section>
        </div>
      )}
    </>
  );
};

export default Landing;
