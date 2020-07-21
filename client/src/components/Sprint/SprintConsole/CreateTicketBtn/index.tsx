import React from 'react';
import { connect } from 'react-redux';
import { ISprint } from 'interfaces';
import { setDisplayModal } from 'store/actions';

interface IProps {
  setDisplayModal: Function;
  sprint: ISprint;
}

const CreateTicketBtn: React.FC<IProps> = ({ setDisplayModal, sprint }) => {
  const handleClick = () => setDisplayModal(true, 'CREATE_TICKET');

  return sprint?._id ? (
    <div onClick={handleClick} id='create-ticket-btn'>
      Create Ticket
    </div>
  ) : null;
};

export default connect(null, { setDisplayModal })(CreateTicketBtn);
