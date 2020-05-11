import React from 'react';

import Modal from '../../common/Modal';
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
  const [showSprintManager, setShowSprintManager] = React.useState(false);

  let list = sprintArr
    ? sprintArr.map((s) => (
        <SprintItem
          key={s._id}
          item={s}
          setSelectedSprint={setSelectedSprint}
        />
      ))
    : null;

  const renderModal = () => {
    return showSprintManager ? (
      <Modal title='Sprint Manager' showModal={setShowSprintManager} />
    ) : null;
  };

  return (
    <div className='sprint-sidebar'>
      <h2 className='sprint-sidebar__title'>Sprints</h2>
      <div
        onClick={() => setShowSprintManager(true)}
        className='sprint-sidebar__btn'
      >
        Sprint Manager +
      </div>
      {list}
      {renderModal()}
    </div>
  );
};

export default SprintSideBar;
