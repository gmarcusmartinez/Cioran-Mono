import React from 'react';
import { connect } from 'react-redux';

import Modal from '../../common/Modal';
import ProjectItem from '../ProjectItem/ProjectItem';
import CreateProjectBtn from '../CreateProjectBtn/CreateProjectBtn';
import { fetchProjects, Project } from '../../../store/actions/projects';
import CreateProjectForm from '../CreateProjectForm/CreateProjectForm';

interface ProjectsProps {
  fetchProjects: Function;
  projects: {
    loading: boolean;
    count: number;
    pagination: {};
    items: Project[];
  };
}

const ProjectConsole: React.FC<ProjectsProps> = ({
  fetchProjects,
  projects,
}) => {
  const [showCreateProject, setShowCreateProject] = React.useState(false);
  React.useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  let list = projects.items
    ? projects.items.map((p) => <ProjectItem key={p._id} item={p} />)
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
      <div
        className='polygon-border-bottom-primary-light'
        style={{ margin: '2rem 0' }}
      ></div>
      <div className='project-list'>
        <CreateProjectBtn showModal={setShowCreateProject} />
        {list}
      </div>
      {renderModal()}
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  projects: state.projects,
});

export default connect(mapStateToProps, { fetchProjects })(ProjectConsole);
