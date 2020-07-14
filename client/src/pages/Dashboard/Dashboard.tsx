import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MyQue from '../../components/MyQueue';
import DashboardNav from '../../components/Dashboard/DashboardNav';
import ProjectConsole from '../../components/Project/ProjectConsole';

const Dashboard = () => {
  return (
    <div className='dashboard-wrapper'>
      <DashboardNav />
      <div className='content'>
        <Switch>
          <Route exact path='/dashboard/projects' component={ProjectConsole} />
          <Route exact path='/dashboard/que' component={MyQue} />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
