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
    <button className='sprint-item btn-white' onClick={onClick}>
      {item.title}
    </button>
  );
};

export default connect(null, { fetchTickets })(SprintItem);
