import React from 'react';
import { connect } from 'react-redux';

import { Sprint } from '../../../store/actions';
import { createTicket } from '../../../store/actions';
import FormSelect from '../../common/FormSelect/FormSelect';

interface CreateTicketFormProps {
  selectedSprint: Sprint | null;
  createTicket: Function;
}
interface FormState {
  title: string;
  type: string;
  storyPoints: number;
  description: string;
}

const ticketTypeOptions = [
  { text: 'task' },
  { text: 'feature' },
  { text: 'bug' },
  { text: 'tests' },
];
const storyPointOptions = [
  { text: 1 },
  { text: 2 },
  { text: 3 },
  { text: 5 },
  { text: 8 },
  { text: 13 },
];
const formInitialState = {
  title: '',
  type: '',
  storyPoints: 1,
  description: '',
};
const CreateTicketForm: React.FC<CreateTicketFormProps> = ({
  selectedSprint,
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
    createTicket(formData, selectedSprint!._id);
    setFormData(formInitialState);
  };

  const renderOptions = (arr: any[]) => {
    return arr.map((el) => <option key={el.text}>{el.text}</option>);
  };
  const { title, type, storyPoints, description } = formData;

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-field'>
        <label>Ticket Title</label>
        <span className='form-field__required'>*</span>
        <input type='text' name='title' value={title} onChange={handleChange} />
      </div>
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
      <div className='form-field'>
        <label>Description</label>
        <textarea
          value={description}
          onChange={handleChange}
          rows={2}
          name='description'
        ></textarea>
      </div>

      <button
        className='btn-primary'
        style={{ width: '40%', alignSelf: 'flex-end' }}
      >
        Submit
      </button>
    </form>
  );
};
export default connect(null, { createTicket })(CreateTicketForm);
