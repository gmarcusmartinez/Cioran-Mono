import React from 'react';
import { NavLink } from 'react-router-dom';

interface IDashNavLink {
  to: string;
  text: string;
}

export const links = [
  {
    text: 'projects',
    to: '/dashboard',
    icon: 'fas fa-tachometer-alt',
  },
  {
    text: 'my queue',
    to: '/dashboard/queue',
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
const activeClassName = 'active';
const className = 'dashboard-nav-link';
const props = { activeClassName, className };

export const navLinks = links.map((l: IDashNavLink) => (
  <NavLink key={l.to} to={l.to} {...props}>
    {l.text}
  </NavLink>
));
