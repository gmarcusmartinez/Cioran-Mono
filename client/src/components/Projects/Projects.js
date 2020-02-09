import React from "react";
import AddProject from "../AddProject/AddProject";

const Projects = () => {
  const [displayAddProject, setDisplayAddProject] = React.useState(false);

  return (
    <div className="projects" data-test="component-projects">
      <div className="header-area">
        <h2>Projects</h2>
        <button
          data-test="add-project-btn"
          onClick={() => setDisplayAddProject(!displayAddProject)}
        >
          <i className="fas fa-plus"></i>
        </button>
        {displayAddProject ? <AddProject /> : null}
      </div>
    </div>
  );
};

export default Projects;
