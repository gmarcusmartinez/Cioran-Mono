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
      <TItem text={ticket.title} value='' />
      <TItem text='Priority' value={ticket.priority} />
      <TItem text='Type' value={ticket.ticketType} />
      <TItem text='Status' value={ticket.status} />
      <TItem
        text='Assigned To'
        value={firstNameOnly(ticket.assignedTo?.name)}
      />
      <TItem
        text='Date Assigned'
        value={ticket.dateAssigned ? formatDate(ticket.dateAssigned) : null}
      />
      <TItem
        text='Date Completed'
        value={ticket.dateCompleted ? formatDate(ticket.dateCompleted) : null}
      />
      <TItem text='Description' value={ticket.description} />
      <TicketActions ticket={ticket} setDisplayModal={setDisplayModal} />
    </div>
  );
};

export default TicketDisplay;
