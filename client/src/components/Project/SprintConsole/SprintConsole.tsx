import React from 'react';

const SprintConsole: React.FC = ({ children }) => {
  return (
    <div className='sprint-console'>
      <div className='sc-item'></div>
      {children}
    </div>
  );
};

export default SprintConsole;
