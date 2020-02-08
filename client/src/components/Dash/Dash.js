import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const Dash = () => {
  const links = [
    {
      text: "Projects",
      to: "/projects",
      icon: "far fa-folder"
    },
    {
      text: "My Queue",
      to: "/queue",
      icon: "far fa-list-alt"
    },
    {
      text: "Friends",
      to: "/friends",
      icon: "fas fa-user-friends"
    },
    {
      text: "Settings",
      to: "/settings",
      icon: "far fa-envelope"
    }
  ];

  return (
    <div data-test="component-dashboard" className="component-dashboard">
      <div data-test="sidebar-section" className="sidebar-section">
        <Sidebar links={links} />
      </div>
      <div data-test="content-section"></div>
    </div>
  );
};

export default Dash;
