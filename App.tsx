import React, { useState, useEffect } from 'react';
import { getPortfolioContent } from './services/geminiService';
import type { PortfolioContent } from './types';
import Header from './components/Header';
import Loader from './components/Loader';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DynamicBackground from './components/DynamicBackground';


const App: React.FC = () => {
  const [content, setContent] = useState<PortfolioContent | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await getPortfolioContent();
        setContent(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      } finally {
        setIsLoading(false);
      }
    };
    loadContent();
  }, []);

  if (isLoading) {
    return (
       <div className="min-h-screen flex items-center justify-center bg-gray-900">
         <Loader />
       </div>
    )
  }
  
  if (error) {
     return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="text-center bg-red-900/50 border border-red-700 text-red-300 p-6 rounded-lg max-w-lg mx-auto">
              <p className="font-bold text-xl mb-2">An Error Occurred</p>
              <p>{error}</p>
              <p className="mt-4 text-sm">Please try refreshing the page. If the problem persists, check the developer console.</p>
            </div>
        </div>
     )
  }


  return (
    <div className="min-h-screen text-gray-300 font-sans selection:bg-cyan-500/30">
        <DynamicBackground />
        <Header content={content} />
        <div className="relative z-10 md:ml-64">
          <main>
            {content && (
              <>
                <Hero content={content} />
                <About content={content} />
                <Skills content={content} />
                <Projects content={content} />
                <Experience content={content} />
                <Contact content={content} />
              </>
            )}
          </main>
          {content && <Footer content={content} />}
        </div>
    </div>
  );
};

export default App;