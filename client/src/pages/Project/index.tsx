import React from 'react';
import { connect } from 'react-redux';

import SprintQue from 'components/Sprint/SprintQue';
import SprintSideBar from 'components/Sprint/SprintSideBar';
import SprintConsole from 'components/Sprint/SprintConsole';
import { getProject, IProject } from 'store/actions';

interface IProps {
  getProject: Function;
  match: { params: { id: string } };
  project: IProject;
}

const Project: React.FC<IProps> = ({ getProject, match, project }) => {
  React.useEffect(() => {
    getProject(match.params.id);
  }, [getProject, match.params.id]);

  if (!project) return <>Loading</>;
  return (
    <div className='project-wrapper'>
      <SprintSideBar sprintArr={project.sprints} />
      <div className='sprint-wrapper'>
        <div className='project-team-section'>{project.title}</div>
        <SprintConsole />
        <SprintQue />
      </div>
    </div>
  );
};

interface IState {
  projects: { project: IProject };
}
const mapStateToProps = (state: IState) => ({
  project: state.projects.project,
});

export default connect(mapStateToProps, { getProject })(Project);
