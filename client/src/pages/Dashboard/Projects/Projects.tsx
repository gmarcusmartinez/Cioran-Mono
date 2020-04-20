import React from "react";
import { Container, AddProjectBtn } from "./style";
import Project from "./Project-Item/Project";
import AddProject from "./AddProject/AddProject";

const Projects = () => {
  const [showAddProject, setShowAddProject] = React.useState(true);
  return (
    <Container>
      <AddProjectBtn onClick={() => setShowAddProject(!showAddProject)}>
        {showAddProject ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-plus"></i>
        )}
      </AddProjectBtn>
      {showAddProject ? <AddProject /> : null}
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </Container>
  );
};

export default Projects;
