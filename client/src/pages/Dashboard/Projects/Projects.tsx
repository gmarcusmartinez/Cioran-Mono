import React from "react";
import { connect } from "react-redux";

import AddProject from "./AddProject/AddProject";
import { Container, AddProjectBtn } from "./style";
import ProjectItem from "./Project-Item/ProjectItem";
import { fetchProjects, Project } from "../../../store/actions/projects";

interface ProjectsProps {
  fetchProjects: Function;
  projects: {
    success: boolean;
    count: number;
    pagination: {};
    data: Project[];
  };
}

const Projects: React.FC<ProjectsProps> = ({ fetchProjects, projects }) => {
  const [showAddProject, setShowAddProject] = React.useState(false);

  React.useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  let list = projects.data
    ? projects.data.map((p) => <ProjectItem key={p._id} item={p} />)
    : null;

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
      {list}
    </Container>
  );
};
const mapStateToProps = (state: any) => ({
  projects: state.projects,
});

export default connect(mapStateToProps, { fetchProjects })(Projects);
