import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { NaicsTerminal } from './components/NaicsTerminal';
import { Clients } from './components/Clients';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'privacy-policy') {
        setCurrentPage('privacy');
      } else if (hash === 'terms-of-service') {
        setCurrentPage('terms');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  if (currentPage === 'privacy') {
    return <PrivacyPolicy />;
  }

  if (currentPage === 'terms') {
    return <TermsOfService />;
  }

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