import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import ProjectItem from '../ProjectItem/ProjectItem';
import AddProjectForm from '../AddProjectForm/AddProjectForm';
import { fetchProjects, Project } from '../../../store/actions/projects';

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
  const [showAddProject, setShowAddProject] = React.useState(false);

  React.useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  let list = projects.items
    ? projects.items.map((p) => <ProjectItem key={p._id} item={p} />)
    : null;

  return (
    <div className='project-console'>
      <div
        className='add-project-btn'
        onClick={() => setShowAddProject(!showAddProject)}
      >
        <i className={`fas fa-${showAddProject ? 'times' : 'plus'}`}></i>
      </div>
      {showAddProject ? <AddProjectForm /> : null}
      {list}
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  projects: state.projects,
});

export default connect(mapStateToProps, { fetchProjects })(ProjectConsole);
