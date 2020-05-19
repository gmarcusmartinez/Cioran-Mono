import React from 'react';
import { connect } from 'react-redux';
import Modal from '../../common/Modal';
import { ISprint } from '../../../store/actions';
import { formatDate } from '../../../utils/formatDate';
import CreateTicketForm from '../CreateTicketForm/CreateTicketForm';

interface SprintConsoleProps {
  sprint?: ISprint | null;
}
const SprintConsole: React.FC<SprintConsoleProps> = ({ sprint }) => {
  const [showCreateTicket, setShowCreateTicket] = React.useState(false);
  const renderModal = () => {
    return showCreateTicket ? (
      <Modal title='Create Ticket' showModal={setShowCreateTicket}>
        <CreateTicketForm sprint_id={sprint!._id} />
      </Modal>
    ) : null;
  };
  const renderCreateTicketBtn = () => {
    return sprint ? (
      <div onClick={() => setShowCreateTicket(true)} id='create-ticket-btn'>
        Create Ticket
      </div>
    ) : null;
  };
  const renderStoryPoints = () => {
    return sprint ? (
      <div className='story-points'>
        <div className='story-points__title'>Story Points</div>
        <>{sprint.totalStoryPoints}</>
      </div>
    ) : null;
  };
  const renderSprintDetails = () => {
    return sprint?.startDate ? (
      <>
        <h3 className='sprint-console__title'>{sprint.title}</h3>
        <div className='sprint-console__dates'>
          {formatDate(sprint.startDate)} - {formatDate(sprint.endDate)}
        </div>
      </>
    ) : null;
  };

  return (
    <>
      <div className='sprint-console'>
        {renderSprintDetails()}
        {renderCreateTicketBtn()}
        {renderStoryPoints()}
      </div>
      {renderModal()}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  sprint: state.sprints.sprint,
});
export default connect(mapStateToProps, {})(SprintConsole);
