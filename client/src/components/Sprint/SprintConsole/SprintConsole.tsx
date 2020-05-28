import React from 'react';
import { connect } from 'react-redux';
import Modal from '../../common/Modal';
import { ISprint } from '../../../store/actions';
import { calculateStoryPoints } from '../../../utils/';
import { formatDate } from '../../../utils/formatDate';
import CreateTicketForm from '../../Forms/CreateTicketForm/CreateTicketForm';

interface SprintConsoleProps {
  sprint?: ISprint | null;
}
const SprintConsole: React.FC<SprintConsoleProps> = ({ sprint }) => {
  const [displayModal, setDisplayModal] = React.useState(false);

  const renderModal = () => {
    return displayModal ? (
      <Modal title='Create Ticket' showModal={setDisplayModal}>
        <CreateTicketForm
          sprint_id={sprint!._id}
          setDisplayModal={setDisplayModal}
        />
      </Modal>
    ) : null;
  };

  const renderCreateTicketBtn = () => {
    return sprint?._id ? (
      <div onClick={() => setDisplayModal(true)} id='create-ticket-btn'>
        Create Ticket
      </div>
    ) : null;
  };

  const renderStoryPoints = () => {
    let total = calculateStoryPoints(sprint!.tickets);
    return sprint?._id ? (
      <div className='story-points'>
        <div className='story-points__title'>Story Points</div>
        {total}
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
