import React from 'react';
import { connect } from 'react-redux';
import Ticket from '../Ticket/Ticket';
import { ISprint, ITicket } from '../../../store/actions';

const headers = [
  { text: 'Ticket', sort: 'title' },
  { text: 'Type', sort: 'type' },
  { text: 'Assigned To', sort: 'title' },
  { text: 'Status', sort: 'status' },
  { text: 'Story Points', sort: 'storyPoints' },
];

interface SprintQueProps {
  selectedSprint: ISprint | null;
  tickets: ITicket[];
}

const SprintQue: React.FC<SprintQueProps> = ({ tickets }) => {
  let list = tickets
    ? tickets.map((t) => <Ticket key={t._id} ticket={t} />)
    : null;

  const ths = headers.map((h) => <th key={h.text}>{h.text}</th>);

  return (
    <div className='sprint-que'>
      <table>
        <thead>
          <tr className='ticket-table'>{ths}</tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  tickets: state.sprints.sprint?.tickets,
});

export default connect(mapStateToProps, {})(SprintQue);
