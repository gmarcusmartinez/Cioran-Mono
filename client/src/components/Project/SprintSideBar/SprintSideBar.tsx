import React from 'react';

import './styles.css';
import SideBar from '../../common/SideBar';
import SprintItem from '../SprintItem/SprintItem';
import { Sprint } from '../../../store/actions/';

interface SprintSideBarProps {
  sprintArr: Sprint[];
}

const SprintSideBar: React.FC<SprintSideBarProps> = ({ sprintArr }) => {
  let list = sprintArr
    ? sprintArr.map((s) => <SprintItem key={s._id} item={s} />)
    : null;

  return (
    <SideBar width={240} bg={'#fff'} boxShadow='2px 2px 2px #c3c3c3'>
      <h2>Sprints</h2>
      {list}
    </SideBar>
  );
};

export default SprintSideBar;
