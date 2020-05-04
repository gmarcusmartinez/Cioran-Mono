import React from 'react';

import SideBar from '../../common/SideBar';
import SprintItem from '../SprintItem/SprintItem';
import { Sprint } from '../../../store/actions/';

interface SprintSideBarProps {
  sprintArr: Sprint[];
  setSelectedSprint: Function;
}

const SprintSideBar: React.FC<SprintSideBarProps> = ({
  sprintArr,
  setSelectedSprint,
}) => {
  let list = sprintArr
    ? sprintArr.map((s) => (
        <SprintItem
          key={s._id}
          item={s}
          setSelectedSprint={setSelectedSprint}
        />
      ))
    : null;

  return (
    <SideBar width={220} bg={'$color-white'} boxShadow='1px 1px  #c3c3c3'>
      <h2>Sprints</h2>
      {list}
    </SideBar>
  );
};

export default SprintSideBar;
