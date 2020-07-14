import React from 'react';
import { connect } from 'react-redux';
import Modal from '../../common/Modal';
import { ISprint } from 'store/actions';
import StoryPoints from './StoryPoints';
import SprintDetails from './SprintDetails';
import CreateTicketBtn from './CreateTicketBtn';
import CreateTicketForm from '../../Forms/CreateTicketForm';

interface IProps {
  sprint?: ISprint | null;
}
const SprintConsole: React.FC<IProps> = ({ sprint }) => {
  const [displayModal, setDisplayModal] = React.useState(false);

  const renderModal = () => {
    return displayModal ? (
      <Modal title='Create Ticket' showModal={setDisplayModal}>
        <CreateTicketForm
          sprint_id={sprint!._id}
          setDisplayModal={setDisplayModal}
        />
      </Modal>
    ) : null;
  };

  if (!sprint) return <div>Loading...</div>;
  return (
    <>
      <div className='sprint-console'>
        <SprintDetails sprint={sprint} />
        <CreateTicketBtn sprint={sprint} setDisplayModal={setDisplayModal} />
        <StoryPoints sprint={sprint} />
      </div>
      {renderModal()}
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
