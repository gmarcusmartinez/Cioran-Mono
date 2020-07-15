import React from 'react';
import { connect } from 'react-redux';

import ProjectItem from '../ProjectItem';
import CustomBtn from 'components/common/CustomBtn';
import { IProject, getProjects, setDisplayModal } from 'store/actions';

interface IProps {
  projects: IProject[] | null;
  getProjects: Function;
  setDisplayModal: Function;
}

const ProjectConsole: React.FC<IProps> = ({
  projects,
  getProjects,
  setDisplayModal,
}) => {
  React.useEffect(() => {
    getProjects();
  }, [getProjects]);

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

interface IState {
  projects: { projects: IProject[] };
}
const mapStateToProps = (state: IState) => ({
  projects: state.projects?.projects,
});

export default connect(mapStateToProps, { getProjects, setDisplayModal })(
  ProjectConsole
);
