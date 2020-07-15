import React from 'react';
import { connect } from 'react-redux';

import Modal from '../../common/Modal';
import ProjectItem from '../ProjectItem';
import CustomBtn from 'components/common/CustomBtn';
import CreateProjectForm from '../../Forms/CreateProjectForm';
import { IProject, getProjects } from 'store/actions';

interface IProps {
  projects: IProject[] | null;
  getProjects: Function;
}

const ProjectConsole: React.FC<IProps> = ({ projects, getProjects }) => {
  const [displayModal, setDisplayModal] = React.useState(false);

  React.useEffect(() => {
    getProjects();
  }, [getProjects]);

  let list = projects
    ? projects.map((p: IProject) => <ProjectItem key={p._id} item={p} />)
    : null;

  const renderModal = () => {
    return displayModal ? (
      <Modal showModal={setDisplayModal} title='Create Project'>
        <CreateProjectForm setDisplayModal={setDisplayModal} />
      </Modal>
    ) : null;
  };

  return (
    <div className='project-console'>
      <div className='project-console__title'>My Projects</div>
      <div className='polygon-border'></div>
      <div className='project-list'>
        <CustomBtn
          text='Create Project'
          cb={() => setDisplayModal(true)}
          className='create-project-btn project-item'
        />
        {list}
      </div>
      {renderModal()}
    </div>
  );
};

interface IState {
  projects: { projects: IProject[] };
}
const mapStateToProps = (state: IState) => ({
  projects: state.projects?.projects,
});

export default connect(mapStateToProps, { getProjects })(ProjectConsole);
