import React from 'react';
import { connect } from 'react-redux';
import { IProject, ISprint } from 'interfaces';
import { getSprint } from 'store/actions';

interface IProps {
  item: ISprint;
  getSprint: Function;
  project: IProject;
}

const SprintItem: React.FC<IProps> = ({ item, getSprint, project }) => {
  const onClick = () => getSprint(project._id, item._id);

  return (
    <div className='sprint-item' onClick={onClick}>
      <p className='sprint-item__title'>{item.title} </p>
    </div>
  );
};

interface IState {
  projects: { project: IProject };
}
const mapStateToProps = (state: IState) => ({
  project: state.projects.project,
});

export default connect(mapStateToProps, { getSprint })(SprintItem);
