import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectsItemProps {
  item: {
    _id: string;
    title: string;
    photo?: string;
  };
}

const ProjectItem: React.FC<ProjectsItemProps> = ({ item }) => {
  return (
    <Link
      to={`/project/${item._id}`}
      style={{ textDecoration: 'none' }}
      className='project-item'
    >
      <div className='project-item__title'>{item.title}</div>
    </Link>
  );
};

export default ProjectItem;
