import React from 'react';
import { connect } from 'react-redux';
import StoryPoints from './StoryPoints';
import SprintDetails from './SprintDetails';
import CreateTicketBtn from './CreateTicketBtn';
import { ISprint } from 'interfaces';
import { IState } from 'interfaces/state';
import { selectSprint } from 'store/selectors/sprints';

interface IProps {
  sprint?: ISprint | null;
}
const SprintConsole: React.FC<IProps> = ({ sprint }) => {
  if (!sprint) return <div>Loading...</div>;
  return (
    <>
      <div className='sprint-console'>
        <SprintDetails sprint={sprint} />
        <CreateTicketBtn sprint={sprint} />
        <StoryPoints sprint={sprint} />
      </div>
    </>
  );
};

const mapStateToProps = (state: IState) => ({
  sprint: selectSprint(state),
});

export default connect(mapStateToProps, {})(SprintConsole);
