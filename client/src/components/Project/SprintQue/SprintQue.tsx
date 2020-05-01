import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';
import Ticket from '../Ticket/Ticket';
import { Sprint, ITicket } from '../../../store/actions';

const headers = ['Item', 'Type', 'Assigned To', 'Status', 'Story Points'];
const ths = headers.map((h) => <th key={h}>{h}</th>);

interface SprintQueProps {
  selectedSprint: Sprint | null;
  tickets: ITicket[];
}

const SprintQue: React.FC<SprintQueProps> = ({ selectedSprint, tickets }) => {
  let list = tickets
    ? tickets.map((t) => <Ticket key={t._id} ticket={t} />)
    : null;
  return (
    <div className='sprint-que'>
      <div className='sq-title'>
        <h3>{selectedSprint ? selectedSprint.title : ''} Que</h3>
        <p>27/04/20 - 3/5/20</p>
      </div>
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
  tickets: state.tickets.items,
});

export default connect(mapStateToProps, {})(SprintQue);
