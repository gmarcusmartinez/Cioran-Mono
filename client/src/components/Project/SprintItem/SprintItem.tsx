import React from 'react';
import { connect } from 'react-redux';
import { Sprint, fetchTickets } from '../../../store/actions';

interface SprintItemProps {
  item: Sprint;
  setSelectedSprint: Function;
  fetchTickets: Function;
}

const SprintItem: React.FC<SprintItemProps> = ({
  item,
  setSelectedSprint,
  fetchTickets,
}) => {
  const onClick = () => {
    setSelectedSprint(item);
    fetchTickets(item._id);
  };
  return (
    <div className='sprint-item' onClick={onClick}>
      <p className='sprint-item__title'>{item.title} </p>
    </div>
  );
};

export default connect(null, { fetchTickets })(SprintItem);
