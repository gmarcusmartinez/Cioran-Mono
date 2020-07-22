import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { setDisplayModal } from 'store/actions';
import CreateTicketForm from 'components/Forms/CreateTicketForm';
import CreateProjectForm from 'components/Forms/CreateProjectForm';
import MyQueueTicket from 'components/MyQueue/MyQueueTicket/index.';
import { ITicket } from 'interfaces';

interface IProps {
  component: string;
  setDisplayModal: Function;
  ticket?: ITicket;
}

const Modal: React.FC<IProps> = ({ component, setDisplayModal, ticket }) => {
  const renderContent = () => {
    switch (component) {
      case 'CREATE_PROJECT':
        return <CreateProjectForm />;
      case 'CREATE_TICKET':
        return <CreateTicketForm />;
      // case 'MY_QUEUE_TICKET':
      //   return <MyQueueTicket />
      default:
        return null;
    }
  };

  return ReactDOM.createPortal(
    <div className='modal' onClick={() => setDisplayModal(false)}>
      <div className='modal__body' onClick={(e) => e.stopPropagation()}>
        <div className='modal__content'>{renderContent()}</div>
      </div>
    </div>,
    document.querySelector('#modal')!
  );
};

const mapStateToProps = (state: any) => ({
  component: state.modal.component,
  ticket: state.tickets.ticket,
});
export default connect(mapStateToProps, { setDisplayModal })(Modal);
