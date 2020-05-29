import React from 'react';
import { connect } from 'react-redux';
import {
  assignTicket,
  submitTicket,
  completeTicket,
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
  completeTicket: Function;
  setDisplayModal: Function;
}

const TicketActions: React.FC<TicketActionsProps> = ({
  ticket,
  sprint: { _id: sprintId },
  project: { _id: projectId, projectOwner },
  userId,
  assignTicket,
  submitTicket,
  completeTicket,
  setDisplayModal,
}) => {
  const renderAssignToQueBtn = (text: string) => {
    return !ticket.assignedTo ? (
      <button className='btn-dark' onClick={() => handleSubmit(assignTicket)}>
        {text}
      </button>
    ) : null;
  };
  const renderSubmitBtn = (text: string) => {
    return ticket.assignedTo?._id === userId && ticket.status === 'assigned' ? (
      <button className='btn-dark' onClick={() => handleSubmit(submitTicket)}>
        {text}
      </button>
    ) : null;
  };
  const renderCompleteBtn = (text: string) => {
    return projectOwner === userId && ticket.status === 'submitted' ? (
      <button className='btn-dark' onClick={() => handleSubmit(completeTicket)}>
        {text}
      </button>
    ) : null;
  };

  const handleSubmit = async (cb: Function) => {
    try {
      await cb({ sprintId, projectId }, ticket._id);
      setDisplayModal(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      {renderAssignToQueBtn('Assign To Que')}
      {renderSubmitBtn('Submit For Review')}
      {renderCompleteBtn('Mark as Complete')}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  sprint: state.sprints.sprint,
  project: state.projects.project,
  userId: state.auth.currentUser.id,
});

export default connect(mapStateToProps, {
  assignTicket,
  submitTicket,
  completeTicket,
})(TicketActions);
