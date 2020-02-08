import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Sidebar = ({ links }) => {
  const lis = links.map(link => {
    return (
      <li key={link.to}>
        <i className={link.icon}></i>
        <Link to={link.to}>{link.text}</Link>
      </li>
    );
  });

  return (
    <div data-test="component-sidebar" className="sidebar">
      <h2 data-test="sidebar-title">Cioran</h2>
      <ul>{lis}</ul>
    </div>
  );
};
Sidebar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  ).isRequired
};
export default Sidebar;

{
  /* <li>
<i class="fas fa-cog"></i>
<a href="#">Settings</a>
</li> */
}
