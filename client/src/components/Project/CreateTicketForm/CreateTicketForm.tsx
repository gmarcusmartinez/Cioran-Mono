import React from 'react';
import { connect } from 'react-redux';
import { createTicket } from '../../../store/actions';
import { FormInput, FormSelect, FormTextArea } from '../../common/Form';

import {
  formInitialState,
  ticketTypeOptions,
  storyPointOptions,
} from './options';

interface CreateTicketFormProps {
  sprint_id: string | null;
  createTicket: Function;
}
interface FormState {
  title: string;
  type: string;
  storyPoints: number;
  description: string;
}

const CreateTicketForm: React.FC<CreateTicketFormProps> = ({
  sprint_id,
  createTicket,
}) => {
  const [formData, setFormData] = React.useState<FormState>(formInitialState);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTicket(formData, sprint_id!);
    setFormData(formInitialState);
  };

  const renderOptions = (arr: any[]) => {
    return arr.map((el) => <option key={el.text}>{el.text}</option>);
  };
  const { title, type, storyPoints, description } = formData;

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
        value={type}
        name='type'
        onChange={handleChange}
        renderOptions={renderOptions}
        options={ticketTypeOptions}
      />
      <FormSelect
        label='Story Points'
        value={storyPoints}
        name='storyPoints'
        onChange={handleChange}
        renderOptions={renderOptions}
        options={storyPointOptions}
      />
      <FormTextArea
        label='description'
        value={description}
        name='description'
        onChange={handleChange}
      />
      <button className='btn-primary' style={{ height: '4rem' }}>
        Submit
      </button>
    </form>
  );
};
export default connect(null, { createTicket })(CreateTicketForm);
