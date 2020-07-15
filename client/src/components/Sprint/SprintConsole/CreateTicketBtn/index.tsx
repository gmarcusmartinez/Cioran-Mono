import React from 'react';
import { connect } from 'react-redux';
import { ISprint } from 'store/actions';
import { setDisplayModal } from 'store/actions';

interface IProps {
  setDisplayModal: Function;
  sprint: ISprint;
}

const CreateTicketBtn: React.FC<IProps> = ({ setDisplayModal, sprint }) => {
  return sprint?._id ? (
    <div
      onClick={() => setDisplayModal(true, 'CREATE_TICKET')}
      id='create-ticket-btn'
    >
      Create Ticket
    </div>
  ) : null;
};

export default connect(null, { setDisplayModal })(CreateTicketBtn);
