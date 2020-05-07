import React from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../../store/actions';

interface IFormProps {
  createProject: Function;
}
interface FormState {
  title: string;
}

const CreateProjectForm: React.FC<IFormProps> = ({ createProject }) => {
  const [formData, setFormData] = React.useState<FormState>({
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
    createProject(formData);
    setFormData({ title: '' });
  };

  const { title } = formData;
  return (
    <form className='create-project-form' onSubmit={handleSubmit}>
      <div className='form-field'>
        <label>Project Name</label>
        <input type='text' name='title' value={title} onChange={handleChange} />
      </div>
      <button className='btn-primary' style={{ width: '40%' }}>
        Submit
      </button>
    </form>
  );
};

export default connect(null, { createProject })(CreateProjectForm);
