import React from 'react';
import { connect } from 'react-redux';
import { FormInput } from '../../common/Form';
import DatePicker from '../../common/DatePicker/DatePicker';

interface CreateSprintFormProps {}

const CreateSprintForm: React.FC<CreateSprintFormProps> = ({}) => {
  const [formData, setFormData] = React.useState({
    title: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ title: '' });
  };

  const { title } = formData;
  return (
    <form className='create-sprint-form' onSubmit={handleSubmit}>
      <FormInput
        label='Sprint Title'
        name='title'
        value={title}
        onChange={handleChange}
      />
      <DatePicker label='Start Date' />
      <DatePicker label='End Date' />
      <button className='btn-dark'>Submit</button>
    </form>
  );
};

export default connect(null, {})(CreateSprintForm);
