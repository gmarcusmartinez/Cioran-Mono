import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Route, Switch } from "react-router-dom";

import Projects from "../Projects/Projects";

const Dash = () => {
  const links = [
    {
      text: "Projects",
      to: "/dash/projects",
      icon: "far fa-folder"
    },
    {
      text: "My Queue",
      to: "/dash/queue",
      icon: "far fa-list-alt"
    },
    {
      text: "Friends",
      to: "/dash/friends",
      icon: "fas fa-user-friends"
    },
    {
      text: "Settings",
      to: "/dash/settings",
      icon: "fas fa-cog"
    }
  ];

  return (
    <div data-test="component-dashboard" className="component-dashboard">
      <div data-test="sidebar-section" className="sidebar-section">
        <Sidebar links={links} />
      </div>
      <div data-test="content-section">
        <Switch>
          <Route path="/dash/projects" component={Projects} />
        </Switch>
      </div>
    </div>
  );
};

export default Dash;
