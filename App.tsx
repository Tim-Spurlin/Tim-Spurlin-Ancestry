import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LineageSection from './components/LineageSection';
import FamilyTree from './components/FamilyTree';
import PsychologySection from './components/PsychologySection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased min-h-screen flex flex-col font-sans bg-spaceBlack bg-cosmic-gradient text-starlight selection:bg-cyan-900 selection:text-cyan-100">
      <Header />
      <main className="flex-grow">
        <Hero />
        <LineageSection />
        <FamilyTree />
        <PsychologySection />
      </main>
      <Footer />
    </div>
  );
};

export default App;