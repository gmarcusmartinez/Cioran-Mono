import React from 'react';
import { connect } from 'react-redux';

import ProjectItem from '../ProjectItem/ProjectItem';
import CreateProjectBtn from '../CreateProjectBtn/CreateProjectBtn';
import CreateProjectForm from '../CreateProjectForm/CreateProjectForm';
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
      {showAddProject ? <CreateProjectForm /> : null}
      <CreateProjectBtn />
      {list}
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  projects: state.projects,
});

export default connect(mapStateToProps, { fetchProjects })(ProjectConsole);
