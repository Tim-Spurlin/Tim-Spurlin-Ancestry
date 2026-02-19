import React from 'react';
import { SkillsChart } from './Charts';

const Hero: React.FC = () => {
  return (
    <section id="profile" className="py-12 relative overflow-hidden">
      {/* Subtle star background effect */}
      <div className="absolute inset-0 z-0">
          <div className="absolute h-1 w-1 bg-white rounded-full top-10 left-10 opacity-70 animate-pulse"></div>
          <div className="absolute h-0.5 w-0.5 bg-white rounded-full top-20 right-20 opacity-50"></div>
          <div className="absolute h-1 w-1 bg-cyan-400 rounded-full bottom-10 left-1/4 opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-900/30 text-amber-400 mb-4 border border-amber-500/30">
              Timothy Christian Spurlin (Christian Kota)
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6 font-serif">
              Break Down to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Build Up</span>
            </h1>
            <p className="mt-4 text-lg text-gray-300 font-serif leading-relaxed">
              Born July 18, 1993. Survivor of the system. USAF Intelligence Analyst. Welder. Coder. Artist.
              <br /><br />
              You are not just a survivor of childhood trauma; you are the product of centuries of survival—from the religious wars of France to the frontiers of Georgia. This dashboard connects the <strong className="text-cyan-300">raw data of your life</strong> with the <strong className="text-amber-300">deep roots of your bloodline</strong>.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-white/5 border border-white/10 p-4 rounded-lg w-full sm:w-auto hover:border-amber-500/50 transition-colors backdrop-blur-sm">
                <span className="block text-xs text-gray-400 uppercase tracking-wide">9/11 Age</span>
                <span className="block text-xl font-bold text-white mt-1">8 Years Old</span>
                <span className="text-sm text-gray-500 block">3rd Grade, Mr. Key's Class</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-lg w-full sm:w-auto hover:border-amber-500/50 transition-colors backdrop-blur-sm">
                <span className="block text-xs text-gray-400 uppercase tracking-wide">Key Trait</span>
                <span className="block text-xl font-bold text-white mt-1">Retrospective Empathy</span>
                <span className="text-sm text-gray-500 block">Situational Awareness</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-6">
                <a href="https://christiankota-com-digital-nervous-system-219296874904.us-west1.run.app/" target="_blank" rel="noopener noreferrer" className="group flex items-center text-gray-400 hover:text-amber-400 transition-colors">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-amber-500/20 text-gray-500 group-hover:text-amber-400 mr-3 transition-colors border border-white/10 group-hover:border-amber-500/50">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </span>
                    <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-amber-500">Main Infrastructure</span>
                        <span className="font-serif font-bold text-lg text-white group-hover:text-amber-400">Back to Main</span>
                    </div>
                </a>

                <a href="https://linktr.ee/christiankota" target="_blank" rel="noopener noreferrer" className="group flex items-center text-gray-400 hover:text-green-400 transition-colors">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-green-500/20 text-gray-500 group-hover:text-green-400 mr-3 transition-colors border border-white/10 group-hover:border-green-500/50">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                    </span>
                    <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-green-500">Social Signals</span>
                        <span className="font-serif font-bold text-lg text-white group-hover:text-green-400">Linktree</span>
                    </div>
                </a>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0">
            <div className="bg-white/5 rounded-xl shadow-2xl border border-white/10 p-6 relative backdrop-blur-md">
              <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg shadow-amber-900/50 z-10 border border-amber-400/50">
                  SYSTEM ACTIVE
              </div>
              <h3 className="text-lg font-medium text-white mb-4 text-center font-serif">The Polymath Profile: Full-Stack Humanity</h3>
              <SkillsChart />
              <p className="text-xs text-center text-gray-500 mt-2">Data Source: Profile_README.md & Biography</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;