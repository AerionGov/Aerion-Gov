import React from 'react';
import { Shield, Building2, Globe, Check } from 'lucide-react';

const FEDERAL_CLIENTS = {
  Military: [
    'Department of Defense',
    'United States Army',
    'United States Navy',
    'United States Air Force',
    'United States Marine Corps',
    'United States Coast Guard',
    'U.S. Army Corps of Engineers',
    'Defense Logistics Agency',
    'Defense Health Agency',
    'Defense Information Systems Agency',
    'Missile Defense Agency',
    'U.S. Cyber Command'
  ],
  Civilian: [
    'Department of Homeland Security',
    'Department of Veterans Affairs',
    'Department of Energy',
    'Department of Transportation',
    'Department of Justice',
    'Department of State',
    'Department of Agriculture',
    'Department of Commerce',
    'Department of the Interior',
    'Department of Health and Human Services',
    'Department of the Treasury',
    'Department of Labor',
    'Department of Housing and Urban Development',
    'Department of Education',
    'General Services Administration',
    'Environmental Protection Agency',
    'Social Security Administration',
    'National Institute of Standards and Technology',
    'Library of Congress',
    'Government Publishing Office',
    'Tennessee Valley Authority',
    'Smithsonian Institution',
    'National Archives and Records Administration',
    'Joint House and Senate (U.S. Congress)'
  ],
  Independent: [
    'NASA',
    'Small Business Administration',
    'Office of Personnel Management',
    'Federal Trade Commission',
    'Federal Communications Commission',
    'Nuclear Regulatory Commission',
    'National Science Foundation',
    'U.S. Agency for International Development',
    'U.S. Postal Service',
    'Federal Deposit Insurance Corporation',
    'Securities and Exchange Commission',
    'Commodity Futures Trading Commission',
    'Export–Import Bank of the United States',
    'National Labor Relations Board',
    'Equal Employment Opportunity Commission',
    'Federal Reserve System',
    'U.S. International Trade Commission',
    'U.S. Trade and Development Agency',
    'Peace Corps',
    'International Development Finance Corporation',
    'U.S. Election Assistance Commission',
    'Amtrak (National Railroad Passenger Corporation)'
  ],
  Intel: [
    'Central Intelligence Agency',
    'National Security Agency',
    'Defense Intelligence Agency',
    'National Geospatial-Intelligence Agency',
    'Office of the Director of National Intelligence'
  ]
};

const SLED_CLIENTS = [
  'State Procurement Offices', 'City & County Governments', 'Police & Fire Departments', 'Emergency Management Agencies', 'K–12 School Districts', 'Community Colleges', 'Public Transit Authorities'
];

export const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-24 bg-black border-b border-white/10 relative overflow-hidden">
      {/* Hexagon Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          radial-gradient(circle at 0% 50%, rgba(255,255,255,0) 9px, rgba(255,255,255,1) 10px, rgba(255,255,255,0) 11px),
          radial-gradient(circle at 100% 50%, rgba(255,255,255,0) 9px, rgba(255,255,255,1) 10px, rgba(255,255,255,0) 11px)
        `,
        backgroundSize: '50px 30px',
        backgroundPosition: '0 0, 25px 15px'
      }}></div>
      <div className="max-w-[1800px] mx-auto px-6 relative z-10">
        
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

        {/* Federal Agencies */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-4">
            <Shield className="w-6 h-6 text-white" />
            <h3 className="text-2xl font-bold uppercase tracking-tight text-white">Federal Agencies</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {/* Defense & Military */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">Defense & Military</h4>
              <ul className="space-y-2">
                {FEDERAL_CLIENTS.Military.map(client => (
                  <li key={client} className="text-neutral-300 font-light text-sm flex items-center gap-2">
                    <div className="w-1 h-1 bg-white rounded-full flex-shrink-0"></div>
                    {client}
                  </li>
                ))}
              </ul>
            </div>

            {/* Intelligence Community */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">Intelligence Community</h4>
              <ul className="space-y-2">
                {FEDERAL_CLIENTS.Intel.map(client => (
                  <li key={client} className="text-neutral-300 font-light text-sm flex items-center gap-2">
                    <div className="w-1 h-1 bg-white rounded-full flex-shrink-0"></div>
                    {client}
                  </li>
                ))}
              </ul>
            </div>

            {/* Civilian Agencies */}
            <div className="md:col-span-2 lg:col-span-2">
              <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">Civilian Agencies</h4>
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                {FEDERAL_CLIENTS.Civilian.map(client => (
                  <li key={client} className="text-neutral-300 font-light text-sm flex items-center gap-2">
                    <div className="w-1 h-1 bg-white rounded-full flex-shrink-0"></div>
                    {client}
                  </li>
                ))}
              </ul>
            </div>

            {/* Independent Agencies - spans full width */}
            <div className="md:col-span-2 lg:col-span-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">Independent Agencies</h4>
              <ul className="grid md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-2">
                {FEDERAL_CLIENTS.Independent.map(client => (
                  <li key={client} className="text-neutral-300 font-light text-sm flex items-center gap-2">
                    <div className="w-1 h-1 bg-white rounded-full flex-shrink-0"></div>
                    {client}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* SLED & Why Aerion */}
        <div className="grid lg:grid-cols-2 gap-16">
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
    </section>
  );
};