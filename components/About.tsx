import React from 'react';
import { CheckCircle2, Target, Clock, ShieldCheck, Zap } from 'lucide-react';

const COMMITMENTS = [
  { 
    label: 'Speed', 
    desc: 'Rapid sourcing, rapid delivery, rapid response.',
    icon: <Clock className="w-5 h-5" />
  },
  { 
    label: 'Integrity', 
    desc: 'Transparent pricing and full compliance with FAR, DFARS, and state procurement laws.',
    icon: <ShieldCheck className="w-5 h-5" />
  },
  { 
    label: 'Capability', 
    desc: 'If a product or service exists within a NAICS code, Aerion can source it.',
    icon: <Zap className="w-5 h-5" />
  },
  { 
    label: 'Mission Support', 
    desc: 'Every order supports agency readiness, safety, and continuity of operations.',
    icon: <Target className="w-5 h-5" />
  },
];

export const About: React.FC = () => {
  return (
    <section id="mission" className="bg-neutral-950 border-b border-white/10 py-24 relative overflow-hidden">
      {/* Diagonal Lines Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,1) 35px, rgba(255,255,255,1) 36px)'
      }}></div>
      <div className="max-w-[1800px] mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
             <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-neutral-500 mb-6 block">
               // OUR MISSION
             </span>
             <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-8">
               DELIVERING<br/>
               <span className="text-neutral-500">MISSION SUCCESS.</span>
             </h2>
             <div className="space-y-6 text-lg text-neutral-400 font-light leading-relaxed">
               <p>
                 At Aerion, our mission is simple: <strong>Deliver anything government agencies need — faster, smarter, and with uncompromising reliability.</strong>
               </p>
               <p>
                 From everyday essentials to mission-critical defense equipment, Aerion exists to remove friction from public-sector procurement. We build powerful supply chains, leverage data-driven sourcing, and uphold the highest standards of compliance so federal, state, and local agencies can focus on their mission while we handle the rest.
               </p>
               <p className="text-white border-l-2 border-green-500 pl-4 mt-6">
                 Aerion isn’t just a supplier — we’re a mission partner.
               </p>
             </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 md:p-12">
            <h3 className="font-mono text-sm uppercase tracking-widest text-white mb-8 border-b border-white/10 pb-4">
              Our Commitment
            </h3>
            <div className="grid gap-8">
              {COMMITMENTS.map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="w-10 h-10 bg-black border border-white/20 flex items-center justify-center text-white group-hover:border-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1 group-hover:text-green-500 transition-colors">
                      {item.label}
                    </h4>
                    <p className="text-sm text-neutral-500 font-mono">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};