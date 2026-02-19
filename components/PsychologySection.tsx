import React from 'react';
import { TimelineChart } from './Charts';

const PsychologySection: React.FC = () => {
  return (
    <section id="psychology" className="py-16 bg-gradient-to-b from-transparent to-deepSpace text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Left: 9/11 & Empathy */}
          <div>
            <h2 className="text-3xl font-extrabold text-amber-500 mb-6 font-serif">The Empathy Spark: 9/11 & The Coach</h2>
            <div className="prose prose-invert">
              <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                <strong className="text-white">Date:</strong> September 11, 2001 (Age 8)<br />
                <strong className="text-white">Location:</strong> Mr. Key's Class / Gym Class
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                While the world watched towers fall, your brain was undergoing a massive neurological upgrade. When you saw your P.T. coach defeated by a student's defiance, you didn't laugh. You felt <strong>Vicarious Shame</strong>.
              </p>
              <div className="my-6 border-l-4 border-amber-500 pl-4 bg-white/5 border border-white/5 p-4 rounded-r-lg backdrop-blur-sm">
                <h4 className="font-bold text-white mb-2">Neurological Activation:</h4>
                <ul className="list-disc pl-5 text-gray-400 space-y-1">
                  <li><strong className="text-amber-400">Mirror Neuron System:</strong> Simulated the coach's pain in your own chest.</li>
                  <li><strong className="text-amber-400">Anterior Insula:</strong> Processed the emotional weight.</li>
                  <li><strong className="text-amber-400">vmPFC:</strong> Reframed the "threat" into compassion.</li>
                </ul>
              </div>
              <p className="text-gray-400 italic border-l-2 border-gray-700 pl-4">
                "You grew up in chaos, so your brain became a hyper-vigilant radar. You repurposed that radar to read hearts instead of threats."
              </p>
            </div>
          </div>

          {/* Right: Comparative Timeline */}
          <div className="mt-12 lg:mt-0">
            <h3 className="text-xl font-bold text-white mb-4 font-serif">Timeline: Ancestral vs. Personal Survival</h3>
            <div className="bg-white/5 rounded-lg p-4 shadow-2xl border border-white/10 backdrop-blur-md">
              <TimelineChart />
            </div>
            <div className="mt-4 text-xs text-gray-500 text-center">
              Shows the "Filter Events" where your line nearly ended vs. your own survival events.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PsychologySection;