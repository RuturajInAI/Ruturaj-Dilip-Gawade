import React from 'react';
import type { PortfolioContent } from '../types';

interface AboutProps {
  content: PortfolioContent;
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono uppercase tracking-wider">Operator Profile</h2>
            <div className="mt-3 h-1 w-24 bg-cyan-500 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="flex justify-center md:col-span-1">
                <div className="w-48 h-48 flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48 text-gray-700 animate-spin" style={{ animationDuration: '20s' }} fill="none" viewBox="0 0 100 100">
                     <path stroke="currentColor" strokeWidth="2" d="M50 10V2m0 96v-8m40-40h8M2 50h8m35.36-28.28l5.65-5.66M14.64 85.36l-5.65 5.65m56.57 0l5.65 5.65M14.64 14.64l-5.65-5.65m5.65 5.65a30 30 0 1042.42 42.43A30 30 0 0050 20z" />
                     <path stroke="currentColor" strokeWidth="2" d="M50 50a15 15 0 11-15 15" />
                   </svg>
                </div>
            </div>
            <div className="md:col-span-2 text-lg text-gray-400 text-left">
                <p className="border-l-4 border-cyan-500 pl-6">
                    {content.about}
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;