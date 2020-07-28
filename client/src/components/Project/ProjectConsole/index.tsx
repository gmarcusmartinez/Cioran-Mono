import React from 'react';
import { connect } from 'react-redux';
import CustomBtn from 'components/common/CustomBtn';
import ProjectItem from 'components/Project/ProjectItem';
import { IProject } from 'interfaces';
import { IState } from 'interfaces/state';
import { setDisplayModal } from 'store/actions';
import { fetchProjectsStart } from 'store/actions/projects/fetchProjects';
import { selectProjects } from 'store/selectors/projects';

interface IProps {
  projects: IProject[] | null;
  fetchProjectsStart: Function;
  setDisplayModal: Function;
}

const ProjectConsole: React.FC<IProps> = ({
  projects,
  fetchProjectsStart,
  setDisplayModal,
}) => {
  React.useEffect(() => {
    fetchProjectsStart();
  }, [fetchProjectsStart]);

  let list = projects
    ? projects.map((p: IProject) => <ProjectItem key={p._id} item={p} />)
    : null;

  return (
    <div className='project-console'>
      <div className='project-console__title'>My Projects</div>
      <div className='polygon-border'></div>
      <div className='project-list'>
        <CustomBtn
          text='Create Project'
          cb={() => setDisplayModal(true, 'CREATE_PROJECT')}
          className='create-project-btn project-item'
        />
        {list}
      </div>
    </div>
  );
};

const mapStateToProps = (state: IState) => ({
  projects: selectProjects(state),
});

export default connect(mapStateToProps, {
  fetchProjectsStart,
  setDisplayModal,
})(ProjectConsole);
