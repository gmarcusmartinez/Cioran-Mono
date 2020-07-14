import React from 'react';
import { calculateStoryPoints } from 'utils';
import { ISprint } from 'store/actions';

interface IProps {
  sprint: ISprint;
}

const StoryPoints: React.FC<IProps> = ({ sprint }) => {
  let total = calculateStoryPoints(sprint!.tickets);
  return sprint._id ? (
    <div className='story-points'>
      <div className='story-points__title'>Story Points</div>
      {total}
    </div>
  ) : null;
};

export default StoryPoints;
