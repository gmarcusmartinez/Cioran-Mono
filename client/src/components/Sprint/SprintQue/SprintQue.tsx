import React from 'react';
import { connect } from 'react-redux';
import Ticket from '../../Ticket/TicketRow/Ticket';
import Pagination from '../../common/Pagination/Pagination';
import { ITicket, ISprint, setCurrentPage } from '../../../store/actions';

const headers = [
  { text: 'Ticket', sort: 'title' },
  { text: 'Type', sort: 'type' },
  { text: 'Assigned To', sort: 'title' },
  { text: 'Status', sort: 'status' },
  { text: 'Story Points', sort: 'storyPoints' },
];
const ths = headers.map((h) => <th key={h.text}>{h.text}</th>);

interface SprintQueProps {
  tickets: ITicket[];
  sprint?: ISprint;
  ticketPage: number;
  setCurrentPage: Function;
}
const SprintQue: React.FC<SprintQueProps> = ({
  tickets,
  sprint,
  ticketPage,
  setCurrentPage,
}) => {
  const ticketsPerPage = 12;

  const lastIndex = ticketPage * ticketsPerPage;
  const firstIndex = lastIndex - ticketsPerPage;
  const currentTickets = tickets.slice(firstIndex, lastIndex);
  let list = currentTickets.map((t) => <Ticket key={t._id} ticket={t} />);

  const paginate = (num: number) => {
    setCurrentPage(num);
  };

  const renderTable = () => (
    <table>
      <thead>
        <tr className='ticket-table'>{ths}</tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  );

  return (
    <div className='sprint-que'>
      {sprint?._id ? renderTable() : null}
      {sprint?._id ? (
        <Pagination
          totalItems={tickets.length}
          itemsPerPage={ticketsPerPage}
          paginate={paginate}
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  tickets: state.sprints.sprint?.tickets,
  sprint: state.sprints.sprint,
  ticketPage: state.sprints.ticketPage,
});

export default connect(mapStateToProps, { setCurrentPage })(SprintQue);
