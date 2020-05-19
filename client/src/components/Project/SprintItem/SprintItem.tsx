import React from 'react';
import { connect } from 'react-redux';
import { ISprint, getSprint } from '../../../store/actions';

interface SprintItemProps {
  item: ISprint;
  getSprint: Function;
}

const SprintItem: React.FC<SprintItemProps> = ({ item, getSprint }) => {
  const onClick = () => {
    getSprint(item._id);
  };
  return (
    <div className='sprint-item' onClick={onClick}>
      <p className='sprint-item__title'>{item.title} </p>
    </div>
  );
};

export default connect(null, { getSprint })(SprintItem);
