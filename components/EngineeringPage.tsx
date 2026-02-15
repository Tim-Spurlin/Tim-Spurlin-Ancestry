import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Cpu, Glasses, ShieldCheck, MapPin, Database, Zap, Lock, Network, FileText, Server, Package, Brain, CheckCircle2 } from 'lucide-react';

const EngineeringPage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto p-4 md:p-8 space-y-16"
    >
        <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 gap-4">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 font-sans">Engineering Narrative</h1>
                <p className="text-hud-cyan font-mono text-sm">SECURITY ARCHITECTURE | INTELLIGENCE AUTOMATION | DEVSECOPS</p>
            </div>
            <div className="text-right hidden md:block">
                <p className="font-mono text-xs text-gray-500">CLEARANCE: ACTIVE</p>
                <p className="font-mono text-xs text-gray-500">FOCUS: HIGH-AVAILABILITY</p>
            </div>
        </header>

        {/* MISSION 1: NATIONAL SECURITY (Primary) */}
        <section className="relative bg-white/5 border border-hud-cyan/30 rounded-xl p-6 md:p-10 overflow-hidden group shadow-[0_0_30px_rgba(18,181,203,0.05)]">
             <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Network size={300} />
            </div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-5 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-hud-cyan/20 text-hud-cyan border border-hud-cyan/50 font-mono text-xs font-bold">
                        <Lock size={14} />
                        CURRENT_MISSION
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                        National Security Intelligence Tools
                    </h2>
                    <div className="font-mono text-xs text-gray-400 space-y-2 border-l-2 border-white/10 pl-4">
                        <p>ROLE: Software Engineer</p>
                        <p>SCOPE: Ingestion-to-Analysis Pipelines</p>
                        <p>STACK: Python, Node.js, Distributed Systems</p>
                    </div>
                    
                    {/* KEY METRIC */}
                    <div className="bg-black/50 border border-hud-cyan/30 p-4 rounded-lg">
                        <div className="text-4xl font-bold text-hud-cyan font-mono">60,000</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">High-Priority Intelligence Targets Processed</div>
                    </div>
                </div>

                <div className="md:col-span-7 space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-white font-bold text-lg flex items-center gap-2">
                            <Server size={18} className="text-hud-cyan"/> Technical Architecture: Intelligence Pipelines
                        </h3>
                        
                        {/* Pipeline Visualization */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                             <div className="bg-black/40 p-3 rounded border border-white/10 text-center">
                                <div className="text-hud-cyan font-mono text-xs mb-1">COLLECTION</div>
                                <div className="text-[10px] text-gray-400">Distributed Crawlers & Ingestion Engines</div>
                             </div>
                             <div className="flex items-center justify-center text-gray-600">→</div>
                             <div className="bg-black/40 p-3 rounded border border-white/10 text-center">
                                <div className="text-hud-cyan font-mono text-xs mb-1">PROCESSING</div>
                                <div className="text-[10px] text-gray-400">Normalization, Scoring & Classification</div>
                             </div>
                             <div className="flex items-center justify-center text-gray-600">→</div>
                             <div className="bg-black/40 p-3 rounded border border-white/10 text-center">
                                <div className="text-hud-cyan font-mono text-xs mb-1">ANALYSIS</div>
                                <div className="text-[10px] text-gray-400">AI/ML Fusion & Threat Detection</div>
                             </div>
                        </div>
                    </div>

                    <div className="space-y-2 text-sm text-gray-300 leading-relaxed">
                        <p>
                            Designing and operating automated pipelines that detect suspected spies and threat patterns using adversarial-informed logic (MITRE ATT&CK alignment). 
                            Focus on horizontal scalability to handle massive datasets for mission-interest agencies.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* MISSION 2: SAPHYRE SOLUTIONS (Compliance) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 space-y-4">
                <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center text-hud-cyan border border-white/20">
                    <ShieldCheck size={24} />
                </div>
                <div>
                     <div className="text-xs font-mono text-gray-500 mb-1">PRINCIPAL ARCHITECT</div>
                     <h2 className="text-2xl font-bold text-white">Saphyre Solutions LLC</h2>
                </div>
                <p className="text-sm text-gray-400">
                    Regulated Automation & Insurtech. Building compliance-constrained platforms.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-900/30 text-blue-300 text-[10px] font-mono rounded border border-blue-500/30">HIPAA</span>
                    <span className="px-2 py-1 bg-blue-900/30 text-blue-300 text-[10px] font-mono rounded border border-blue-500/30">NIST</span>
                    <span className="px-2 py-1 bg-blue-900/30 text-blue-300 text-[10px] font-mono rounded border border-blue-500/30">PII/PHI</span>
                </div>
            </div>
            <div className="md:col-span-8 bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                             <Lock size={16} className="text-alert-red"/> Regulated Automation
                        </h3>
                        <p className="text-xs text-gray-400 leading-relaxed mb-4">
                            Architected a multi-step workflow automation system handling sensitive user data. Implemented strict access controls and auditability based on HIPAA Security Rule Constraints (Administrative, Physical, Technical Safeguards).
                        </p>
                    </div>
                    <div>
                         <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                             <Network size={16} className="text-hud-cyan"/> Integration Architecture
                        </h3>
                        <p className="text-xs text-gray-400 leading-relaxed mb-4">
                            <strong>API Management:</strong> Data-driven plan evaluation across multiple carrier APIs.
                            <br/>
                            <strong>Reliability:</strong> Centralized Hub managing webhooks, DB backups, and data transmission lines.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* SECURITY GOVERNANCE & EVIDENCE */}
        <section className="bg-black/40 border border-white/10 rounded-xl p-8">
            <h2 className="text-xl font-bold text-white mb-6 text-center md:text-left">The Evidence Bundle & Artifacts</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 p-4 rounded border border-white/10 flex flex-col items-center text-center">
                    <FileText className="text-hud-cyan mb-2" />
                    <span className="text-xs font-bold text-white mb-1">DOCS</span>
                    <span className="text-[10px] text-gray-400">OpenAPI Specs & Architecture Diagrams</span>
                </div>
                <div className="bg-white/5 p-4 rounded border border-white/10 flex flex-col items-center text-center">
                    <Lock className="text-alert-red mb-2" />
                    <span className="text-xs font-bold text-white mb-1">SEC</span>
                    <span className="text-[10px] text-gray-400">Threat Models & Risk Assessments</span>
                </div>
                <div className="bg-white/5 p-4 rounded border border-white/10 flex flex-col items-center text-center">
                    <Zap className="text-yellow-500 mb-2" />
                    <span className="text-xs font-bold text-white mb-1">OPS</span>
                    <span className="text-[10px] text-gray-400">SLOs, Error Budgets & Retrospectives</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Package size={18} className="text-yellow-500" /> Supply Chain & Build Integrity
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-400 font-mono">
                         <li className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="mt-0.5 text-hud-cyan" />
                            <span><strong className="text-white">SBOM Implementation:</strong> Machine-processable software bill of materials for vulnerability correlation (EO 14028 alignment).</span>
                         </li>
                         <li className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="mt-0.5 text-hud-cyan" />
                            <span><strong className="text-white">SLSA Framework:</strong> Build integrity checklists to reduce tampering across the delivery pipeline.</span>
                         </li>
                    </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Brain size={18} className="text-purple-500" /> Responsible AI & Risk
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-400 font-mono">
                         <li className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="mt-0.5 text-hud-cyan" />
                            <span><strong className="text-white">NIST AI RMF:</strong> Managing risks in multimodal AI systems through rigorous evaluation and audit logs.</span>
                         </li>
                         <li className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="mt-0.5 text-hud-cyan" />
                            <span><strong className="text-white">Data Provenance:</strong> Clear handling boundaries for inference workflows and training data.</span>
                         </li>
                    </ul>
                </div>
            </div>
        </section>

        {/* LEGACY PROJECT: TelePrompt Glass (Moved to bottom) */}
        <section className="relative bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 opacity-60 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2 mb-4">
                 <Glasses size={20} className="text-gray-400" />
                 <h2 className="text-xl font-bold text-gray-300">Legacy: TelePrompt Glass (2019)</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                 <div className="md:col-span-8 text-sm text-gray-400">
                    <p>
                        The "Origin Story" of innovation. Invented the first AI-powered AR Smart Glasses in America, 2 weeks post-ChatGPT-2. 
                        Secured a Microsoft Partnership ($150k grant) and built a context-aware C++ engine using Google Maps API.
                    </p>
                 </div>
                 <div className="md:col-span-4 flex gap-2 flex-wrap content-start">
                        <span className="bg-white/10 text-gray-400 text-[10px] font-mono px-2 py-1 rounded">MICROSOFT_PARTNER</span>
                        <span className="bg-white/10 text-gray-400 text-[10px] font-mono px-2 py-1 rounded">C++_EMBEDDED</span>
                 </div>
            </div>
        </section>

    </motion.div>
  );
};

export default EngineeringPage;