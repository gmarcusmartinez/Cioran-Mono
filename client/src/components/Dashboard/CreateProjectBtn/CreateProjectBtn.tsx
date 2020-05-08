import React from 'react';

interface CreateProjectBtnProps {
  showModal: Function;
}

const CreateProjectBtn: React.FC<CreateProjectBtnProps> = ({ showModal }) => {
  return (
    <div className='create-project-btn' onClick={() => showModal(true)}>
      Create Project
    </div>
  );
};

export default CreateProjectBtn;
