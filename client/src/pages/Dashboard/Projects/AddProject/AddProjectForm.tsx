import React from "react";
import { connect } from "react-redux";
import { Overlay, Form, Btn, FormField } from "./style";
import { addProject } from "../../../../store/actions";

interface FormState {
  title: string;
}

interface IFormProps {
  addProject: Function;
}

const AddProjectForm: React.FC<IFormProps> = ({ addProject }) => {
  const [formData, setFormData] = React.useState<FormState>({
    title: "",
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
    setFormData({ title: "" });
  };

  const { title } = formData;
  return (
    <Overlay>
      <Form onSubmit={handleSubmit}>
        <h3>Add Project</h3>
        <FormField>
          <label>Project Name</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </FormField>
        <Btn>Submit</Btn>
      </Form>
    </Overlay>
  );
};

export default connect(null, { addProject })(AddProjectForm);
