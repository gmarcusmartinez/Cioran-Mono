import React from 'react';
import { connect } from 'react-redux';

import SprintQue from 'components/Sprint/SprintQue';
import SprintSideBar from 'components/Sprint/SprintSideBar';
import SprintConsole from 'components/Sprint/SprintConsole';

import { getProject, IProject } from '../../store/actions';

interface IProps {
  getProject: Function;
  match: { params: { id: string } };
  project: IProject;
}

const Project: React.FC<IProps> = ({ getProject, match, project }) => {
  const [collapseSideBar, setCollapseSideBar] = React.useState(false);
  const projectId = match.params.id;
  React.useEffect(() => {
    getProject(projectId);
  }, [getProject, projectId]);

  return (
    <div className={`project-wrapper ${collapseSideBar ? 'collapsed' : ''}`}>
      <SprintSideBar
        sprintArr={project?.sprints}
        collapseSideBar={collapseSideBar}
        setCollapseSideBar={setCollapseSideBar}
      />
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
