import React from 'react';
import { connect } from 'react-redux';
import { signout, ICurrentUser } from '../../../store/actions';
import { navLinks } from '../NavLinks';
import DashboardMobileNav from '../DashboardMobileNav';

interface IProps {
  signout: Function;
  currentUser: ICurrentUser;
}

const DashboardNav: React.FC<IProps> = ({ signout, currentUser }) => {
  return (
    <>
      <div className='dashboard-nav'>
        <div className='dashboard-nav__usr-img'></div>
        <div className='dashboard-nav__usr-name'>{currentUser?.name}</div>
        {navLinks}
        <button className='dashboard-nav-link' onClick={() => signout()}>
          <div className='dashboard-nav-link__text'>Signout</div>
        </button>
        <DashboardMobileNav />
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps, { signout })(DashboardNav);
