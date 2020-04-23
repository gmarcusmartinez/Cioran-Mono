import React from "react";
import { Container, Title } from "./style";

interface ProjectsItemProps {
  item: {
    _id: string;
    title: string;
    photo?: string;
  };
}

const ProjectItem: React.FC<ProjectsItemProps> = ({ item }) => {
  return (
    <Container>
      <Title>{item.title}</Title>
    </Container>
  );
};

export default ProjectItem;
