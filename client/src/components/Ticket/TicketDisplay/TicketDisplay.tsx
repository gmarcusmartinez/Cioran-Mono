import React from 'react';
import { TItem } from './TicketDisplayItem';
import TicketActions from './TicketActions';
import { firstNameOnly } from '../../../utils';
import { formatDate } from '../../../utils/formatDate';

interface TicketDisplayProps {
  ticket: any;
  setDisplayModal: Function;
}

const TicketDisplay: React.FC<TicketDisplayProps> = ({
  ticket,
  setDisplayModal,
}) => {
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
      <TicketActions ticket={ticket} setDisplayModal={setDisplayModal} />
    </div>
  );
};

export default TicketDisplay;
