import React from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../Links';

interface ILink {
  text: string;
  to: string;
  icon: string;
}

const MobileNavigation = () => {
  const activeClassName = 'active';
  const className = 'dashboard-mobile-nav__link';
  const props = { className, activeClassName };

  const mobileNavLinks = links.map((l: ILink) => (
    <NavLink key={l.to} to={l.to} {...props}>
      <i className={l.icon}></i>
    </NavLink>
  ));

  return <div className='dashboard-mobile-nav'>{mobileNavLinks}</div>;
};

export default MobileNavigation;
