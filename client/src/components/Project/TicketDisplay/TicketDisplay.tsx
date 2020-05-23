import React from 'react';
import { connect } from 'react-redux';
import { assignTicket } from '../../../store/actions';

import { TicketDisplayItem, ticketDisplayItems } from './TicketDisplayItem';

interface TicketDisplayProps {
  ticket: any;
  sprint: string;
  project: string;
  assignTicket: Function;
}

const TicketDisplay: React.FC<TicketDisplayProps> = ({
  ticket,
  project,
  sprint,
  assignTicket,
}) => {
  let list = ticketDisplayItems.map(({ text, prop }) => (
    <TicketDisplayItem key={text} text={text} value={ticket[prop]} />
  ));
  const handleAssignTicket = () => {
    return assignTicket({ sprint, project }, ticket._id);
  };
  const renderAssignToQueBtn = (text: string) => {
    return !ticket.assignedTo ? (
      <button className='btn-dark' onClick={handleAssignTicket}>
        {text}
      </button>
    ) : null;
  };

  return (
    <div className='ticket-display'>
      {list}
      {renderAssignToQueBtn('Assign to Que')}
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  project: state.projects.project._id,
  sprint: state.sprints.sprint._id,
});

export default connect(mapStateToProps, { assignTicket })(TicketDisplay);
