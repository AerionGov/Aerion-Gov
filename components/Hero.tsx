import React from 'react';
import { ArrowRight, Globe, ShieldCheck, Database } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <header id="hero" className="relative min-h-screen pt-24 flex flex-col justify-center border-b border-white/10 overflow-hidden bg-black">
      
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(30,30,30,1)_0%,_rgba(0,0,0,1)_100%)] opacity-40"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-[1800px] mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-300">System V4.0 Online</span>
            </span>
            
            <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem] leading-[0.9] font-black tracking-tighter mb-8 text-white uppercase">
              Mission<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-700">Critical</span><br />
              <span className="text-white">Supply.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-neutral-400 max-w-2xl font-light leading-relaxed border-l-2 border-white/30 pl-6 mb-12">
              Your trusted partner for government procurement. From office logistics to defense systems, Aerion delivers end-to-end sourcing solutions for federal, state, and local agencies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#clients" className="group bg-white text-black px-8 py-4 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-neutral-200 transition-colors">
                Our Clients
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#capabilities" className="group bg-transparent border border-white/20 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-white/5 transition-colors">
                View Capabilities
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end h-full">
            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 lg:mb-12">
               <div className="font-mono text-xs text-neutral-500 mb-6 border-b border-white/10 pb-2 tracking-widest uppercase">
                  Active Sectors
               </div>
               <div className="space-y-4">
                  <div className="flex items-center gap-4 text-neutral-300">
                     <ShieldCheck className="w-5 h-5 text-white" />
                     <span className="text-sm font-medium">Federal & Defense</span>
                  </div>
                  <div className="flex items-center gap-4 text-neutral-300">
                     <Globe className="w-5 h-5 text-white" />
                     <span className="text-sm font-medium">State & Municipal</span>
                  </div>
                  <div className="flex items-center gap-4 text-neutral-300">
                     <Database className="w-5 h-5 text-white" />
                     <span className="text-sm font-medium">Data & Logistics</span>
                  </div>
               </div>
            </div>

            <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest flex justify-between border-t border-white/10 pt-4">
                <div>UEI: MCFGKK6LART4</div>
                <div>CAGE/NCAGE: 15CZ4</div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};