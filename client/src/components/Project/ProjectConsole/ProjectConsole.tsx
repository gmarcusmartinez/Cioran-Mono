import React from 'react';
import { connect } from 'react-redux';
import Modal from '../../common/Modal';
import ProjectItem from '../ProjectItem/ProjectItem';
import CreateProjectForm from '../../Forms/CreateProjectForm';
import { IProject, getCurrentUser, getProjects } from '../../../store/actions';

interface ProjectsProps {
  projects: IProject[] | null;
  getProjects: Function;
}

const ProjectConsole: React.FC<ProjectsProps> = ({ projects, getProjects }) => {
  const [displayModal, setDisplayModal] = React.useState(false);

  React.useEffect(() => {
    getCurrentUser();
    getProjects();
  }, [getProjects]);

  let list = projects
    ? projects.map((p: IProject) => <ProjectItem key={p._id} item={p} />)
    : null;

  const renderModal = () => {
    return displayModal ? (
      <Modal showModal={setDisplayModal} title='Create Project'>
        <CreateProjectForm />
      </Modal>
    ) : null;
  };

  const renderBtn = () => {
    return (
      <div className='create-project-btn' onClick={() => setDisplayModal(true)}>
        Create Project
      </div>
    );
  };

  return (
    <div className='project-console'>
      <div className='project-console__title'>My Projects</div>
      <div className='polygon-border-bottom-primary-light'></div>
      <div className='project-list'>
        {renderBtn()}
        {list}
      </div>
      {renderModal()}
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  projects: state.projects?.projects,
});

export default connect(mapStateToProps, { getCurrentUser, getProjects })(
  ProjectConsole
);
