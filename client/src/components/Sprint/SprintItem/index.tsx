import React from 'react';
import { connect } from 'react-redux';
import { ISprint } from 'interfaces';
import { getSprint } from 'store/actions';
import { IState } from 'interfaces/state';
import { selectProjectId } from 'store/selectors/projects';

interface IProps {
  sprint: ISprint;
  getSprint: Function;
  projectId: string;
}

const SprintItem: React.FC<IProps> = ({ sprint, getSprint, projectId }) => {
  const onClick = () => getSprint(projectId, sprint._id);

  return (
    <div className='sprint-item' onClick={onClick}>
      <p className='sprint-item__title'>{sprint.title} </p>
    </div>
  );
};

const mapStateToProps = (state: IState) => ({
  projectId: selectProjectId(state),
});

export default connect(mapStateToProps, { getSprint })(SprintItem);
