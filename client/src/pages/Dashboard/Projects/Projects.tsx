import React from "react";
import { connect } from "react-redux";

import AddProject from "./AddProject/AddProjectForm";
import { Container, AddProjectBtn } from "./style";
import ProjectItem from "./Project-Item/ProjectItem";
import { fetchProjects, Project } from "../../../store/actions/projects";

interface ProjectsProps {
  fetchProjects: Function;
  projects: {
    loading: boolean;
    count: number;
    pagination: {};
    items: Project[];
  };
}

const Projects: React.FC<ProjectsProps> = ({ fetchProjects, projects }) => {
  const [showAddProject, setShowAddProject] = React.useState(false);

  React.useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  let list = projects.items
    ? projects.items.map((p) => <ProjectItem key={p._id} item={p} />)
    : null;

  return (
    <Container>
      <AddProjectBtn onClick={() => setShowAddProject(!showAddProject)}>
        <i className={`fas fa-${showAddProject ? "times" : "plus"}`}></i>
      </AddProjectBtn>
      {showAddProject ? <AddProject /> : null}
      {list}
    </Container>
  );
};
const mapStateToProps = (state: any) => ({
  projects: state.projects,
});

export default connect(mapStateToProps, { fetchProjects })(Projects);
