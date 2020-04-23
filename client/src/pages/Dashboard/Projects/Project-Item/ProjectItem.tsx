import React from "react";
import { Container, Title } from "./style";
import { Link } from "react-router-dom";

interface ProjectsItemProps {
  item: {
    _id: string;
    title: string;
    photo?: string;
  };
}

const ProjectItem: React.FC<ProjectsItemProps> = ({ item }) => {
  return (
    <Link to={`/project/${item._id}`} style={{ textDecoration: "none" }}>
      <Container>
        <Title>{item.title}</Title>
      </Container>
    </Link>
  );
};

export default ProjectItem;
