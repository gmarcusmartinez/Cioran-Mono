import React from 'react';
import './styles.css';
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
      <div className='project-wrapper'>
        <div className='project-title'>{item.title}</div>
      </div>
    </Link>
  );
};

export default ProjectItem;
