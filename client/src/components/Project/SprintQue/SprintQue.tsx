import React from 'react';
import './styles.scss';
import Ticket from '../Ticket/Ticket';
import { Sprint } from '../../../store/actions';

const headers = ['Item', 'Type', 'Assigned To', 'Status', 'Story Points'];
const ths = headers.map((h) => <th key={h}>{h}</th>);

interface SprintQueProps {
  selectedSprint: Sprint | null;
}

const SprintQue: React.FC<SprintQueProps> = ({ selectedSprint }) => {
  React.useEffect(() => {
    if (selectedSprint) console.log(selectedSprint._id);
  }, [selectedSprint]);

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
        <tbody>
          <Ticket
            title='Test Component'
            type='Task'
            assignedTo='Marcus'
            status='Assigned'
            storyPoints={1}
          />
        </tbody>
      </table>
    </div>
  );
};

export default SprintQue;
