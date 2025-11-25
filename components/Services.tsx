import React, { useState } from 'react';
import { Capability } from '../types';
import { TacticalGraphic } from './TacticalGraphic';

const CAPABILITIES: Capability[] = [
  { 
    id: '01', 
    title: 'Strategic Sourcing', 
    desc: 'Multi-vendor procurement, supply chain optimization, technical specification matching, and rapid quote generation.',
    category: 'Strategy',
    graphic: 'cube'
  },
  { 
    id: '02', 
    title: 'Logistics & Fulfillment', 
    desc: 'Nationwide delivery, emergency & rush fulfillment, bulk shipping, tracking, documentation, and compliance support.',
    category: 'Logistics',
    graphic: 'planes'
  },
  { 
    id: '03', 
    title: 'Defense & Tactical Procurement', 
    desc: 'Military-grade equipment (weapons, armor, optics, communications), vehicle fleet sourcing, and fuel supply.',
    category: 'Defense',
    graphic: 'rings'
  },
  { 
    id: '04', 
    title: 'Industrial & Infrastructure Supply', 
    desc: 'Construction materials, heavy machinery, tools, hardware, and power generation (generators, solar, batteries).',
    category: 'Infrastructure',
    graphic: 'cube'
  },
  { 
    id: '05', 
    title: 'IT & Technology Solutions', 
    desc: 'Laptops, servers, storage, networking, cybersecurity software, and specialized government-compliant hardware.',
    category: 'Cyber',
    graphic: 'planes'
  },
  { 
    id: '06', 
    title: 'Medical & Emergency Response', 
    desc: 'Medical consumables, emergency kits, disaster relief, hospital-grade equipment, and protective gear.',
    category: 'Health',
    graphic: 'rings'
  },
  { 
    id: '07', 
    title: 'General Supplies', 
    desc: 'Office and administrative supplies, furniture, facility equipment, janitorial & sanitation, and educational materials.',
    category: 'Ops',
    graphic: 'cube'
  }
];

export const Services: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="capabilities" className="bg-black border-b border-white/10">
      
      {/* Header */}
      <div className="max-w-[1800px] mx-auto px-6 py-24">
        <div className="max-w-4xl">
           <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-neutral-500 mb-6 block">
             // CAPABILITIES
           </span>
           <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-6">
             END-TO-END<br/> PROCUREMENT.
           </h2>
           <p className="text-xl text-neutral-400 font-light max-w-2xl mb-8">
             Aerion provides end-to-end government procurement support, covering thousands of products and services across the entire NAICS spectrum. Built for scale, compliance, and speed.
           </p>
           <div className="h-1 w-24 bg-white"></div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-white/10 max-w-[1800px] mx-auto bg-black">
        {CAPABILITIES.map((cap, idx) => (
          <div 
            key={cap.id}
            className={`
              relative p-10 h-[420px] border-r border-b border-white/10 
              flex flex-col justify-between group transition-all duration-500 overflow-hidden
              ${hovered === cap.id ? 'bg-neutral-900' : 'bg-black'}
              ${idx === CAPABILITIES.length - 1 ? 'lg:col-span-3 lg:items-center lg:flex-row lg:h-auto lg:py-20' : ''}
            `}
            onMouseEnter={() => setHovered(cap.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Background Grid FX */}
            <div className={`absolute inset-0 opacity-[0.03] pointer-events-none transition-opacity duration-500 ${hovered === cap.id ? 'opacity-10' : ''}`}
                 style={{ 
                   backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
                   backgroundSize: '40px 40px' 
                 }}>
            </div>

            {idx === CAPABILITIES.length - 1 ? (
               // Layout for the last item (spanning full width)
               <>
                 <div className="flex flex-col z-10 lg:w-1/2 lg:pr-12">
                    <span className={`font-mono text-xl font-bold transition-colors mb-4 block ${hovered === cap.id ? 'text-white' : 'text-neutral-700'}`}>/{cap.id}</span>
                    <span className={`text-[10px] font-mono uppercase tracking-widest mb-3 block transition-colors ${hovered === cap.id ? 'text-neutral-400' : 'text-neutral-600'}`}>[{cap.category}]</span>
                    <h3 className="text-3xl font-bold tracking-tight mb-4 text-white">{cap.title}</h3>
                    <p className={`text-base leading-relaxed font-light transition-colors ${hovered === cap.id ? 'text-neutral-300' : 'text-neutral-500'}`}>{cap.desc}</p>
                 </div>
                 <div className="hidden lg:block lg:w-1/2 pl-12 border-l border-white/10 h-full relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150">
                       <TacticalGraphic type={cap.graphic} />
                    </div>
                 </div>
               </>
            ) : (
               // Standard Grid Layout
               <>
                <div className="flex justify-between items-start z-10">
                  <span className={`font-mono text-xl font-bold transition-colors ${hovered === cap.id ? 'text-white' : 'text-neutral-700'}`}>
                    /{cap.id}
                  </span>
                  
                  {/* 3D Graphic */}
                  <div className={`transition-all duration-700 transform ${hovered === cap.id ? 'scale-110 text-white' : 'text-neutral-600 grayscale'}`}>
                    <TacticalGraphic type={cap.graphic} />
                  </div>
                </div>
                
                <div className="relative z-10 mt-auto">
                  <span className={`text-[10px] font-mono uppercase tracking-widest mb-3 block transition-colors ${hovered === cap.id ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    [{cap.category}]
                  </span>
                  <h3 className="text-3xl font-bold tracking-tight mb-4 text-white">
                    {cap.title}
                  </h3>
                  <p className={`text-base leading-relaxed font-light transition-colors ${hovered === cap.id ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    {cap.desc}
                  </p>
                </div>
              </>
            )}
            
            {/* Hover Glow */}
            <div className={`absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full blur-[100px] transition-opacity duration-500 pointer-events-none ${hovered === cap.id ? 'opacity-10' : 'opacity-0'}`}></div>
          </div>
        ))}
      </div>
    </section>
  );
};