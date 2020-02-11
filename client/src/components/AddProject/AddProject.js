import React from "react";

const AddProject = ({ setDisplayAddProject }) => {
  return (
    <div data-test="component-add-project" className="add-project">
      <button
        onClick={() => setDisplayAddProject(false)}
        className="close-add-project-btn"
      >
        X
      </button>
      <form data-test="add-project-form" className="add-project-form">
        <h3>Add Project</h3>
        <div className="input-field">
          <input
            type="text"
            name="projectName"
            // value={projectName}
            // onChange={e => onChange(e)}
            data-test="project-name-input"
          />
          <label>Project Name</label>
        </div>
        <input type="submit" value="Add" className="create-project-btn" />
      </form>
    </div>
  );
};

export default AddProject;
