import React from 'react';
import type { PortfolioContent } from '../types';

interface HeaderProps {
  content: PortfolioContent | null;
}

// FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
const NavLink: React.FC<{ href: string, icon: React.ReactElement, text: string }> = ({ href, icon, text }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.substring(1); // remove the '#'
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return (
  <a
    href={href}
    onClick={handleNavClick}
    className="flex items-center space-x-3 p-3 rounded-md text-gray-400 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-200 group"
  >
    {icon}
    <span className="font-medium">{text}</span>
  </a>
)};

const Header: React.FC<HeaderProps> = ({ content }) => {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  }

  return (
    <header className="hidden md:flex flex-col w-64 h-screen fixed top-0 left-0 bg-gray-900/70 backdrop-blur-md border-r border-gray-700/50 p-6 z-50">
      <div className="flex flex-col items-center mb-12">
        <a href="#hero" className="text-white text-3xl font-bold border-2 border-cyan-400 rounded-full w-20 h-20 flex items-center justify-center bg-gray-800 hover:border-cyan-300 transition-colors animate-glow">
          {content ? getInitials(content.name) : ''}
        </a>
        {content && <h2 className="text-white text-xl font-semibold mt-4">{content.name}</h2>}
        {content && <p className="text-sm text-cyan-400">{content.title}</p>}
      </div>
      <nav className="flex flex-col space-y-2">
        <NavLink href="#about" icon={<IconUser />} text="Operator Profile" />
        <NavLink href="#skills" icon={<IconChip />} text="Skills Matrix" />
        <NavLink href="#projects" icon={<IconFolder />} text="Project Dossier" />
        <NavLink href="#experience" icon={<IconTimeline />} text="Service Record" />
        <NavLink href="#contact" icon={<IconLink />} text="Comms Link" />
      </nav>
    </header>
  );
};

// Icons
const IconUser = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const IconChip = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V4m0 16v-2M8 8l2-2 2 2 2-2 2 2M12 12h.01M16 12h.01M8 12h.01M12 16h.01" /></svg>;
const IconFolder = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>;
const IconTimeline = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const IconLink = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>;

export default Header;