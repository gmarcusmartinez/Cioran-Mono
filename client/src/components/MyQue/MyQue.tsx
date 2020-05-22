import React from 'react';
import { connect } from 'react-redux';
import { ITicket } from '../../store/actions';
import MyQueTicket from './MyQueTicket/MyQueTicket';

const headers = [
  { text: 'Project', sort: 'project' },
  { text: 'Ticket', sort: 'ticket' },
  { text: 'Story Points', sort: 'storyPoints' },
  { text: 'Due Date', sort: 'date' },
];

interface MyQueProps {
  tickets: ITicket[];
}

const MyQue: React.FC<MyQueProps> = ({ tickets }) => {
  const ths = headers.map((h) => (
    <th key={h.text} className='my-que__th'>
      {h.text}
    </th>
  ));

  let list = tickets
    ? tickets.map((t) => <MyQueTicket key={t._id} ticket={t} />)
    : null;

  return (
    <div className='my-que'>
      <table>
        <thead>
          <tr className='my-que__ticket-table'>{ths}</tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  tickets: state.auth.currentUser?.assignedTickets,
});
export default connect(mapStateToProps, {})(MyQue);
