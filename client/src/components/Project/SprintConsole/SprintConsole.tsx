import React from 'react';
import Modal from '../../common/Modal';

const SprintConsole: React.FC = ({ children }) => {
  const [showCreateTicket, setShowCreateTicket] = React.useState(false);

  return (
    <div className='sprint-console'>
      <div className='sc-item'>
        <button onClick={() => setShowCreateTicket(true)}>Create Ticket</button>
      </div>
      {children}
      {showCreateTicket ? (
        <Modal title='Create Ticket' showModal={setShowCreateTicket} />
      ) : null}
    </div>
  );
};

export default SprintConsole;
