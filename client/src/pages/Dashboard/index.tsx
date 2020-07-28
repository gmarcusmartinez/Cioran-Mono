import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MyQueue from 'components/MyQueue';
import Navigation from 'components/Dashboard/Navigation';
import ProjectConsole from 'components/Project/ProjectConsole';

const Dashboard = () => {
  return (
    <div className='dashboard-wrapper'>
      <Navigation />
      <div className='content'>
        <Switch>
          <Route exact path='/dashboard' component={ProjectConsole} />
          <Route exact path='/dashboard/queue' component={MyQueue} />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
