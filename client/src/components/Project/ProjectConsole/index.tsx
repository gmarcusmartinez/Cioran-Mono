import React from 'react';
import { connect } from 'react-redux';
import Modal from '../../common/Modal';
import ProjectItem from '../ProjectItem';
import CreateProjectForm from '../../Forms/CreateProjectForm';
import { IProject, getCurrentUser, getProjects } from '../../../store/actions';

interface IProps {
  projects: IProject[] | null;
  getProjects: Function;
}

const ProjectConsole: React.FC<IProps> = ({ projects, getProjects }) => {
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
        <CreateProjectForm setDisplayModal={setDisplayModal} />
      </Modal>
    ) : null;
  };

  const renderBtn = () => {
    return (
      <div
        className='create-project-btn project-item'
        onClick={() => setDisplayModal(true)}
      >
        Create Project
      </div>
    );
  };

  return (
    <div className='project-console'>
      <div className='project-console__title'>My Projects</div>
      <div className='polygon-border'></div>
      <div className='project-list'>
        {renderBtn()}
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

export default connect(mapStateToProps, { getCurrentUser, getProjects })(
  ProjectConsole
);
