import React from 'react';
import { connect } from 'react-redux';
import { ISprint, getSprint, IProject } from '../../../store/actions';

interface SprintItemProps {
  item: ISprint;
  getSprint: Function;
  project: IProject;
}

const SprintItem: React.FC<SprintItemProps> = ({
  item,
  getSprint,
  project,
}) => {
  const onClick = () => {
    getSprint(project._id, item._id);
  };

  return (
    <div className='sprint-item' onClick={onClick}>
      <p className='sprint-item__title'>{item.title} </p>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  project: state.projects.project,
});
export default connect(mapStateToProps, { getSprint })(SprintItem);
