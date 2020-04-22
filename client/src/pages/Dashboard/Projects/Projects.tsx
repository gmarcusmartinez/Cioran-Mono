import React from "react";
import { Container, AddProjectBtn } from "./style";
// import ProjectItem from "./Project-Item/Project";
import AddProject from "./AddProject/AddProject";

const Projects = () => {
  const [showAddProject, setShowAddProject] = React.useState(false);
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
    </Container>
  );
};

export default Projects;
