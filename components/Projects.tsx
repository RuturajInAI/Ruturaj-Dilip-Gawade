import React from 'react';
import type { PortfolioContent } from '../types';

interface ProjectsProps {
  content: PortfolioContent;
}

const Projects: React.FC<ProjectsProps> = ({ content }) => {
  return (
    <section id="projects" className="py-20 sm:py-32 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-mono uppercase tracking-wider">Project Dossier</h2>
          <div className="mt-3 h-1 w-24 bg-cyan-500 rounded"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {content.projects.map((project, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out flex flex-col p-6 group hover:border-orange-400/50">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-cyan-400 group-hover:text-orange-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-green-400">Completed</span>
                </div>
              </div>
              <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-700 text-gray-300 text-xs font-semibold px-2.5 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                 <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-semibold inline-flex items-center">
                  Access File
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                 </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;