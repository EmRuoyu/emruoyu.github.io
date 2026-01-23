import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const PlayIcon: React.FC = () => (
    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
        </svg>
    </div>
);


const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-2xl mb-4 bg-gray-100 aspect-[4/3]">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {project.isVideo && <PlayIcon />}
      </div>
      <div className="px-1">
        <h3 className="text-2xl font-semibold text-black">{project.title} <span className="text-gray-500 font-normal">{project.year}</span></h3>
        {project.description && <p className="text-lg text-gray-600 mt-1">{project.description}</p>}
      </div>
    </div>
  );
};

export default ProjectCard;
