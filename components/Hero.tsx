import React, { useState, useEffect } from 'react';
import type { PortfolioContent } from '../types';

interface HeroProps {
  content: PortfolioContent;
}

const Typewriter: React.FC<{ text: string; className: string }> = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    setDisplayedText('');
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i > text.length) {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [text]);

  return <span className={className}>{displayedText}</span>;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section id="hero" className="relative flex items-center justify-center h-screen text-left overflow-hidden px-4 sm:px-6 lg:px-8">
       <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute bg-cyan-600/20 rounded-full filter blur-3xl opacity-50 w-96 h-96 top-1/4 left-1/4 animate-pulse-bright"></div>
        <div className="absolute bg-orange-600/20 rounded-full filter blur-3xl opacity-50 w-96 h-96 bottom-1/4 right-1/4 animate-pulse-bright animation-delay-4000"></div>
      </div>
      <div className="z-20 relative font-mono">
        <p className="text-lg md:text-xl text-green-400 mb-2">&gt; SYSTEM STATUS: <span className="animate-pulse">ONLINE</span></p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
          <span className="text-gray-400">OPERATOR: </span> 
          <Typewriter text={content.name} className="text-cyan-400" />
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-orange-400 mb-6">
          <Typewriter text={content.title} className="" />
        </p>
        <p className="max-w-3xl text-lg md:text-xl text-gray-400 mb-8">
          {content.tagline}
        </p>
        <a
          href="#projects"
          className="inline-block px-8 py-3 bg-cyan-500/10 border border-cyan-500 text-cyan-400 font-bold rounded-md transition-all duration-300 ease-in-out hover:bg-cyan-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75"
        >
          View Project Dossier
        </a>
      </div>
    </section>
  );
};

export default Hero;