import React from 'react';
import { Link } from 'react-router-dom';
export const links = [
  {
    text: 'dashboard',
    to: '/dashboard',
  },
  {
    text: 'my queue',
    to: '/dashboard/queue',
  },
];
const ProjectNavigation = () => {
  const projectNavLinks = links.map((l) => (
    <Link className='project-nav-link' to={l.to} key={l.to}>
      {l.text}
    </Link>
  ));
  return <div className='project-navigation'>{projectNavLinks}</div>;
};

export default ProjectNavigation;
