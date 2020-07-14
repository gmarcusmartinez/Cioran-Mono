import React from 'react';
import { ISprint } from 'store/actions';

interface IProps {
  setDisplayModal: Function;
  sprint: ISprint;
}

const CreateTicketBtn: React.FC<IProps> = ({ setDisplayModal, sprint }) => {
  return sprint?._id ? (
    <div onClick={() => setDisplayModal(true)} id='create-ticket-btn'>
      Create Ticket
    </div>
  ) : null;
};

export default CreateTicketBtn;
