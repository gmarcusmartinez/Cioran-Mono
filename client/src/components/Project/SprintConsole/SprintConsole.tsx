import React from 'react';
import Modal from '../../common/Modal';
import CreateTicketForm from '../CreateTicketForm/CreateTicketForm';
import { ISprint } from '../../../store/actions';

interface SprintConsoleProps {
  selectedSprint: ISprint | null;
}

const SprintConsole: React.FC<SprintConsoleProps> = ({ selectedSprint }) => {
  const [showCreateTicket, setShowCreateTicket] = React.useState(false);

  const renderModal = () => {
    return showCreateTicket ? (
      <Modal title='Create Ticket' showModal={setShowCreateTicket}>
        <CreateTicketForm sprint_id={selectedSprint!._id} />
      </Modal>
    ) : null;
  };

  const renderCreateTicketBtn = () => {
    return selectedSprint ? (
      <button onClick={() => setShowCreateTicket(true)} id='create-ticket-btn'>
        Create Ticket
      </button>
    ) : null;
  };

  return (
    <>
      <div className='sprint-console'>
        {renderCreateTicketBtn()}
        <h3 className='sprint-console__title'>{selectedSprint?.title}</h3>
        <div className='story-points'>
          <div className='story-points__title'>Story Points</div>
          <>{selectedSprint?.totalStoryPoints}</>
        </div>
      </div>
      {renderModal()}
    </>
  );
};

export default SprintConsole;
