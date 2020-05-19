import React from 'react';
import { connect } from 'react-redux';

import Modal from '../../common/Modal';
import ProjectItem from '../ProjectItem/ProjectItem';
import CreateProjectBtn from '../CreateProjectBtn/CreateProjectBtn';
import { IProject, getCurrentUser } from '../../../store/actions';
import CreateProjectForm from '../CreateProjectForm/CreateProjectForm';

interface ProjectsProps {
  projects: IProject[] | null;
}

const ProjectConsole: React.FC<ProjectsProps> = ({ projects }) => {
  const [showCreateProject, setShowCreateProject] = React.useState(false);
  React.useEffect(() => {
    getCurrentUser();
  }, []);

  let list = projects
    ? projects.map((p: IProject) => <ProjectItem key={p._id} item={p} />)
    : null;

  const renderModal = () => {
    return showCreateProject ? (
      <Modal showModal={setShowCreateProject} title='Create Project'>
        <CreateProjectForm />
      </Modal>
    ) : null;
  };
  return (
    <div className='project-console'>
      <div className='project-console__title'>My Projects</div>
      <div className='polygon-border-bottom-primary-light'></div>
      <div className='project-list'>
        <CreateProjectBtn showModal={setShowCreateProject} />
        {list}
      </div>
      {renderModal()}
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  projects: state.auth.currentUser?.projects,
});

export default connect(mapStateToProps, { getCurrentUser })(ProjectConsole);
