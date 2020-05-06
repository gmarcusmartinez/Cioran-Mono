import React from 'react';
import { NavLink } from 'react-router-dom';

interface IDashNavLink {
  text: string;
  to: string;
}
interface DashSideBarProps {
  links: IDashNavLink[];
}

const DashSideBar: React.FC<DashSideBarProps> = ({ links }) => {
  let list = links.map((l) => (
    <NavLink to={l.to} className='dashboard-nav-link'>
      <div className='dashboard-nav-link__text'>{l.text}</div>
    </NavLink>
  ));
  return <div className='dashboard-sidebar'>{list}</div>;
};

export default DashSideBar;
