import React from 'react';
import { connect } from 'react-redux';

import Queue from 'components/common/Queue/Queue';
import Pagination from 'components/common/Pagination/Pagination';
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
  const itemsPerPage = 12;
  const currentTickets = setCurrentTickets(tickets, ticketPage, itemsPerPage);
  let list = currentTickets.map((t: any) => <Ticket key={t._id} ticket={t} />);
  const paginate = (num: number) => {
    setCurrentPage(num);
  };

  const classNames = ['sprint-que', '', 'ticket-table'];
  const queueProps = { headers, list, classNames };
  const paginationProps = { count: tickets.length, itemsPerPage, paginate };

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
