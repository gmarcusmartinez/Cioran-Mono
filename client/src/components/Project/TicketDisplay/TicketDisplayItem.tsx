import React from 'react';

interface TicketDisplayItemProps {
  text: string;
  value: string | number | Date;
}
export const ticketDisplayItems = [
  { text: 'Type', prop: 'ticketType' },
  { text: 'Priority', prop: 'priority' },
  { text: 'Status', prop: 'status' },
  { text: 'Story Points', prop: 'storyPoints' },
  { text: 'Assigned To', prop: 'assignedTo.name' },
  { text: 'Date Assigned', prop: `dateAssigned` },
  { text: 'Date Completed', prop: 'dateCompleted' },
  { text: 'Description', prop: 'description' },
];
export const TicketDisplayItem: React.FC<TicketDisplayItemProps> = ({
  text,
  value,
}) => {
  return (
    <div className='ticket-display__item'>
      <span className='ticket-field-key'>{text}</span>
      <span className='ticket-field-value'>{value}</span>
    </div>
  );
};
