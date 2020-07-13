import React from 'react';
import { connect } from 'react-redux';

import { ITicket } from 'store/actions';
import Queue from '../common/Queue/Queue';
import MyQueTicket from './MyQueueTicket/index.';

interface IProps {
  tickets: ITicket[];
}

const MyQue: React.FC<IProps> = ({ tickets }) => {
  const headers = [
    { text: 'Project', sort: 'project' },
    { text: 'Ticket', sort: 'ticket' },
    { text: 'Due By', sort: 'date' },
  ];

  let list = tickets
    ? tickets.map((t) => <MyQueTicket key={t._id} ticket={t} />)
    : null;

  const classNames = ['my-que', 'my-que__th', 'my-que__ticket-table'];
  const props = { headers, list, classNames };

  return <Queue {...props} />;
};

interface IState {
  auth: {
    currentUser: {
      assignedTickets: ITicket[];
    };
  };
}

const mapStateToProps = (state: IState) => ({
  tickets: state.auth.currentUser?.assignedTickets,
});

export default connect(mapStateToProps, {})(MyQue);
