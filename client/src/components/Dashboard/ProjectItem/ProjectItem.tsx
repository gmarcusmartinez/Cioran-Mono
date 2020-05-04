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
    <Link to={`/project/${item._id}`} style={{ textDecoration: 'none' }}>
      <div className='project'>
        <div className='project__title'>{item.title}</div>
      </div>
    </Link>
  );
};

export default ProjectItem;
