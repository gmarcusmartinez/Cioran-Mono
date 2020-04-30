import React from 'react';
import './styles.scss';

interface TicketProps {
  title: string;
  type: string;
  assignedTo?: string;
  status: string;
  storyPoints: number;
}

const Ticket: React.FC<TicketProps> = ({
  title,
  type,
  assignedTo,
  status,
  storyPoints,
}) => {
  return (
    <tr className='ticket'>
      <td className='t-item ticket-title'>{title}</td>
      <td className='t-item'>{type}</td>
      <td className='t-item'>{assignedTo}</td>
      <td className='t-item'>{status}</td>
      <td className='t-item'>{storyPoints}</td>
    </tr>
  );
};

export default Ticket;
