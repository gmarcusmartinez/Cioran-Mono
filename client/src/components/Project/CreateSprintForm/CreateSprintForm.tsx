import React from 'react';
import { connect } from 'react-redux';
import { FormInput } from '../../common/Form';

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
    <form className='create-project-form' onSubmit={handleSubmit}>
      <FormInput
        label='Sprint Title'
        name='title'
        value={title}
        onChange={handleChange}
      />
      <button className='btn-primary' style={{ width: '40%' }}>
        Submit
      </button>
    </form>
  );
};

export default connect(null, {})(CreateSprintForm);
