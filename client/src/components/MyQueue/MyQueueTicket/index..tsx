import React from 'react';
import { connect } from 'react-redux';
import { formatDate } from 'utils/formatDate';
import { ITicket, setDisplayModal } from 'store/actions';

interface IProps {
  ticket: ITicket;
  setDisplayModal: Function;
}

const MyQueTicket: React.FC<IProps> = ({ ticket, setDisplayModal }) => {
  const handleClick = () => {
    setDisplayModal(true, 'Ticket');
  };

  return (
    <>
      <tr className='my-que-ticket' onClick={handleClick}>
        <td className={`t-col ${ticket.priority}`}>
          <div>{ticket.storyPoints}</div>
        </td>
        <td className='t-col'>{ticket.project.slug}</td>
        <td className='t-col'>{ticket.title}</td>
        <td className='t-col'>{formatDate(ticket.sprint.endDate)}</td>
      </tr>
    </>
  );
};

export default connect(null, { setDisplayModal })(MyQueTicket);
