import React from 'react';

import Modal from '../../common/Modal';
import SprintItem from '../SprintItem/SprintItem';
import { ISprint } from '../../../store/actions/';

interface SprintSideBarProps {
  sprintArr: ISprint[];
}

const SprintSideBar: React.FC<SprintSideBarProps> = ({ sprintArr }) => {
  const [showSprintManager, setShowSprintManager] = React.useState(false);

  let list = sprintArr
    ? sprintArr.map((s) => <SprintItem key={s._id} item={s} />)
    : null;

  const renderModal = () => {
    return showSprintManager ? (
      <Modal title='Sprint Manager' showModal={setShowSprintManager} />
    ) : null;
  };
  const renderBtn = () => {
    return (
      <div
        onClick={() => setShowSprintManager(true)}
        className='sprint-nav__btn'
      >
        Sprint Manager +
      </div>
    );
  };

  return (
    <div className='sprint-sidebar'>
      <div className='project-nav'></div>
      <div className='sprint-nav'>
        <h2 className='sprint-nav__title'>Sprints</h2>
        {renderBtn()}
        {list}
        {renderModal()}
      </div>
    </div>
  );
};

export default SprintSideBar;
