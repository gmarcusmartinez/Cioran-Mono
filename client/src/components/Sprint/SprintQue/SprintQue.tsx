import React from 'react';
import { connect } from 'react-redux';
import Queue from '../../common/Queue/Queue';
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

  const classNames = ['sprint-que', '', 'ticket-table'];
  const queueProps = {
    headers,
    list,
    classNames,
  };
  return (
    <>
      {sprint?._id ? (
        <>
          <Queue {...queueProps} />
          <Pagination
            totalItems={tickets.length}
            itemsPerPage={ticketsPerPage}
            paginate={paginate}
          />
        </>
      ) : null}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  tickets: state.sprints.sprint?.tickets,
  sprint: state.sprints.sprint,
  ticketPage: state.sprints.ticketPage,
});

export default connect(mapStateToProps, { setCurrentPage })(SprintQue);
