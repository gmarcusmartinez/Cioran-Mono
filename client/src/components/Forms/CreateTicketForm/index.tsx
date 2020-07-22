import React from 'react';
import { connect } from 'react-redux';
import { FormInput, FormSelect, FormTextArea } from 'components/common/Form';
import {
  createTicket,
  FormState,
  setAlert,
  setDisplayModal,
} from 'store/actions';
import * as options from './options';
import { IState } from 'interfaces/state';
import { selectProjectId } from 'store/selectors/projects';
import { selectSprintId } from 'store/selectors/sprints';

interface IProps {
  sprint_id: string | null;
  project_id: string;
  createTicket: Function;
  setDisplayModal: Function;
  setAlert: Function;
}
interface Option {
  text: string;
}

const CreateTicketForm: React.FC<IProps> = ({
  createTicket,
  sprint_id,
  project_id,
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
      project_id,
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
      setDisplayModal(false);
      setAlert(err.message, 'fail');
    }
  };

  const renderOptions = (arr: Option[]) => {
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
const mapStateToProps = (state: IState) => ({
  sprint_id: selectSprintId(state),
  project_id: selectProjectId(state),
});

export default connect(mapStateToProps, {
  createTicket,
  setAlert,
  setDisplayModal,
})(CreateTicketForm);
