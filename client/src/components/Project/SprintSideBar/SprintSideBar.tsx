import React from 'react';

import SideBar from '../../common/SideBar';
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
    <SideBar width={220} bg={'$color-white'} boxShadow='1px 1px  #c3c3c3'>
      <h2>Sprints</h2>
      <button
        onClick={() => setShowSprintManager(true)}
        className='btn-primary'
        style={{ width: '90%', marginLeft: '5%' }}
      >
        Sprint Manager
      </button>
      {list}
      {renderModal()}
    </SideBar>
  );
};

export default SprintSideBar;
