import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signout, ICurrentUser } from '../../../store/actions';

interface IDashNavLink {
  text: string;
  to: string;
}
interface DashSideBarProps {
  links: IDashNavLink[];
  signout: Function;
  currentUser?: ICurrentUser;
}

const DashSideBar: React.FC<DashSideBarProps> = ({
  links,
  signout,
  currentUser,
}) => {
  let list = links.map((l) => (
    <NavLink to={l.to} className='dashboard-nav-link' key={l.to}>
      <div className='dashboard-nav-link__text'>{l.text}</div>
    </NavLink>
  ));
  return (
    <div className='dashboard-sidebar'>
      <div className='dashboard-sidebar__usr-img'></div>
      <div className='dashboard-sidebar__usr-name'>{currentUser?.name}</div>
      {list}
      <button className='dashboard-nav-link' onClick={() => signout()}>
        <div className='dashboard-nav-link__text'>Signout</div>
      </button>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps, { signout })(DashSideBar);
