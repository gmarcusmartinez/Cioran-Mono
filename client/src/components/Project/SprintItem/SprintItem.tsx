import React from 'react';
import './styles.css';
import { Sprint } from '../../../store/actions';

interface SprintItemProps {
  item: Sprint;
}

const SprintItem: React.FC<SprintItemProps> = ({ item }) => {
  return (
    <div className='wrapper'>
      <div className='title'>{item.title}</div>
    </div>
  );
};

export default SprintItem;
