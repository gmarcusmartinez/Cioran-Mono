import React from 'react';
import { connect } from 'react-redux';

import SprintQue from '../../components/Project/SprintQue/SprintQue';
import SprintSideBar from '../../components/Project/SprintSideBar/SprintSideBar';
import SprintConsole from '../../components/Project/SprintConsole/SprintConsole';

import { getProject, IProject } from '../../store/actions';

interface ProjectProps {
  getProject: Function;
  match: {
    params: {
      id: string;
    };
  };
  project: IProject;
}

const Project: React.FC<ProjectProps> = ({ getProject, match, project }) => {
  const projectId = match.params.id;
  React.useEffect(() => {
    getProject(projectId);
  }, [getProject, projectId]);

  return (
    <div className='projects-wrapper'>
      <SprintSideBar sprintArr={project?.sprints} />
      <div className='sprint-wrapper'>
        <div className='project-team-section'>{project?.title}</div>
        <SprintConsole />
        <SprintQue />
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  project: state.projects.project,
});

export default connect(mapStateToProps, { getProject })(Project);
