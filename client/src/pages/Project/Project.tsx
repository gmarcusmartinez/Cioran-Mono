import React from 'react';
import { connect } from 'react-redux';

import SprintQue from '../../components/Project/SprintQue/SprintQue';
import SprintSideBar from '../../components/Project/SprintSideBar/SprintSideBar';
import SprintConsole from '../../components/Project/SprintConsole/SprintConsole';

import { getProject, Sprint } from '../../store/actions';

interface ProjectProps {
  getProject: Function;
  match: {
    params: {
      id: string;
    };
  };
  project: {
    loading: boolean;
    sprints: Sprint[];
  };
}

const Project: React.FC<ProjectProps> = ({ getProject, match, project }) => {
  const [selectedSprint, setSelectedSprint] = React.useState(null);
  const projectId = match.params.id;
  React.useEffect(() => {
    getProject(projectId);
  }, [getProject, projectId]);

  return (
    <div className='projects-wrapper'>
      <SprintSideBar
        sprintArr={project?.sprints}
        setSelectedSprint={setSelectedSprint}
      />
      <div className='sprint-wrapper'>
        <div className='project-team-section'></div>
        <SprintConsole selectedSprint={selectedSprint} />
        <SprintQue selectedSprint={selectedSprint} />
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  project: state.projects.project,
});

export default connect(mapStateToProps, { getProject })(Project);
