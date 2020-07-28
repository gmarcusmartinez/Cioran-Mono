import React from 'react';
import { connect } from 'react-redux';
import SprintQue from 'components/Sprint/SprintQue';
import SprintConsole from 'components/Sprint/SprintConsole';
import ProjectNavigation from 'components/Project/ProjectNavigation';
import { IProject } from 'interfaces';
import { IState } from 'interfaces/state';
import { fetchProjectStart } from 'store/actions/projects/fetchProject';
import { selectProject } from 'store/selectors/projects';

interface IProps {
  fetchProjectStart: Function;
  match: { params: { id: string } };
  project: IProject;
}
const Project: React.FC<IProps> = ({ match, project, fetchProjectStart }) => {
  React.useEffect(() => {
    fetchProjectStart(match.params.id);
  }, [fetchProjectStart, match.params.id]);

  if (!project) return <>Loading</>;
  return (
    <div className='project'>
      <ProjectNavigation />
      <div className='sprint-wrapper'>
        <div className='project-team-section'>{project.title}</div>
        <SprintConsole />
        <SprintQue />
      </div>
    </div>
  );
};

const mapStateToProps = (state: IState) => ({
  project: selectProject(state),
});

export default connect(mapStateToProps, { fetchProjectStart })(Project);
