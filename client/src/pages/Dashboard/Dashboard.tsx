import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MyQue from '../../components/MyQue/MyQue';
import DashSideBar from '../../components/Dashboard/DashSideBar/DashSideBar';
import ProjectConsole from '../../components/Dashboard/ProjectConsole/ProjectConsole';

const links = [
  {
    text: 'projects',
    to: '/dashboard/',
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
          <Route exact path='/dashboard/' component={ProjectConsole} />
          <Route exact path='/dashboard/que' component={MyQue} />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
