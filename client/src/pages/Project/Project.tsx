import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import Sidebar from '../../components/common/SideBar';
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
  const projectId = match.params.id;
  React.useEffect(() => {
    fetchSprints(projectId);
  }, [fetchSprints, projectId]);

  return (
    <div className='projects-wrapper'>
      <Sidebar width={80} bg={'#66b2b2'} />
      <SprintSideBar sprintArr={sprints.items} />
      <SprintConsole />
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  sprints: state.sprints,
});

export default connect(mapStateToProps, { fetchSprints })(Project);
