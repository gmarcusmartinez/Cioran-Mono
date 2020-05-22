import React from 'react';
import { ITicket } from '../../../store/actions';

interface MyQueTicketProps {
  ticket: ITicket;
}

const MyQueTicket: React.FC<MyQueTicketProps> = ({ ticket }) => {
  return (
    <tr className='my-que-ticket'>
      <td className={`t-col low`}></td>
      <td className='t-col'>CIOR</td>
      <td className='t-col'>{ticket.title}</td>
      <td className='t-col'>{ticket.storyPoints}</td>
      <td className='t-col'>May 25</td>
    </tr>
  );
};

export default MyQueTicket;
