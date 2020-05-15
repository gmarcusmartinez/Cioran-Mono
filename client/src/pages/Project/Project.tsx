import React from 'react';
import { connect } from 'react-redux';

import SprintQue from '../../components/Project/SprintQue/SprintQue';
import SprintSideBar from '../../components/Project/SprintSideBar/SprintSideBar';
import SprintConsole from '../../components/Project/SprintConsole/SprintConsole';

import { fetchSprints, Sprint } from '../../store/actions';

interface ProjectProps {
  fetchSprints: Function;
  match: {
    params: {
      id: string;
    };
  };
  sprints: {
    loading: boolean;
    count: number;
    pagination: {};
    items: Sprint[];
  };
}

const Project: React.FC<ProjectProps> = ({ fetchSprints, match, sprints }) => {
  const [selectedSprint, setSelectedSprint] = React.useState(null);

  const projectId = match.params.id;
  React.useEffect(() => {
    fetchSprints(projectId);
  }, [fetchSprints, projectId]);

  return (
    <div className='projects-wrapper'>
      <SprintSideBar
        sprintArr={sprints.items}
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
  sprints: state.sprints,
});

export default connect(mapStateToProps, { fetchSprints })(Project);
