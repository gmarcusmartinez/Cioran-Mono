import React from 'react';
import { NavLink } from 'react-router-dom';

interface IDashNavLink {
  text: string;
  to: string;
}

export const links = [
  {
    text: 'projects',
    to: '/dashboard/projects',
    icon: 'fas fa-tachometer-alt',
  },
  {
    text: 'my que',
    to: '/dashboard/que',
    icon: 'fas fa-th-list',
  },
  {
    text: 'inbox',
    to: '/dashboard/inbox',
    icon: 'far fa-envelope',
  },
  {
    text: 'settings',
    to: '/dashboard/settings',
    icon: 'fas fa-cog',
  },
];

export const navLinks = links.map((l: IDashNavLink) => (
  <NavLink
    to={l.to}
    className='dashboard-nav-link'
    activeClassName='active'
    key={l.to}
  >
    <div className='dashboard-nav-link__text'>{l.text}</div>
  </NavLink>
));
