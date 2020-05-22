import React from 'react';
import { connect } from 'react-redux';
import { assignTicket } from '../../../store/actions';
import { TicketDisplayItem } from './TicketDisplayItem';

interface TicketDisplayProps {
  ticket: any;
  sprint: string;
  project: string;
  assignTicket: Function;
}

const ticketDisplayItems = [
  { text: 'Type', prop: 'ticketType' },
  { text: 'Priority', prop: 'priority' },
  { text: 'Status', prop: 'status' },
  { text: 'Story Points', prop: 'storyPoints' },
  { text: 'Assigned To', prop: 'assignedTo' },
  { text: 'Date Assigned', prop: 'dateAssigned' },
  { text: 'Date Completed', prop: 'dateCompleted' },
  { text: 'Description', prop: 'description' },
];

const TicketDisplay: React.FC<TicketDisplayProps> = ({
  ticket,
  project,
  sprint,
  assignTicket,
}) => {
  let list = ticketDisplayItems.map(({ text, prop }) => (
    <TicketDisplayItem key={text} text={text} value={ticket[prop]} />
  ));

  const renderAssignToQueBtn = () => {
    return !ticket.assignedTo ? (
      <button
        className='btn-dark'
        id='assign-ticket-btn'
        onClick={() => assignTicket({ sprint, project }, ticket._id)}
      >
        Assign to Que
      </button>
    ) : null;
  };

  return (
    <div className='ticket-display'>
      {list}
      {renderAssignToQueBtn()}
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  project: state.projects.project._id,
  sprint: state.sprints.sprint._id,
});

export default connect(mapStateToProps, { assignTicket })(TicketDisplay);
