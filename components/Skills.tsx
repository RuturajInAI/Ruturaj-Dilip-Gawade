import React from 'react';
import type { PortfolioContent } from '../types';

interface SkillsProps {
  content: PortfolioContent;
}

const Skills: React.FC<SkillsProps> = ({ content }) => {
  return (
    <section id="skills" className="py-20 sm:py-32 bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-mono uppercase tracking-wider">Skills Matrix</h2>
           <div className="mt-3 h-1 w-24 bg-cyan-500 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {content.skills.map((category, index) => (
                <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-orange-400 mb-4 font-mono">{category.category}</h3>
                    <ul className="flex flex-wrap gap-3">
                        {category.skills.map((skill, skillIndex) => (
                            <li key={skillIndex} className="bg-gray-800 border border-gray-600 rounded px-4 py-2 text-gray-300 font-medium transition-all duration-300 hover:bg-cyan-500/20 hover:text-white hover:border-cyan-500 cursor-default hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                                {skill.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;