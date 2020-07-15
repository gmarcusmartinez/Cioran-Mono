import React from 'react';
import { ISprint } from 'store/actions';
import CustomBtn from 'components/common/CustomBtn';
import CreateSprintForm from 'components/Forms/CreateSprintForm';
import SprintItem from 'components/Sprint/SprintItem';
import Modal from 'components/common/Modal';

interface IProps {
  sprintArr: ISprint[];
}

const SprintSideBar: React.FC<IProps> = ({ sprintArr }) => {
  const [displayModal, setDisplayModal] = React.useState(false);
  const [collapseSideBar, setCollapseSideBar] = React.useState(false);

  let sprints = null;
  if (sprintArr)
    sprints = sprintArr.map((s) => <SprintItem key={s._id} item={s} />);

  const renderModal = () => {
    return displayModal ? (
      <Modal title='Create Sprint' showModal={setDisplayModal}>
        <CreateSprintForm />
      </Modal>
    ) : null;
  };

  return (
    <div className={`sprint-sidebar ${collapseSideBar ? 'collapsed' : ''}`}>
      <CustomBtn
        text={`${collapseSideBar ? 'right' : 'left'}`}
        cb={() => setCollapseSideBar(!collapseSideBar)}
        className='collapse-btn'
      />
      <CustomBtn
        text='Create Sprint'
        cb={() => setDisplayModal(true)}
        className='create-sprint-btn'
      />
      {sprints}
      {renderModal()}
    </div>
  );
};

export default SprintSideBar;
