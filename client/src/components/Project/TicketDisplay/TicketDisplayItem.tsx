import React from 'react';

interface TicketDisplayItemProps {
  text: string;
  value: string | number;
}
const TicketDisplayItem: React.FC<TicketDisplayItemProps> = ({
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

export { TicketDisplayItem };
