import React from 'react';
import { ITicket } from '../../../store/actions';

interface TicketProps {
  ticket: ITicket;
}

const Ticket: React.FC<TicketProps> = ({
  ticket: { title, type, status, storyPoints },
}) => {
  return (
    <tr className='ticket'>
      <td>
        <div className='ticket-bar'></div>
        <div className='ticket-title'>{title}</div>
      </td>
      <td className='t-item'>{type}</td>
      <td className='t-item'>Marcus</td>
      <td className='t-item'>{status}</td>
      <td className='t-item'>{storyPoints}</td>
    </tr>
  );
};

export default Ticket;
