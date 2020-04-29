import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './styles.css';

import Projects from './Projects/Projects';
import DashSideBar from '../../components/Dashboard/DashSideBar/DashSideBar';

const Dashboard = () => {
  return (
    <div className='dashboard-wrapper'>
      <DashSideBar />
      <div className='content'>
        <Switch>
          <Route path='/dashboard/projects' component={Projects} />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
