import React from 'react';
import { worksData } from '../constants';
import ProjectCard from '../components/ProjectCard';

const WorksPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
      {worksData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default WorksPage;
