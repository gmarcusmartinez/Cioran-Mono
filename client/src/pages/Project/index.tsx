import React from 'react';
import { connect } from 'react-redux';
import SprintQue from 'components/Sprint/SprintQue';
import SprintConsole from 'components/Sprint/SprintConsole';
import { IProject } from 'interfaces';
import { getProject } from 'store/actions';

interface IProps {
  getProject: Function;
  match: { params: { id: string } };
  project: IProject;
}
const Project: React.FC<IProps> = ({ match, project, getProject }) => {
  React.useEffect(() => {
    getProject(match.params.id);
  }, [getProject, match.params.id]);

  if (!project) return <>Loading</>;
  return (
    <div className='project-wrapper'>
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
