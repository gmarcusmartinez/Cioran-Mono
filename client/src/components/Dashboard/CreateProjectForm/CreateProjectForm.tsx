import React from 'react';
import { connect } from 'react-redux';
import { addProject } from '../../../store/actions';

interface FormState {
  title: string;
}

interface IFormProps {
  addProject: Function;
}

const CreateProjectForm: React.FC<IFormProps> = ({ addProject }) => {
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
    addProject(formData);
    setFormData({ title: '' });
  };

  const { title } = formData;
  return (
    <div className='overlay'>
      <form className='add-project-form' onSubmit={handleSubmit}>
        <h3>Create Project</h3>
        <div className='form-field'>
          <label>Project Name</label>
          <input
            type='text'
            name='title'
            value={title}
            onChange={handleChange}
          />
        </div>
        <button className='btn'>Submit</button>
      </form>
    </div>
  );
};

export default connect(null, { addProject })(CreateProjectForm);
