import React from "react";
import {
  Container,
  Form,
  Title,
  Input,
  Label,
  FormControl,
  Submit,
} from "./style";

const AddProject = () => {
  return (
    <Container>
      <Form>
        <Title>Add Project</Title>
        <FormControl>
          <Label>Name</Label>
          <Input />
        </FormControl>
        <Submit>Submit</Submit>
      </Form>
    </Container>
  );
};

export default AddProject;
