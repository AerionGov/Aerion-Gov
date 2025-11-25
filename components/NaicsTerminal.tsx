import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Search, Lock, Activity, TrendingUp, AlertTriangle, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { NaicsCode } from '../types';
import { NAICS_DATA } from '../data/naicsData';

export const NaicsTerminal: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showTopFade, setShowTopFade] = useState(false);
  const [showBottomFade, setShowBottomFade] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      setShowTopFade(scrollTop > 20);
      setShowBottomFade(scrollTop < scrollHeight - clientHeight - 20);
    }
  };

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      handleScroll();
      scrollEl.addEventListener('scroll', handleScroll);
      return () => scrollEl.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const filtered = NAICS_DATA.filter(item => 
    item.code.includes(searchTerm) || item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
      handleScroll();
    }
  }, [searchTerm]);

  return (
    <section id="intel" className="py-24 bg-neutral-900 border-b border-white/10 relative overflow-hidden">
      
      {/* Circuit Board Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px),
          linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px),
          linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
        backgroundPosition: '-1px -1px, -1px -1px, -1px -1px, -1px -1px'
      }}></div>
      <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full opacity-20"></div>
      <div className="absolute top-40 right-32 w-2 h-2 bg-white rounded-full opacity-20"></div>
      <div className="absolute bottom-32 left-40 w-2 h-2 bg-white rounded-full opacity-20"></div>

      <div className="max-w-[1800px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16">
          
          <div className="lg:col-span-2">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-neutral-500 mb-6 block">
              // INTEL
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
              PROCUREMENT<br />
              <span className="text-neutral-500">INTELLIGENCE</span>
            </h2>
            <p className="text-lg text-neutral-400 font-light mb-10">
              Aerion leverages real-time data, market research, and historical contract analysis to help agencies make faster, more informed purchasing decisions.
            </p>

            <div className="bg-black border border-white/10 p-6 space-y-4">
              <h4 className="text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2 mb-4">
                <Activity className="w-4 h-4 text-green-500" />
                What We Track
              </h4>
              <ul className="space-y-4">
                {[
                  { text: 'Federal Purchasing Trends', icon: <TrendingUp className="w-3 h-3"/> },
                  { text: 'Emerging Needs (Defense/Civilian)', icon: <AlertTriangle className="w-3 h-3"/> },
                  { text: 'Price Fluctuations', icon: <Terminal className="w-3 h-3"/> },
                  { text: 'High-Demand Products', icon: <Activity className="w-3 h-3"/> }
                ].map((item, i) => (
                   <li key={i} className="text-sm text-neutral-400 font-mono flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-neutral-500">
                         {item.icon}
                      </div>
                      {item.text}
                   </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-neutral-500 mb-2">FULL DATABASE ACCESS:</p>
                <div className="text-white font-mono text-sm">
                   Supports all active NAICS codes.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {/* Terminal Window */}
            <div className="bg-[#0c0c0c] border border-white/10 rounded-lg shadow-2xl overflow-hidden flex flex-col h-[600px]">
              
              {/* Terminal Header */}
              <div className="bg-white/5 border-b border-white/10 p-3 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                  <Lock className="w-3 h-3" />
                  SECURE_DB_ACCESS_V4
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 flex-1 flex flex-col font-mono text-sm relative">
                
                {/* Search Bar */}
                <div className="flex items-center gap-3 border-b border-white/20 pb-4 mb-6 text-white">
                  <span className="text-green-500">$</span>
                  <span className="text-neutral-400">query</span>
                  <input 
                    type="text" 
                    placeholder="--code OR --keyword (e.g. '334' or 'Defense')"
                    className="bg-transparent border-none outline-none text-white w-full placeholder-neutral-600 uppercase"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="w-4 h-4 text-neutral-500" />
                </div>

                {/* Results Header */}
                <div className="grid grid-cols-12 text-[10px] text-neutral-500 uppercase tracking-widest mb-2 px-2">
                   <div className="col-span-3">Code</div>
                   <div className="col-span-6">Classification</div>
                   <div className="col-span-3 text-right">Cat</div>
                </div>

                {/* Scrollable List Container */}
                <div className="relative flex-1 min-h-0">
                  {/* Top scroll fade indicator */}
                  <div 
                    className={`absolute top-0 left-0 right-3 h-8 scroll-fade-top z-10 pointer-events-none transition-opacity duration-300 flex items-center justify-center ${showTopFade ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <ChevronUp className="w-4 h-4 text-green-500/60 animate-pulse" />
                  </div>

                  {/* Scrollable List */}
                  <div 
                    ref={scrollRef}
                    className="overflow-y-auto h-full pr-2 space-y-1 naics-scrollbar scroll-smooth"
                  >
                    {filtered.length > 0 ? (
                      filtered.map((item, idx) => (
                        <div key={idx} className="grid grid-cols-12 px-2 py-3 hover:bg-white/10 cursor-pointer transition-colors group rounded border border-transparent hover:border-white/5">
                          <div className="col-span-3 text-green-500/80 font-bold group-hover:text-green-400">{item.code}</div>
                          <div className="col-span-6 text-neutral-300 group-hover:text-white">{item.title}</div>
                          <div className="col-span-3 text-right text-neutral-500 group-hover:text-neutral-300">[{item.category}]</div>
                        </div>
                      ))
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-neutral-600 space-y-4 border border-dashed border-white/10 rounded">
                        <Terminal className="w-8 h-8 opacity-50" />
                        <p>NO RECORDS FOUND ON LOCAL NODE.</p>
                        <button className="text-xs border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-colors">
                          INITIATE DEEP SEARCH
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Bottom scroll fade indicator */}
                  <div 
                    className={`absolute bottom-0 left-0 right-3 h-8 scroll-fade-bottom z-10 pointer-events-none transition-opacity duration-300 flex items-center justify-center ${showBottomFade && filtered.length > 8 ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <ChevronDown className="w-4 h-4 text-green-500/60 animate-pulse" />
                  </div>
                </div>

                {/* Footer status */}
                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-[10px] text-neutral-500">
                  <span>TOTAL RECORDS: {NAICS_DATA.length}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    CONNECTED
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};