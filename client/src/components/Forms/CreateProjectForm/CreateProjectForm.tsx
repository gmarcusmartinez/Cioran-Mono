import React from 'react';
import { connect } from 'react-redux';
import { createProject, ICreateProjectFormState } from '../../../store/actions';
import { FormInput } from '../../common/Form';

interface ICreateProjectFormProps {
  createProject: Function;
}

const CreateProjectForm: React.FC<ICreateProjectFormProps> = ({
  createProject,
}) => {
  const [formData, setFormData] = React.useState<ICreateProjectFormState>({
    title: '',
    slug: '',
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
    setFormData({ title: '', slug: '' });
  };

  const { title, slug } = formData;
  return (
    <form className='create-project-form' onSubmit={handleSubmit}>
      <FormInput
        label='Project Name'
        name='title'
        value={title}
        onChange={handleChange}
      />
      <FormInput
        label='Project Slug'
        name='slug'
        value={slug}
        onChange={handleChange}
        info='Slug should be between 4-6 characters'
      />
      <button className='btn-dark'>Submit</button>
    </form>
  );
};

export default connect(null, { createProject })(CreateProjectForm);
