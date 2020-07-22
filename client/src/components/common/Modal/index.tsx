import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { setDisplayModal } from 'store/actions';
import CreateTicketForm from 'components/Forms/CreateTicketForm';
import CreateProjectForm from 'components/Forms/CreateProjectForm';
import { IState } from 'interfaces/state';
import { selectComponent } from 'store/selectors/modal';

interface IProps {
  component: string;
  setDisplayModal: Function;
}

const Modal: React.FC<IProps> = ({ component, setDisplayModal }) => {
  const renderContent = () => {
    switch (component) {
      case 'CREATE_PROJECT':
        return <CreateProjectForm />;
      case 'CREATE_TICKET':
        return <CreateTicketForm />;
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

const mapStateToProps = (state: IState) => ({
  component: selectComponent(state),
});

export default connect(mapStateToProps, { setDisplayModal })(Modal);
