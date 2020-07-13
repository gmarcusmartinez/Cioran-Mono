import React from 'react';
import { connect } from 'react-redux';
import { createTicket, FormState, setAlert } from '../../../store/actions';
import { FormInput, FormSelect, FormTextArea } from '../../common/Form';
import * as options from './options';

interface IProps {
  sprint_id: string | null;
  projectId: string;
  createTicket: Function;
  setDisplayModal: Function;
  setAlert: Function;
}

const CreateTicketForm: React.FC<IProps> = ({
  sprint_id,
  createTicket,
  projectId,
  setAlert,
  setDisplayModal,
}) => {
  const [formData, setFormData] = React.useState<FormState>(
    options.formInitialState
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      projectId,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await createTicket(formData, sprint_id!);
      setFormData(options.formInitialState);
      setDisplayModal(false);
      setAlert('Ticket Created', 'success');
    } catch (err) {
      console.log(err.message);
    }
  };

  const renderOptions = (arr: any[]) => {
    return arr.map((el) => <option key={el.text}>{el.text}</option>);
  };
  const { title, ticketType, priority, storyPoints, description } = formData;

  return (
    <form onSubmit={handleSubmit} className='create-ticket-form'>
      <FormInput
        label='Ticket Title'
        name='title'
        value={title}
        onChange={handleChange}
      />
      <FormSelect
        label='Ticket Type'
        value={ticketType}
        name='ticketType'
        onChange={handleChange}
        renderOptions={renderOptions}
        options={options.ticketTypeOptions}
      />
      <FormSelect
        label='Story Points'
        value={storyPoints}
        name='storyPoints'
        onChange={handleChange}
        renderOptions={renderOptions}
        options={options.storyPointOptions}
      />
      <FormSelect
        label='Priority'
        value={priority}
        name='priority'
        onChange={handleChange}
        renderOptions={renderOptions}
        options={options.priorityOptions}
      />
      <FormTextArea
        label='description'
        value={description}
        name='description'
        onChange={handleChange}
      />
      <button className='btn-dark'>Submit</button>
    </form>
  );
};
const mapStateToProps = (state: any) => ({
  projectId: state.projects.project._id,
});

export default connect(mapStateToProps, { createTicket, setAlert })(
  CreateTicketForm
);
