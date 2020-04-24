import React from "react";
import { Overlay, Form, Btn, FormField } from "./style";

interface FormState {
  title: string;
}

const AddProjectForm = () => {
  const [formState, setFormState] = React.useState<FormState>({
    title: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState);
  };

  const { title } = formState;
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

export default AddProjectForm;
