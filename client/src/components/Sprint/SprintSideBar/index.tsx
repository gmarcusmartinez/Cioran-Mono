import React from 'react';

import { ISprint } from 'store/actions';
import Modal from '../../common/Modal';
import SprintItem from '../SprintItem/SprintItem';
import CreateSprintForm from '../../Forms/CreateSprintForm';

interface IProps {
  sprintArr: ISprint[];
  collapseSideBar: boolean;
  setCollapseSideBar: Function;
}

const SprintSideBar: React.FC<IProps> = ({
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
      {collapseSideBar ? <>&#9664;</> : <>&#9664;</>}
    </div>
  );

  return (
    <div className={`sprint-sidebar ${collapseSideBar ? 'collapsed' : ''}`}>
      {renderCollapseBtn()}
      <div className='sprint-nav'>
        {/* {renderBtn('Create Sprint +')} */}
        {list}
      </div>
      {renderModal()}
    </div>
  );
};

export default SprintSideBar;
