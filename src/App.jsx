// src/App.jsx
import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { StatsBar } from './components/StatsBar/StatsBar';
import { About } from './components/About/About';
import { TeamSection } from './components/TeamSection/TeamSection';
import { LogoSection } from './components/LogoSection/LogoSection';
import { Events } from './components/Events/Events';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <TeamSection />
      <LogoSection />
      <Events />
      <Footer />
    </div>
  );
}

export default App;