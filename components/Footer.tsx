import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <a href="https://christiankota-com-digital-nervous-system-219296874904.us-west1.run.app/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
                <span className="text-lg font-serif font-bold text-gray-300 group-hover:text-amber-500 transition-colors">Back to Main</span>
                <span className="block text-xs text-gray-600 mt-1 uppercase tracking-widest group-hover:text-amber-500/70 transition-colors">The Main Portfolio</span>
            </a>
            
            <span className="hidden md:block text-gray-800 text-2xl font-light">/</span>

            <a href="https://linktr.ee/christiankota" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
                <span className="text-lg font-serif font-bold text-gray-300 group-hover:text-green-500 transition-colors">Linktree</span>
                <span className="block text-xs text-gray-600 mt-1 uppercase tracking-widest group-hover:text-green-500/70 transition-colors">Connect Across Platforms</span>
            </a>
        </div>

        <p className="text-gray-700 text-sm max-w-md mx-auto">
            &copy; 2026 Spurlin-DuBose Heritage Project. <br/>
            Generated based on provided GEDCOM and Biographical Data.
        </p>
      </div>
    </footer>
  );
};

export default Footer;