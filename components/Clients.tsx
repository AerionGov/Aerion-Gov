import React from 'react';
import { Shield, Building2, Globe, Check } from 'lucide-react';

const FEDERAL_CLIENTS = {
  Military: [
    'U.S. Army', 'U.S. Navy', 'U.S. Air Force', 'U.S. Marine Corps', 'U.S. Coast Guard', 'Defense Logistics Agency', 'U.S. Cyber Command'
  ],
  Civilian: [
    'Dept of Homeland Security', 'Dept of Veterans Affairs', 'Dept of Energy', 'Dept of Transportation', 'Dept of Justice', 'General Services Admin'
  ],
  Independent: [
    'NASA', 'Small Business Admin', 'National Science Foundation', 'U.S. Postal Service'
  ],
  Intel: [
    'Central Intelligence Agency', 'National Geospatial-Intel Agency', 'Natl Security Agency', 'Defense Intelligence Agency'
  ]
};

const SLED_CLIENTS = [
  'State Procurement Offices', 'City & County Governments', 'Police & Fire Departments', 'Emergency Management Agencies', 'K–12 School Districts', 'Community Colleges', 'Public Transit Authorities'
];

export const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-24 bg-black border-b border-white/10">
      <div className="max-w-[1800px] mx-auto px-6">
        
        <div className="mb-20">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-neutral-500 mb-6 block">
             // PARTNERSHIPS
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
             OUR CLIENTS.
          </h2>
          <p className="text-xl text-neutral-400 font-light max-w-2xl">
            Aerion proudly supports government agencies across all levels—federal, state, and local—ensuring operational readiness and national resilience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-24">
          
          {/* Federal Column */}
          <div>
             <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
                <Shield className="w-6 h-6 text-white" />
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white">Federal Agencies</h3>
             </div>
             
             <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                   <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">Defense & Military</h4>
                      <ul className="space-y-2">
                          {FEDERAL_CLIENTS.Military.map(client => (
                            <li key={client} className="text-neutral-300 font-light text-sm flex items-center gap-2">
                               <div className="w-1 h-1 bg-white rounded-full"></div>
                               {client}
                            </li>
                          ))}
                      </ul>
                   </div>
                   <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">Intelligence Community</h4>
                      <ul className="space-y-2">
                          {FEDERAL_CLIENTS.Intel.map(client => (
                            <li key={client} className="text-neutral-300 font-light text-sm flex items-center gap-2">
                               <div className="w-1 h-1 bg-white rounded-full"></div>
                               {client}
                            </li>
                          ))}
                      </ul>
                   </div>
                </div>

                <div className="space-y-8">
                   <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">Civilian Agencies</h4>
                      <ul className="space-y-2">
                          {FEDERAL_CLIENTS.Civilian.map(client => (
                            <li key={client} className="text-neutral-300 font-light text-sm flex items-center gap-2">
                               <div className="w-1 h-1 bg-white rounded-full"></div>
                               {client}
                            </li>
                          ))}
                      </ul>
                   </div>
                   <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">Independent Agencies</h4>
                      <ul className="space-y-2">
                          {FEDERAL_CLIENTS.Independent.map(client => (
                            <li key={client} className="text-neutral-300 font-light text-sm flex items-center gap-2">
                               <div className="w-1 h-1 bg-white rounded-full"></div>
                               {client}
                            </li>
                          ))}
                      </ul>
                   </div>
                </div>
             </div>
          </div>

          {/* SLED & Why Aerion */}
          <div className="space-y-16">
             
             {/* SLED */}
             <div>
                <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
                  <Building2 className="w-6 h-6 text-white" />
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white">State, Local & Edu</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                   {SLED_CLIENTS.map(client => (
                      <span key={client} className="px-4 py-2 bg-white/5 border border-white/10 text-sm text-neutral-300">
                         {client}
                      </span>
                   ))}
                </div>
             </div>

             {/* Why Aerion */}
             <div className="bg-neutral-900 p-8 border-l-4 border-white">
                <div className="flex items-center gap-4 mb-6">
                   <Globe className="w-6 h-6 text-white" />
                   <h3 className="text-xl font-bold uppercase tracking-tight text-white">Why Choose Aerion</h3>
                </div>
                <ul className="grid md:grid-cols-2 gap-4">
                   {[
                      'Fast Response', 'Transparent Pricing', '100% Compliant', 'Vendor Reliability', 'Hard-to-Source Items', 'Mission Critical Support'
                   ].map(item => (
                      <li key={item} className="flex items-center gap-3 text-sm text-neutral-400">
                         <Check className="w-4 h-4 text-green-500" />
                         {item}
                      </li>
                   ))}
                </ul>
             </div>

          </div>

        </div>

      </div>
    </section>
  );
};