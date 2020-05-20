import React from 'react';
import MyQueTicket from './MyQueTicket/MyQueTicket';
const headers = [
  { text: 'Project', sort: 'project' },
  { text: 'Ticket', sort: 'ticket' },
  { text: 'Story Points', sort: 'storyPoints' },
  { text: 'Due Date', sort: 'date' },
];

const MyQue = () => {
  const ths = headers.map((h) => (
    <th key={h.text} className='my-que__th'>
      {h.text}
    </th>
  ));

  return (
    <div className='my-que'>
      <table>
        <thead>
          <tr className='my-que__ticket-table'>{ths}</tr>
        </thead>
        <tbody>
          <MyQueTicket />
        </tbody>
      </table>
    </div>
  );
};

export default MyQue;
