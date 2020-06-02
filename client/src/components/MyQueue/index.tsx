import React from 'react';
import { connect } from 'react-redux';
import { ITicket } from '../../store/actions';
import Queue from '../common/Queue/Queue';
import MyQueTicket from './MyQueueTicket/MyQueTicket';

const headers = [
  { text: 'Project', sort: 'project' },
  { text: 'Ticket', sort: 'ticket' },
  { text: 'Due By', sort: 'date' },
];

interface MyQueProps {
  tickets: ITicket[];
}

const MyQue: React.FC<MyQueProps> = ({ tickets }) => {
  let list = tickets
    ? tickets.map((t) => <MyQueTicket key={t._id} ticket={t} />)
    : null;

  const classNames = ['my-que', 'my-que__th', 'my-que__ticket-table'];
  const props = {
    headers,
    list,
    classNames,
  };

  return <Queue {...props} />;
};

const mapStateToProps = (state: any) => ({
  tickets: state.auth.currentUser?.assignedTickets,
});

export default connect(mapStateToProps, {})(MyQue);
