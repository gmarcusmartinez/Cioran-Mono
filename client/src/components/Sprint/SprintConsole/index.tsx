import React from 'react';
import { connect } from 'react-redux';
import { ISprint } from 'store/actions';
import StoryPoints from './StoryPoints';
import SprintDetails from './SprintDetails';
import CreateTicketBtn from './CreateTicketBtn';

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

interface IState {
  sprints: { sprint: ISprint };
}
const mapStateToProps = (state: IState) => ({
  sprint: state.sprints.sprint,
});

export default connect(mapStateToProps, {})(SprintConsole);
