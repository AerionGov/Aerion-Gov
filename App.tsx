import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { NaicsTerminal } from './components/NaicsTerminal';
import { Clients } from './components/Clients';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <NaicsTerminal />
      <Clients />
      <Footer />
    </div>
  );
}