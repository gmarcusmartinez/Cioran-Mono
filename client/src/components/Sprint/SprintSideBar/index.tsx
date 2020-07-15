import React from 'react';
import { ISprint } from 'store/actions';
import CustomBtn from 'components/common/CustomBtn';
import SprintItem from 'components/Sprint/SprintItem';

interface IProps {
  sprintArr: ISprint[];
}

const SprintSideBar: React.FC<IProps> = ({ sprintArr }) => {
  const [collapseSideBar, setCollapseSideBar] = React.useState(false);

  let sprints = null;
  if (sprintArr)
    sprints = sprintArr.map((s) => <SprintItem key={s._id} item={s} />);

  return (
    <div className={`sprint-sidebar ${collapseSideBar ? 'collapsed' : ''}`}>
      <CustomBtn
        text={`${collapseSideBar ? 'right' : 'left'}`}
        cb={() => setCollapseSideBar(!collapseSideBar)}
        className='collapse-btn'
      />
      {/* <CustomBtn
        text='Create Sprint'
        cb={() => setDisplayModal(true)}
        className='create-sprint-btn'
      /> */}
      {sprints}
    </div>
  );
};

export default SprintSideBar;
