import React from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../NavLinks';

const DashboardMobileNav: React.FC = () => {
  const mobileNavLinks = links.map((l: any) => (
    <NavLink
      key={l.to}
      to={l.to}
      className='dashboard-mobile-nav__link'
      activeClassName='active'
    >
      <i className={l.icon}></i>
    </NavLink>
  ));

  return <div className='dashboard-mobile-nav'>{mobileNavLinks}</div>;
};

export default DashboardMobileNav;
