import React from 'react';
import type { PortfolioContent } from '../types';

interface ContactProps {
  content: PortfolioContent;
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-mono uppercase tracking-wider">Establish Comms Link</h2>
        <div className="mt-4 h-1 w-24 bg-cyan-500 mx-auto rounded"></div>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-400">
          Systems are nominal and ready to receive incoming transmissions. Open to new projects and collaborations.
        </p>
        <div className="mt-8">
          <a
            href={`mailto:${content.contact.email}`}
            className="inline-block px-10 py-5 bg-orange-500/90 text-gray-900 font-bold text-lg rounded-md transition-all duration-300 ease-in-out hover:bg-orange-400 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-400/50 border-b-4 border-orange-700 hover:border-orange-500"
          >
            Initiate Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;