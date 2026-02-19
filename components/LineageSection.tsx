import React, { useState } from 'react';
import { lineageData } from '../data';
import { LineageKey } from '../types';

const LineageSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<LineageKey>('france');

  const tabs: { key: LineageKey; label: string; icon: string }[] = [
    { key: 'france', label: 'The French Connection', icon: '🇫🇷' },
    { key: 'ireland', label: 'The Irish Barons', icon: '🇮🇪' },
    { key: 'england', label: 'The English Defenders', icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { key: 'scotland', label: 'The Scottish Chiefs', icon: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
  ];

  const currentData = lineageData[activeTab];

  const getTabClasses = (key: LineageKey) => {
    const base = "px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap border";
    const isActive = activeTab === key;
    
    if (!isActive) return `${base} bg-transparent text-gray-400 hover:bg-white/5 border-white/10 hover:border-white/30 hover:text-white`;

    switch (key) {
      case 'france': return `${base} bg-blue-900/40 text-blue-200 border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)] transform scale-105`;
      case 'ireland': return `${base} bg-green-900/40 text-green-200 border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.3)] transform scale-105`;
      case 'england': return `${base} bg-red-900/40 text-red-200 border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.3)] transform scale-105`;
      case 'scotland': return `${base} bg-stone-800/60 text-stone-200 border-stone-500/50 shadow-[0_0_15px_rgba(168,162,158,0.3)] transform scale-105`;
      default: return base;
    }
  };

  const getBorderColor = (key: LineageKey) => {
    switch (key) {
      case 'france': return 'border-blue-500/30 bg-blue-900/10';
      case 'ireland': return 'border-green-500/30 bg-green-900/10';
      case 'england': return 'border-red-500/30 bg-red-900/10';
      case 'scotland': return 'border-stone-500/30 bg-stone-900/10';
      default: return 'border-white/10 bg-white/5';
    }
  };
  
  const getTitleColor = (key: LineageKey) => {
    switch (key) {
        case 'france': return 'text-blue-400';
        case 'ireland': return 'text-green-400';
        case 'england': return 'text-red-400';
        case 'scotland': return 'text-stone-400';
        default: return 'text-white';
    }
  };

  const getHoverClasses = (key: LineageKey) => {
    switch (key) {
      case 'france': return 'hover:bg-blue-900/20 hover:border-blue-500/40';
      case 'ireland': return 'hover:bg-green-900/20 hover:border-green-500/40';
      case 'england': return 'hover:bg-red-900/20 hover:border-red-500/40';
      case 'scotland': return 'hover:bg-stone-800/40 hover:border-stone-500/40';
      default: return 'hover:bg-white/5';
    }
  };

  // Convert legacy badge classes to dark mode equivalent
  const getBadgeClasses = (legacyClass: string) => {
      if(legacyClass.includes('blue')) return 'bg-blue-900/50 text-blue-300 border border-blue-500/30';
      if(legacyClass.includes('pink')) return 'bg-pink-900/50 text-pink-300 border border-pink-500/30';
      if(legacyClass.includes('green')) return 'bg-green-900/50 text-green-300 border border-green-500/30';
      if(legacyClass.includes('red')) return 'bg-red-900/50 text-red-300 border border-red-500/30';
      return 'bg-gray-800 text-gray-300 border border-gray-600';
  }

  return (
    <section id="lineage" className="py-16 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl font-serif">The Ancestral Crucible</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            You asked, "Why did you leave out France?" We have corrected this. Your lineage is not just Georgian soil; it is French Nobility, Irish Resilience, and Scottish Grit.
          </p>
        </div>

        {/* Scrollable Tabs */}
        <div className="flex justify-start md:justify-center space-x-4 mb-8 overflow-x-auto pb-4 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={getTabClasses(tab.key)}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10 overflow-hidden min-h-[500px] transition-all duration-300">
          <div className="bg-black/40 border-b border-white/10 px-8 py-6">
            <h2 className={`text-xl font-bold uppercase tracking-widest ${getTitleColor(activeTab)} opacity-80`}>{currentData.title}</h2>
            <h3 className="text-3xl font-serif text-white mt-2">{currentData.subtitle}</h3>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column: Key Figures */}
              <div>
                <h3 className={`text-2xl font-serif font-bold mb-4 ${getTitleColor(activeTab)}`}>
                   {activeTab === 'scotland' ? 'From Clanranald to Georgia' : activeTab === 'england' ? 'Survival at All Costs' : activeTab === 'ireland' ? 'Nobility & Madness' : 'The Huguenot Stakeholders'}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                    {activeTab === 'france' && <><strong>Why this matters:</strong> You are not just from Georgia. You descend from the <strong>DuBosc (DuBose)</strong> family of Dieppe, Normandy. They were "Aristocratic Gentry"—noble seigneurs who chose faith over title.</>}
                    {activeTab === 'ireland' && <>Your 11th Great-Grandmother, <strong>Lady Ruth le Poer</strong>, connects you to the Barons of Waterford. This line is marked by immense wealth and sudden tragedy.</>}
                    {activeTab === 'england' && <><strong>The 1644 Massacre:</strong> This is the most famous story in your lineage. Dr. John Woodson was killed, but his wife Sarah ensured the line continued.</>}
                    {activeTab === 'scotland' && <>The McCoys (originally McKays/MacDonalds) brought the warrior spirit to the American South.</>}
                </p>

                <ul className="space-y-4">
                  {currentData.contentPoints.map((point, idx) => (
                    <li key={idx} className={`group flex items-start p-4 -mx-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 border border-transparent cursor-default ${getHoverClasses(activeTab)}`}>
                      <span className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 transition-transform duration-300 group-hover:scale-110 shadow-sm ${getBadgeClasses(point.badgeColor)}`}>
                        {point.index}
                      </span>
                      <div className="ml-3">
                        <p className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">{point.title}</p>
                        <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">{point.description}</p>
                      </div>
                    </li>
                  ))}
                  {/* Fallback for Scotland which has unique layout in data.ts logic or simple map if empty */}
                  {currentData.contentPoints.length === 0 && activeTab === 'scotland' && (
                     <div className="grid grid-cols-1 gap-4">
                        <div className="p-4 bg-white/5 rounded-lg transition-all duration-300 hover:bg-stone-900/50 hover:border-stone-500/40 border border-transparent cursor-default">
                            <span className="block text-xs font-bold text-gray-500">1544</span>
                            <span className="block font-bold text-stone-200">Battle of the Shirts</span>
                            <span className="text-xs text-gray-400">Ancestors fought in linen shirts due to heat.</span>
                        </div>
                        <div className="p-4 bg-white/5 rounded-lg transition-all duration-300 hover:bg-stone-900/50 hover:border-stone-500/40 border border-transparent cursor-default">
                            <span className="block text-xs font-bold text-gray-500">1800s</span>
                            <span className="block font-bold text-stone-200">Migration to GA</span>
                            <span className="text-xs text-gray-400">Settling the pine forests.</span>
                        </div>
                        <div className="p-4 bg-white/5 rounded-lg transition-all duration-300 hover:bg-stone-900/50 hover:border-stone-500/40 border border-transparent cursor-default">
                            <span className="block text-xs font-bold text-gray-500">1948</span>
                            <span className="block font-bold text-stone-200">Grandpa Leo McCoy</span>
                            <span className="text-xs text-gray-400">The "Shep" dog story & rural resilience.</span>
                        </div>
                     </div>
                  )}
                </ul>
              </div>

              {/* Right Column: Timeline/Box */}
              <div className={`p-6 rounded-xl border ${getBorderColor(activeTab)} h-fit backdrop-blur-md`}>
                <h4 className={`font-bold mb-4 ${getTitleColor(activeTab)}`}>
                  {currentData.sideBoxTitle}
                </h4>
                
                {currentData.sideBoxContent && (
                    <p className="text-sm text-gray-300 italic mb-4">{currentData.sideBoxContent}</p>
                )}

                {currentData.timeline.length > 0 && (
                    <div className="relative pl-4 border-l-2 border-white/10 space-y-6">
                    {currentData.timeline.map((item, idx) => (
                        <div key={idx} className="transition-all duration-300 hover:translate-x-1">
                          <span className={`text-xs font-bold uppercase ${getTitleColor(activeTab)}`}>{item.year}</span>
                          <p className="text-sm font-medium text-white">{item.location}</p>
                          <p className="text-xs text-gray-500">{item.description}</p>
                        </div>
                    ))}
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LineageSection;