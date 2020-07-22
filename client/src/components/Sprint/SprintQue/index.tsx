import React from 'react';
import { connect } from 'react-redux';
import Pagination from 'components/common/Pagination';
import Queue from 'components/common/Queue';
import Ticket from 'components/Ticket/TicketRow';
import { ITicket } from 'interfaces';
import { SprintState } from 'store/reducers/sprints';
import { setCurrentPage } from 'store/actions';
import { setCurrentTickets } from 'utils/index';

const headers = [
  { text: 'Ticket', sort: 'title' },
  { text: 'Type', sort: 'type' },
  { text: 'Assigned To', sort: 'title' },
  { text: 'Status', sort: 'status' },
  { text: 'Story Points', sort: 'storyPoints' },
];

interface IProps {
  tickets: ITicket[];
  sprints: SprintState;
  setCurrentPage: Function;
}

const SprintQue: React.FC<IProps> = ({
  tickets,
  setCurrentPage,
  sprints: { sprint, ticketPage },
}) => {
  const currentTickets = setCurrentTickets(tickets, ticketPage);
  const paginate = (num: number) => setCurrentPage(num);
  const paginationProps = { count: tickets.length, paginate };

  const classNames = ['sprint-que', '', 'ticket-table'];
  let list = currentTickets.map((t: any) => <Ticket key={t._id} ticket={t} />);
  const queueProps = { headers, list, classNames };

  return (
    <>
      {sprint?._id ? (
        <Queue {...queueProps}>
          <Pagination {...paginationProps} />
        </Queue>
      ) : null}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  sprints: state.sprints,
  tickets: state.sprints.sprint?.tickets,
});

export default connect(mapStateToProps, { setCurrentPage })(SprintQue);
