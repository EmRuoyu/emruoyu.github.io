import React from 'react';
import { worksData } from '../constants';
import ProjectCard from '../components/ProjectCard';

interface WorksPageProps {
  onWorkClick?: (workId: number) => void;
}

const WorksPage: React.FC<WorksPageProps> = ({ onWorkClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
      {worksData.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          onClick={() => onWorkClick?.(project.id)}
        />
      ))}
    </div>
  );
};

export default WorksPage;
