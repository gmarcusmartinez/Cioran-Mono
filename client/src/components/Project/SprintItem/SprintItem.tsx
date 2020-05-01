import React from 'react';
import { connect } from 'react-redux';
import './styles.css';
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
    <div className='wrapper' onClick={onClick}>
      <div className='title'>{item.title}</div>
    </div>
  );
};

export default connect(null, { fetchTickets })(SprintItem);
