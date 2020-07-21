import React from 'react';
import TicketCol from './TicketCol';
import TicketActions from './TicketActions';
import { splitName, formatDate } from 'utils';

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
      <TicketCol text={ticket.title} value='' />
      <TicketCol text='Priority' value={ticket.priority} />
      <TicketCol text='Type' value={ticket.ticketType} />
      <TicketCol text='Status' value={ticket.status} />
      <TicketCol
        text='Assigned To'
        value={splitName(ticket.assignedTo?.name)}
      />
      <TicketCol
        text='Date Assigned'
        value={ticket.dateAssigned ? formatDate(ticket.dateAssigned) : null}
      />
      <TicketCol
        text='Date Completed'
        value={ticket.dateCompleted ? formatDate(ticket.dateCompleted) : null}
      />
      <TicketCol text='Description' value={ticket.description} />
      <TicketActions ticket={ticket} setDisplayModal={setDisplayModal} />
    </div>
  );
};

export default TicketDisplay;
