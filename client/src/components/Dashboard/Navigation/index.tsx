import React from 'react';
import { connect } from 'react-redux';
import { signout } from 'store/actions';
import { navLinks } from '../Links';
import MobileNavigation from '../MobileNavigation';
import { IState } from 'interfaces/state';
import { selectName } from 'store/selectors/auth';

interface IProps {
  signout: Function;
  name: string;
}

const DashboardNav: React.FC<IProps> = ({ signout, name }) => {
  return (
    <>
      <div className='dashboard-nav'>
        <div className='dashboard-nav__usr-img'></div>
        <div className='dashboard-nav__usr-name'>{name}</div>
        {navLinks}
        <button className='dashboard-nav-link' onClick={() => signout()}>
          <div className='dashboard-nav-link__text'>Signout</div>
        </button>
        <MobileNavigation />
      </div>
    </>
  );
};

const mapStateToProps = (state: IState) => ({
  name: selectName(state),
});

export default connect(mapStateToProps, { signout })(DashboardNav);
