import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './styles.css';

import ProjectConsole from '../../components/Dashboard/ProjectConsole/ProjectConsole';
import DashSideBar from '../../components/Dashboard/DashSideBar/DashSideBar';

const Dashboard = () => {
  return (
    <div className='dashboard-wrapper'>
      <DashSideBar />
      <div className='content'>
        <Switch>
          <Route path='/dashboard/projects' component={ProjectConsole} />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
