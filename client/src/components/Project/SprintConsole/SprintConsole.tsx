import React from 'react';
import Modal from '../../common/Modal';
import CreateTicketForm from '../CreateTicketForm/CreateTicketForm';
import { Sprint } from '../../../store/actions';

interface SprintConsoleProps {
  selectedSprint: Sprint | null;
}

const SprintConsole: React.FC<SprintConsoleProps> = ({ selectedSprint }) => {
  const [showCreateTicket, setShowCreateTicket] = React.useState(false);

  const renderModal = () => {
    return showCreateTicket ? (
      <Modal title='Create Ticket' showModal={setShowCreateTicket}>
        <CreateTicketForm selectedSprint={selectedSprint} />
      </Modal>
    ) : null;
  };

  const renderCreateTicketBtn = () => {
    return selectedSprint ? (
      <button
        onClick={() => setShowCreateTicket(true)}
        className='btn-primary-light'
        style={{ width: '14rem', marginTop: '5rem' }}
      >
        Create Ticket
      </button>
    ) : null;
  };
  return (
    <div className='sprint-console'>
      {renderCreateTicketBtn()}
      {renderModal()}
    </div>
  );
};

export default SprintConsole;
