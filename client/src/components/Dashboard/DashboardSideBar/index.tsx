import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signout, ICurrentUser } from '../../../store/actions';

interface IDashNavLink {
  text: string;
  to: string;
}

interface DashboardSidebarProps {
  signout: Function;
  currentUser?: ICurrentUser;
}

const links = [
  {
    text: 'projects',
    to: '/dashboard/',
  },
  {
    text: 'my que',
    to: '/dashboard/que',
  },
  {
    text: 'inbox',
    to: '/dashboard/inbox',
  },
  {
    text: 'settings',
    to: '/dashboard/settings',
  },
];

const list = links.map((l: IDashNavLink) => (
  <NavLink to={l.to} className='dashboard-nav-link' key={l.to}>
    <div className='dashboard-nav-link__text'>{l.text}</div>
  </NavLink>
));

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  signout,
  currentUser,
}) => {
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

export default connect(mapStateToProps, { signout })(DashboardSidebar);
