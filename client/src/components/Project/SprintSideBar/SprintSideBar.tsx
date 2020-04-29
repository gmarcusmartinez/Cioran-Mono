import React from 'react';

import './styles.css';
import SideBar from '../../common/SideBar';
import SprintItem from '../SprintItem/SprintItem';

const SprintSideBar = () => {
  return (
    <SideBar width={240} bg={'#fff'} boxShadow='2px 2px 2px #c3c3c3'>
      <h2>Sprints</h2>
      <SprintItem />
      <SprintItem />
    </SideBar>
  );
};

export default SprintSideBar;
