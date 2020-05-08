import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DashSideBar from '../../components/Dashboard/DashSideBar/DashSideBar';
import ProjectConsole from '../../components/Dashboard/ProjectConsole/ProjectConsole';

const links = [
  {
    text: 'projects',
    to: '/dashboard/projects',
  },
  {
    text: 'my que',
    to: '/dashboard/que',
  },
  {
    text: 'inbox',
    to: '/dashboard/inbox',
  },
  {
    text: 'settings',
    to: '/dashboard/settings',
  },
];

const Dashboard = () => {
  return (
    <div className='dashboard-wrapper'>
      <DashSideBar links={links} />
      <div className='content'>
        <Switch>
          <Route path='/dashboard/projects' component={ProjectConsole} />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
