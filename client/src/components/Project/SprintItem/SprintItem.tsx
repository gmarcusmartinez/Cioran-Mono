import React from 'react';
import { connect } from 'react-redux';
import { ISprint, getSprint } from '../../../store/actions';

interface SprintItemProps {
  item: ISprint;
  setSelectedSprint: Function;
  getSprint: Function;
}

const SprintItem: React.FC<SprintItemProps> = ({
  item,
  setSelectedSprint,
  getSprint,
}) => {
  const onClick = () => {
    setSelectedSprint(item);
    getSprint(item._id);
  };
  return (
    <div className='sprint-item' onClick={onClick}>
      <p className='sprint-item__title'>{item.title} </p>
    </div>
  );
};

export default connect(null, { getSprint })(SprintItem);
