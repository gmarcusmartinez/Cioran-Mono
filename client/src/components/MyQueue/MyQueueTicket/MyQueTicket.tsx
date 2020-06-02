import React from 'react';
import Modal from '../../common/Modal';
import { ITicket } from '../../../store/actions';
import { formatDate } from '../../../utils/formatDate';
import TicketDisplay from '../../Ticket/TicketDisplay/TicketDisplay';

interface MyQueTicketProps {
  ticket: ITicket;
}

const MyQueTicket: React.FC<MyQueTicketProps> = ({ ticket }) => {
  const [displayModal, setDisplayModal] = React.useState(false);
  const handleClick = () => {
    setDisplayModal(true);
  };
  const renderModal = () => {
    return displayModal ? (
      <Modal title='' showModal={setDisplayModal}>
        <TicketDisplay ticket={ticket} setDisplayModal={setDisplayModal} />
      </Modal>
    ) : null;
  };
  return (
    <>
      <tr className='my-que-ticket' onClick={handleClick}>
        <td className={`t-col ${ticket.priority}`}></td>
        <td className='t-col'>{ticket.project.slug}</td>
        <td className='t-col'>{ticket.title}</td>
        <td className='t-col'>{ticket.storyPoints}</td>
        <td className='t-col'>{formatDate(ticket.sprint.endDate)}</td>
      </tr>
      {renderModal()}
    </>
  );
};

export default MyQueTicket;
