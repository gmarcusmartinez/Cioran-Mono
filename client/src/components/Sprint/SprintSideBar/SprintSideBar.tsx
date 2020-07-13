import React from 'react';

import Modal from '../../common/Modal';
import SprintItem from '../SprintItem/SprintItem';
import { ISprint } from '../../../store/actions';
import CreateSprintForm from '../../Forms/CreateSprintForm';

interface SprintSideBarProps {
  sprintArr: ISprint[];
  collapseSideBar: boolean;
  setCollapseSideBar: Function;
}

const SprintSideBar: React.FC<SprintSideBarProps> = ({
  sprintArr,
  setCollapseSideBar,
  collapseSideBar,
}) => {
  const [displayModal, setDisplayModal] = React.useState(false);

  let list = sprintArr
    ? sprintArr.map((s) => <SprintItem key={s._id} item={s} />)
    : null;

  const renderModal = () => {
    return displayModal ? (
      <Modal title='Create Sprint' showModal={setDisplayModal}>
        <CreateSprintForm />
      </Modal>
    ) : null;
  };

  const renderBtn = (text: string) => (
    <div onClick={() => setDisplayModal(true)} className='sprint-nav__btn'>
      {text}
    </div>
  );

  const renderCollapseBtn = () => (
    <div
      onClick={() => setCollapseSideBar(!collapseSideBar)}
      className='collapse-btn'
    >
      {collapseSideBar ? <>&rarr;</> : <>&larr;</>}
    </div>
  );

  return (
    <div className={`sprint-sidebar ${collapseSideBar ? 'collapsed' : ''}`}>
      {renderCollapseBtn()}
      <div className='sprint-nav'>
        <h2 className='sprint-nav__title'>Sprints</h2>
        {renderBtn('Create Sprint +')}
        {list}
      </div>
      {renderModal()}
    </div>
  );
};

export default SprintSideBar;
