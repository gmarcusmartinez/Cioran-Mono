import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Sidebar = ({ links }) => {
  const [displaySidebar, setDisplaySidebar] = React.useState(true);

  const lis = links.map(link => {
    return (
      <li key={link.text}>
        <i className={link.icon}></i>
        <NavLink to={link.to}>{link.text}</NavLink>
      </li>
    );
  });

  return (
    <div
      data-test="component-sidebar"
      className={displaySidebar ? "sidebar-open" : "sidebar-close"}
    >
      <h2 data-test="sidebar-title">Cioran</h2>
      <button
        data-test="display-sidebar"
        className="display-sidebar"
        onClick={() => setDisplaySidebar(!displaySidebar)}
      >
        <i
          className={`fas fa-chevron-${displaySidebar ? "left" : "right"}`}
        ></i>
      </button>
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
