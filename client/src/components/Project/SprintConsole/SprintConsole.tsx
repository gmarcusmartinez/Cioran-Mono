import React from 'react';
import Modal from '../../common/Modal';
import CreateTicketForm from '../CreateTicketForm/CreateTicketForm';

const SprintConsole: React.FC = ({ children }) => {
  const [showCreateTicket, setShowCreateTicket] = React.useState(false);

  const renderModal = () => {
    return showCreateTicket ? (
      <Modal title='Create Ticket' showModal={setShowCreateTicket}>
        <CreateTicketForm />
      </Modal>
    ) : null;
  };

  return (
    <div className='sprint-console'>
      <div className='sc-item'>
        <button onClick={() => setShowCreateTicket(true)}>Create Ticket</button>
      </div>
      {children}
      {renderModal()}
    </div>
  );
};

export default SprintConsole;
