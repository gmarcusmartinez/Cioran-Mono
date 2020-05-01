import React from 'react';
import './styles.css';
import { Sprint } from '../../../store/actions';

interface SprintItemProps {
  item: Sprint;
  setSelectedSprint: Function;
}

const SprintItem: React.FC<SprintItemProps> = ({ item, setSelectedSprint }) => {
  const onClick = () => {
    setSelectedSprint(item);
  };
  return (
    <div className='wrapper' onClick={onClick}>
      <div className='title'>{item.title}</div>
    </div>
  );
};

export default SprintItem;
