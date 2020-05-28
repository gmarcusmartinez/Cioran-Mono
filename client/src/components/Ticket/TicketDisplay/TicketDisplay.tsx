import React from 'react';
import { connect } from 'react-redux';
import { TItem } from './TicketDisplayItem';
import { firstNameOnly } from '../../../utils';
import { assignTicket } from '../../../store/actions';
import { formatDate } from '../../../utils/formatDate';

interface TicketDisplayProps {
  ticket: any;
  sprintId: string;
  projectId: string;
  assignTicket: Function;
}

const TicketDisplay: React.FC<TicketDisplayProps> = ({
  ticket,
  projectId,
  sprintId,
  assignTicket,
}) => {
  const handleAssignTicket = () => {
    return assignTicket({ sprintId, projectId }, ticket._id);
  };

  const renderAssignToQueBtn = (text: string) => {
    return !ticket.assignedTo ? (
      <button className='btn-dark' onClick={handleAssignTicket}>
        {text}
      </button>
    ) : null;
  };

  return (
    <div className='ticket-display'>
      <TItem text='Type'>{ticket.ticketType}</TItem>
      <TItem text='Priority'>{ticket.priority}</TItem>
      <TItem text='Status'>{ticket.status}</TItem>
      <TItem text='Assigned To'>
        {ticket.assignedTo ? firstNameOnly(ticket.assignedTo.name) : null}
      </TItem>
      <TItem text='Date Assigned'>{formatDate(ticket.dateAssigned)}</TItem>
      <TItem text='Date Completed'>{formatDate(ticket.dateCompleted)}</TItem>
      <TItem text='Description'>{ticket.description}</TItem>
      {renderAssignToQueBtn('Assign to Que')}
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  projectId: state.projects.project._id,
  sprintId: state.sprints.sprint._id,
});

export default connect(mapStateToProps, { assignTicket })(TicketDisplay);
