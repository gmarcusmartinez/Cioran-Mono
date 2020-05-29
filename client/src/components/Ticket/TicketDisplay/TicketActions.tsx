import React from 'react';
import { connect } from 'react-redux';
import {
  assignTicket,
  submitTicket,
  IProject,
  ISprint,
} from '../../../store/actions';

interface TicketActionsProps {
  ticket: any;
  project: IProject;
  sprint: ISprint;
  userId: string;
  assignTicket: Function;
  submitTicket: Function;
  setDisplayModal: Function;
}

const TicketActions: React.FC<TicketActionsProps> = ({
  ticket,
  sprint: { _id: sprintId },
  project: { _id: projectId, projectOwner },
  userId,
  assignTicket,
  submitTicket,
  setDisplayModal,
}) => {
  const renderAssignToQueBtn = (text: string) => {
    return !ticket.assignedTo ? (
      <button className='btn-dark' onClick={handleAssignTicket}>
        {text}
      </button>
    ) : null;
  };
  const renderSubmitBtn = (text: string) => {
    return ticket.assignedTo._id === userId ? (
      <button className='btn-dark' onClick={handleSubmitTicket}>
        {text}
      </button>
    ) : null;
  };
  const renderCompleteBtn = (text: string) => {
    return projectOwner === userId && ticket.status === 'submitted' ? (
      <button
        className='btn-dark'
        onClick={() => console.log('Todo:Mark Complete')}
      >
        {text}
      </button>
    ) : null;
  };

  const handleAssignTicket = async () => {
    try {
      await assignTicket({ sprintId, projectId }, ticket._id);
      setDisplayModal(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmitTicket = async () => {
    try {
      await submitTicket({ sprintId, projectId }, ticket._id);
      setDisplayModal(false);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      {renderAssignToQueBtn('Assign To Que')}
      {ticket.assignedTo && ticket.status === 'assigned'
        ? renderSubmitBtn('Submit For Review')
        : null}

      {renderCompleteBtn('Mark as Complete')}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  sprint: state.sprints.sprint,
  project: state.projects.project,
  userId: state.auth.currentUser.id,
});

export default connect(mapStateToProps, { assignTicket, submitTicket })(
  TicketActions
);
