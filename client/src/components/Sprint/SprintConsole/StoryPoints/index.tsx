import React from 'react';
import { ISprint } from 'interfaces';
import { calculateStoryPoints } from 'utils';

interface IProps {
  sprint: ISprint;
}

const StoryPoints: React.FC<IProps> = ({ sprint }) => {
  let total = calculateStoryPoints(sprint!.tickets);
  if (!sprint._id) return null;
  return (
    <div className='story-points'>
      <div className='story-points__title'>Story Points</div>
      {total}
    </div>
  );
};

export default StoryPoints;
