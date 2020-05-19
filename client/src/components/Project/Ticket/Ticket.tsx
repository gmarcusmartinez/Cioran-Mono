import React from 'react';
import { ITicket } from '../../../store/actions';

interface TicketProps {
  ticket: ITicket;
}

const Ticket: React.FC<TicketProps> = ({
  ticket: { priority, title, ticketType, status, storyPoints },
}) => {
  return (
    <tr className={`ticket ${status}`}>
      <td className={`t-item ${priority}`}></td>
      <td className='t-item'>{title}</td>
      <td className='t-item'>{ticketType}</td>
      <td className='t-item'>--</td>
      <td className='t-item'>{status}</td>
      <td className='t-item'>{storyPoints}</td>
    </tr>
  );
};

export default Ticket;
