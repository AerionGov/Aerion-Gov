import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Mission', id: 'mission' },
  { label: 'Capabilities', id: 'capabilities' },
  { label: 'Intel / NAICS', id: 'intel' },
  { label: 'Our Clients', id: 'clients' },
  { label: 'Contact', id: 'contact' }
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-xl border-white/10' 
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 max-w-[1800px] mx-auto">
          
          {/* Logo */}
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 bg-white text-black flex items-center justify-center transition-transform group-hover:scale-105">
              <Shield className="w-5 h-5 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tighter leading-none text-white">AERION</span>
              <span className="font-mono text-[9px] tracking-[0.3em] text-neutral-500 mt-0.5">GOV // SYSTEMS</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center h-full">
            {NAV_ITEMS.map(item => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className="h-full flex items-center px-6 text-xs font-mono font-medium uppercase tracking-widest text-neutral-400 hover:text-white hover:bg-white/5 transition-colors border-l border-transparent hover:border-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-black transform transition-transform duration-300 lg:hidden flex flex-col pt-32 px-6 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col space-y-8">
          {NAV_ITEMS.map(item => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold tracking-tighter text-neutral-400 hover:text-white border-b border-white/10 pb-4 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        
        <div className="mt-auto mb-12 font-mono text-xs text-neutral-500">
          <p>SYSTEM STATUS: ONLINE</p>
          <p>SECURE CONNECTION ESTABLISHED</p>
        </div>
      </div>
    </>
  );
};