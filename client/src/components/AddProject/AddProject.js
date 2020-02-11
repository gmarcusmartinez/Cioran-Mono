import React from "react";

const AddProject = ({ setDisplayAddProject }) => {
  const [formData, setFormData] = React.useState({
    projectName: ""
  });

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const { projectName } = formData;
  return (
    <div data-test="component-add-project" className="add-project">
      <button
        onClick={() => setDisplayAddProject(false)}
        className="close-add-project-btn"
      >
        X
      </button>
      <form
        data-test="add-project-form"
        className="add-project-form"
        onSubmit={e => onSubmit(e)}
      >
        <h3>Add Project</h3>
        <div className="input-field">
          <input
            type="text"
            name="projectName"
            value={projectName}
            onChange={e => onChange(e)}
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
