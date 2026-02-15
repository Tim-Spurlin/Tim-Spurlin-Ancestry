import React from 'react';
import { motion } from 'framer-motion';
import { PSYCH_CASE_STUDIES, TIMELINE, LINKTREE_URL, HERITAGE_ENGINE_URL } from '../constants';
import { Search, Brain, Activity, Layers, Link, Database, ExternalLink, Shield, Cpu, RefreshCw, Scale } from 'lucide-react';

const BioPage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto p-4 md:p-8 space-y-12"
    >
      <header className="border-b border-white/10 pb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 font-sans">Software Architect | Security Engineer</h1>
        <p className="text-xl text-hud-cyan font-mono mb-4">From Kinetic Precision to Digital Architecture</p>
        
        <div className="flex flex-wrap gap-4 font-mono text-xs text-gray-500 items-center">
           <span>SUBJECT: TIMOTHY CHRISTIAN SPURLIN</span>
           <span className="hidden md:inline">|</span>
           <span>STATUS: ACTIVE / SECURITY CLEARED</span>
           <span className="hidden md:inline">|</span>
           <span>ARCHETYPE: VETERAN TECHNOLOGIST</span>
        </div>
        <p className="mt-4 text-gray-400 max-w-3xl leading-relaxed text-sm">
            A U.S. Air Force Veteran and Principal Architect bridging the gap between rigorous compliance (NIST, HIPAA) and rapid innovation.
            Applying a "Zero-Defect" mindset forged in military RF communications and industrial manufacturing to build high-availability, secure digital infrastructure.
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
            <a href={LINKTREE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-mono text-black bg-white/80 px-4 py-2 rounded font-bold hover:bg-white transition-colors">
                <Link size={16} />
                ACCESS_NEURAL_LINKS
            </a>
            <a href={HERITAGE_ENGINE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-mono text-black bg-hud-cyan px-4 py-2 rounded font-bold shadow-[0_0_15px_rgba(18,181,203,0.4)] hover:shadow-[0_0_25px_rgba(18,181,203,0.6)] hover:bg-white transition-all">
                <Database size={16} />
                LAUNCH HERITAGE ENGINE
                <ExternalLink size={12} />
            </a>
        </div>
      </header>

      {/* THE TRANSLATION MATRIX: Kinetic -> Digital */}
      <section className="space-y-6">
         <h2 className="text-xl font-mono text-tungsten flex items-center gap-2">
            <RefreshCw size={18} /> THE_TRANSLATION_ALGORITHM
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Kinetic -> SRE */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-lg relative overflow-hidden group hover:border-hud-cyan/50 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Activity size={80} />
                </div>
                <div className="flex items-center gap-2 mb-4 text-alert-red font-mono text-xs uppercase font-bold">
                    <Activity size={14} /> Kinetic Ops
                    <span className="text-gray-500">→</span>
                    <Cpu size={14} className="text-hud-cyan"/> SRE
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Signal Diagnostics to Observability</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-3">
                    Translating USAF RF Communications (L1-L3 fault isolation, signal tuning) directly into modern <strong>Site Reliability Engineering</strong> and telemetry.
                </p>
                <div className="bg-black/40 p-2 rounded border-l-2 border-hud-cyan text-[10px] font-mono text-gray-300">
                    "Handling classified comms translates to TLS 1.3 and Error Budgets."
                </div>
            </div>

            {/* 2. Physical Sec -> Cyber */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-lg relative overflow-hidden group hover:border-hud-cyan/50 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Shield size={80} />
                </div>
                <div className="flex items-center gap-2 mb-4 text-alert-red font-mono text-xs uppercase font-bold">
                    <Shield size={14} /> Physical
                    <span className="text-gray-500">→</span>
                    <Database size={14} className="text-hud-cyan"/> Cyber
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Perimeter to Zero Trust</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-3">
                    Experience in Physical Security (U.S. Security Associates @ CO State Capitol) translates to <strong>Identity & Access Management (IAM)</strong> and threat modeling.
                </p>
                <div className="bg-black/40 p-2 rounded border-l-2 border-hud-cyan text-[10px] font-mono text-gray-300">
                    "Surveillance translates to Anomaly Detection and Digital Forensics."
                </div>
            </div>

            {/* 3. Manufacturing -> Quality */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-lg relative overflow-hidden group hover:border-hud-cyan/50 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Scale size={80} />
                </div>
                <div className="flex items-center gap-2 mb-4 text-alert-red font-mono text-xs uppercase font-bold">
                    <Scale size={14} /> Blueprint
                    <span className="text-gray-500">→</span>
                    <Layers size={14} className="text-hud-cyan"/> Spec-First
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Tolerances to API Contracts</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-3">
                    QA Leadership in steel manufacturing (TrueNorth/Norwood) translates to <strong>Spec-First Development</strong>. Physical blueprints become OpenAPI contracts.
                </p>
                <div className="bg-black/40 p-2 rounded border-l-2 border-hud-cyan text-[10px] font-mono text-gray-300">
                    "Zero-defect manufacturing mindsets applied to CI/CD pipelines."
                </div>
            </div>

         </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Column: Service Record (Timeline) */}
        <div className="md:col-span-7 space-y-6">
          <h2 className="text-xl font-mono text-tungsten flex items-center gap-2">
            <Activity size={18} /> OPERATIONAL_TIMELINE
          </h2>
          <div className="relative border-l border-white/10 pl-8 space-y-10">
            {TIMELINE.map((event, i) => (
              <div key={i} className="relative group">
                <div className={`absolute -left-[37px] top-1 w-4 h-4 rounded-full border-2 border-black ${
                    event.category === 'survival' ? 'bg-alert-red' : 
                    event.category === 'intel' ? 'bg-hud-cyan' : 
                    event.category === 'art' ? 'bg-purple-500' : 'bg-gray-400'
                }`} />
                <span className="block text-xs font-mono text-hud-cyan mb-1">{event.year}</span>
                <h3 className="text-lg font-bold text-white group-hover:text-hud-cyan transition-colors">{event.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mt-2">{event.description}</p>
                {event.verification && (
                   <div className="mt-2 text-[10px] font-mono text-tungsten bg-white/5 inline-block px-2 py-1 rounded">
                      <Search size={10} className="inline mr-1" /> SOURCE: {event.verification}
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Skills & Psych */}
        <div className="md:col-span-5 space-y-8">
           
           {/* Skills Matrix (Updated with SWEBOK/NIST vocabulary) */}
           <div className="space-y-4">
                <h2 className="text-xl font-mono text-tungsten flex items-center gap-2">
                    <Layers size={18} /> CORE_COMPETENCIES
                </h2>
                <div className="bg-white/5 border border-white/10 p-5 rounded-lg space-y-5">
                    {[
                        { skill: "Software Architecture (SWEBOK)", level: 98 },
                        { skill: "Backend-Centric Automation", level: 95 },
                        { skill: "Security Governance (NIST CSF 2.0)", level: 92 },
                        { skill: "DevSecOps & Secure SDLC (SSDF)", level: 90 },
                        { skill: "High-Availability Operations (SRE)", level: 88 },
                    ].map((item, idx) => (
                        <div key={idx} className="group">
                            <div className="flex justify-between text-xs font-mono mb-1 group-hover:text-hud-cyan transition-colors">
                                <span className="text-gray-300">{item.skill}</span>
                                <span className="text-hud-cyan">{item.level}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-black rounded-full overflow-hidden border border-white/5 group-hover:border-hud-cyan/30 transition-colors">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.level}%` }}
                                    transition={{ duration: 1.2, delay: 0.1 * idx, ease: "easeOut" }}
                                    className="h-full bg-hud-cyan shadow-[0_0_8px_rgba(18,181,203,0.5)]"
                                />
                            </div>
                        </div>
                    ))}
                </div>
           </div>

           {/* Psych Profiles */}
           <div className="space-y-4">
               <h2 className="text-xl font-mono text-tungsten flex items-center gap-2">
                 <Brain size={18} /> PSYCH_PROFILES
               </h2>
               <div className="grid gap-4">
                  {PSYCH_CASE_STUDIES.map((study) => (
                    <div key={study.id} className="bg-white/5 border border-white/10 p-4 rounded-lg hover:border-hud-cyan/50 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] font-mono text-alert-red border border-alert-red/30 px-1 rounded bg-alert-red/5">
                                CASE: {study.id}
                            </span>
                        </div>
                        <h3 className="text-white font-bold text-sm mb-1">{study.title}</h3>
                        <p className="text-xs text-gray-300 leading-relaxed mb-2">{study.narrative}</p>
                        <div className="border-l-2 border-hud-cyan pl-2">
                            <p className="text-xs text-hud-cyan italic">"{study.analysis}"</p>
                        </div>
                    </div>
                  ))}
               </div>
           </div>

        </div>

      </div>
    </motion.div>
  );
};

export default BioPage;