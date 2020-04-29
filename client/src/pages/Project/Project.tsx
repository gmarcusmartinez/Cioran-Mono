import React from 'react';
import './styles.css';
import Sidebar from '../../components/common/SideBar';
import SprintSideBar from '../../components/Project/SprintSideBar/SprintSideBar';

const Project = () => {
  return (
    <div className='projects-wrapper'>
      <Sidebar width={100} bg={'#66b2b2'} />
      <SprintSideBar />
      <div className='sprint-content'></div>
    </div>
  );
};

export default Project;
