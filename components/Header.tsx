import React from 'react';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-spaceBlack/80 border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold font-serif text-starlight tracking-tight">The Architecture of Empathy</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-6 mr-4 border-r border-white/10 pr-6">
                <button onClick={() => scrollToSection('profile')} className="text-gray-400 hover:text-amber-500 text-sm font-medium transition-colors">Profile</button>
                <button onClick={() => scrollToSection('lineage')} className="text-gray-400 hover:text-blue-400 text-sm font-medium transition-colors">The French Connection</button>
                <button onClick={() => scrollToSection('tree')} className="text-gray-400 hover:text-green-400 text-sm font-medium transition-colors">Family Tree</button>
                <button onClick={() => scrollToSection('psychology')} className="text-gray-400 hover:text-purple-400 text-sm font-medium transition-colors">Psychology</button>
            </div>
            
            <a 
              href="https://christiankota-com-digital-nervous-system-219296874904.us-west1.run.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-white/20 text-sm font-medium rounded-full shadow-sm text-starlight bg-white/5 hover:bg-white/10 hover:border-cyan-400 focus:outline-none transition-all group"
            >
              <span className="group-hover:text-cyan-300 transition-colors">Back to Main</span>
              <svg className="ml-2 w-3 h-3 text-gray-400 group-hover:text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;