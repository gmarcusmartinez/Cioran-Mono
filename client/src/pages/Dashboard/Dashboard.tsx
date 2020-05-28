import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MyQue from '../../components/MyQue';
import DashboardSideBar from '../../components/Dashboard/DashboardSideBar';
import ProjectConsole from '../../components/Project/ProjectConsole/ProjectConsole';

const Dashboard = () => {
  return (
    <div className='dashboard-wrapper'>
      <DashboardSideBar />
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
