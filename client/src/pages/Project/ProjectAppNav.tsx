import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { id: 1, to: '/dashboard/projects', icon: 'fas fa-tachometer-alt' },
  { id: 2, to: '/dashboard/que', icon: 'fas fa-th-list' },
  { id: 3, to: '/dashboard/inbox', icon: 'far fa-envelope' },
  { id: 4, to: '/dashboard/settings', icon: 'fas fa-cog' },
];
const list = links.map((l: any) => (
  <Link key={l.id} to={l.to} className='app-nav__link'>
    <i className={l.icon}></i>
  </Link>
));

const ProjectAppNav = () => {
  return <div className='app-nav'>{list}</div>;
};

export default ProjectAppNav;
