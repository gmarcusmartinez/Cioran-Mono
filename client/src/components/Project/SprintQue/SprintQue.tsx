import React from 'react';
import './styles.scss';
import Ticket from '../Ticket/Ticket';

const headers = ['Item', 'Type', 'Assigned To', 'Status', 'Story Points'];
const ths = headers.map((h) => <th key={h}>{h}</th>);

const SprintQue = () => {
  return (
    <div className='sprint-que'>
      <div className='sq-title'>
        <h3>Sprint A Que</h3>
        <p>27/04/20 - 3/5/20</p>
      </div>
      <table>
        <tr className='ticket-table'>{ths}</tr>
        <Ticket
          title='Test Component'
          type='Task'
          assignedTo='Marcus'
          status='Assigned'
          storyPoints={1}
        />
      </table>
    </div>
  );
};

export default SprintQue;
