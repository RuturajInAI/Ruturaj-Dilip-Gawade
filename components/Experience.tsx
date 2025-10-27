import React from 'react';
import type { PortfolioContent } from '../types';

interface ExperienceProps {
  content: PortfolioContent;
}

const Experience: React.FC<ExperienceProps> = ({ content }) => {
  return (
    <section id="experience" className="py-20 sm:py-32 bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-mono uppercase tracking-wider">Service Record</h2>
          <div className="mt-3 h-1 w-24 bg-cyan-500 rounded"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-gray-700/50">
            {content.experience.map((job, index) => (
              <div key={index} className="mb-10 ml-8">
                <div className="absolute w-5 h-5 bg-gray-800 rounded-full -left-2.5 border-2 border-cyan-500"></div>
                <p className="text-sm font-semibold text-orange-400 font-mono">{job.period}</p>
                <h3 className="text-xl font-bold text-white mt-1">{job.title}</h3>
                <h4 className="text-md font-semibold text-gray-400">{job.company}</h4>
                <p className="mt-2 text-gray-400">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;