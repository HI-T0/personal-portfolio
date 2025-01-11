import React, { useState, MouseEvent } from 'react';
import Link from 'next/link';
import { Card, CardContent } from './Card';
import { cn } from '../utils/cn';

interface Project {
  title: string;
  description: string;
  tech: string[];
  status: string;
  color: string;
  url?: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  const [expandedDescriptions, setExpandedDescriptions] = useState<{ [key: number]: boolean }>({});

  const toggleDescription = (e: MouseEvent<HTMLButtonElement>, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedDescriptions(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <Link 
          key={index}
          href={project.url || '#'}
          passHref
          legacyBehavior
        >
          <a className={cn(
            "block transition-all duration-300 hover:scale-105",
            { "pointer-events-none": !project.url }
          )}>
            <Card className="border-transparent h-full flex flex-col hover:shadow-xl">
              <CardContent className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold bg-gradient-to-r text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                    {project.title}
                  </h3>
                  <span className={cn(
                    "text-sm px-3 py-1 rounded-full text-white font-medium bg-gradient-to-r",
                    project.color
                  )}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">
                  {project.description.length > 82 && !expandedDescriptions[index]
                    ? `${project.description.slice(0, 82)}...`
                    : project.description}
                </p>
                {project.description.length > 82 && (
                  <button
                    onClick={(e) => toggleDescription(e, index)}
                    className="text-purple-600 hover:text-purple-800 transition-colors duration-200 text-sm mb-4"
                  >
                    {expandedDescriptions[index] ? 'Read less' : 'Read more'}
                  </button>
                )}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-sm px-3 py-1 rounded-full bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </a>
        </Link>
      ))}
    </div>
  );
};

