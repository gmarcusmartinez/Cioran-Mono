import React from 'react';
import { connect } from 'react-redux';
import Modal from '../../common/Modal';
import { firstNameOnly } from '../../../utils';
import TicketDisplay from '../TicketDisplay/TicketDisplay';
import { ITicket, getTicket, ISprint } from '../../../store/actions';

interface TicketProps {
  ticket: ITicket;
  sprint: ISprint;
  getTicket: Function;
}

const Ticket: React.FC<TicketProps> = ({ ticket, sprint, getTicket }) => {
  const [displayModal, setDisplayModal] = React.useState(false);
  const handleClick = () => {
    getTicket(sprint, ticket._id);
    setDisplayModal(true);
  };
  const renderModal = () => {
    return displayModal ? (
      <Modal
        title={ticket.title}
        titleFontSize='1.4rem'
        headerMargin='3rem'
        showModal={setDisplayModal}
      >
        <TicketDisplay ticket={ticket} />
      </Modal>
    ) : null;
  };
  return (
    <>
      <tr className={`ticket ${ticket.status}`} onClick={handleClick}>
        <td className={`t-col ${ticket.priority}`}></td>
        <td className='t-col'>{ticket.title}</td>
        <td className='t-col'>{ticket.ticketType}</td>
        <td className='t-col'>
          {ticket.assignedTo ? firstNameOnly(ticket.assignedTo.name) : null}
        </td>
        <td className='t-col'>{ticket.status}</td>
        <td className='t-col'>{ticket.storyPoints}</td>
      </tr>
      {renderModal()}
    </>
  );
};
const mapStateToProps = (state: any) => ({
  sprint: state.sprints.sprint,
});
export default connect(mapStateToProps, { getTicket })(Ticket);
