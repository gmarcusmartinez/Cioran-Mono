import React from 'react';
import { connect } from 'react-redux';
import {
  assignTicket,
  submitTicket,
  completeTicket,
  setAlert,
} from 'store/actions';
import { IState } from 'interfaces/state';
import { selectCurrentUser } from 'store/selectors/auth';

interface TicketActionsProps {
  ticket: any;
  user: any;
  assignTicket: Function;
  submitTicket: Function;
  completeTicket: Function;
  setDisplayModal: Function;
  setAlert: Function;
}

const TicketActions: React.FC<TicketActionsProps> = ({
  ticket: {
    _id,
    sprint: { _id: sprintId },
    project: { _id: projectId },
    assignedTo,
    status,
  },
  user: { id: userId },
  setAlert,
  assignTicket,
  submitTicket,
  setDisplayModal,
}) => {
  const renderAssignToQueBtn = (text: string) => {
    return !assignedTo ? (
      <button
        className='btn-dark'
        onClick={() => handleSubmit(assignTicket, 'Ticket Assigned To Queue')}
      >
        {text}
      </button>
    ) : null;
  };
  const renderSubmitBtn = (text: string) => {
    return assignedTo?._id === userId && status === 'assigned' ? (
      <button
        className='btn-dark'
        onClick={() => handleSubmit(submitTicket, 'Ticket submit successful')}
      >
        {text}
      </button>
    ) : null;
  };
  // const renderCompleteBtn = (text: string) => {
  //   return projectOwner === userId && status === 'submitted' ? (
  //     <button
  //       className='btn-dark'
  //       onClick={() =>
  //         handleSubmit(completeTicket, 'Ticket marked as complete')
  //       }
  //     >
  //       {text}
  //     </button>
  //   ) : null;
  // };

  const handleSubmit = async (cb: Function, msg: string) => {
    try {
      // await cb({ sprintId, projectId }, _id);
      setDisplayModal(false);
      setAlert(msg, 'success');
    } catch (err) {
      setDisplayModal(false);
      setAlert(err.message, 'fail');
    }
  };

  return (
    <>
      {renderAssignToQueBtn('Assign To Que')}
      {renderSubmitBtn('Submit For Review')}
      {/* {renderCompleteBtn('Mark as Complete')} */}
    </>
  );
};

const mapStateToProps = (state: IState) => ({
  user: selectCurrentUser(state),
});

export default connect(mapStateToProps, {
  setAlert,
  assignTicket,
  submitTicket,
  completeTicket,
})(TicketActions);
