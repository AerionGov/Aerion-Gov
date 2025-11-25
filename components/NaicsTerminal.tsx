import React, { useState } from 'react';
import { Terminal, Search, Lock, Activity, TrendingUp, AlertTriangle, FileText } from 'lucide-react';
import { NaicsCode } from '../types';

const NAICS_DATA: NaicsCode[] = [
  // IT & COMPUTING
  { code: '334111', title: 'ELECTRONIC COMPUTER MFG', category: 'IT' },
  { code: '541511', title: 'CUSTOM COMPUTER PROGRAMMING SERVICES', category: 'IT' },
  { code: '541512', title: 'COMPUTER SYSTEMS DESIGN SERVICES', category: 'IT' },
  { code: '541519', title: 'OTHER COMPUTER RELATED SERVICES', category: 'IT' },
  { code: '518210', title: 'COMPUTING INFRASTRUCTURE & DATA PROCESSING', category: 'IT' },
  { code: '423430', title: 'COMPUTER PERIPHERAL EQUIPMENT WHOLESALE', category: 'IT' },
  
  // DEFENSE & AEROSPACE
  { code: '336411', title: 'AIRCRAFT MANUFACTURING', category: 'Defense' },
  { code: '336414', title: 'GUIDED MISSILE & SPACE VEHICLE MFG', category: 'Defense' },
  { code: '332992', title: 'SMALL ARMS AMMUNITION MFG', category: 'Defense' },
  { code: '332994', title: 'SMALL ARMS, ORDNANCE MFG', category: 'Defense' },
  { code: '928110', title: 'NATIONAL SECURITY', category: 'Gov' },
  { code: '336992', title: 'MILITARY ARMORED VEHICLE & TANK MFG', category: 'Defense' },
  
  // TRANSPORTATION
  { code: '336111', title: 'AUTOMOBILE MANUFACTURING', category: 'Transport' },
  { code: '336120', title: 'HEAVY DUTY TRUCK MANUFACTURING', category: 'Transport' },
  { code: '481212', title: 'NONSCHEDULED CHARTERED FREIGHT AIR TRANSPORT', category: 'Logistics' },
  { code: '484110', title: 'GENERAL FREIGHT TRUCKING, LOCAL', category: 'Logistics' },
  { code: '484220', title: 'SPECIALIZED FREIGHT TRUCKING', category: 'Logistics' },
  
  // CONSTRUCTION & INFRASTRUCTURE
  { code: '236210', title: 'INDUSTRIAL BUILDING CONSTRUCTION', category: 'Const' },
  { code: '236220', title: 'COMMERCIAL & INSTITUTIONAL BUILDING CONST', category: 'Const' },
  { code: '237310', title: 'HIGHWAY, STREET, AND BRIDGE CONSTRUCTION', category: 'Const' },
  { code: '238210', title: 'ELECTRICAL CONTRACTORS', category: 'Const' },
  { code: '238220', title: 'PLUMBING, HEATING, AND A/C CONTRACTORS', category: 'Const' },
  { code: '332312', title: 'FABRICATED STRUCTURAL METAL MFG', category: 'Const' },
  
  // MEDICAL & SCIENTIFIC
  { code: '325412', title: 'PHARMACEUTICAL PREPARATION MFG', category: 'Medical' },
  { code: '339112', title: 'SURGICAL AND MEDICAL INSTRUMENT MFG', category: 'Medical' },
  { code: '339113', title: 'SURGICAL APPLIANCE AND SUPPLIES MFG', category: 'Medical' },
  { code: '423450', title: 'MEDICAL EQUIPMENT WHOLESALE', category: 'Medical' },
  { code: '621111', title: 'OFFICES OF PHYSICIANS', category: 'Medical' },
  { code: '622110', title: 'GENERAL MEDICAL AND SURGICAL HOSPITALS', category: 'Medical' },
  
  // SERVICES & CONSULTING
  { code: '541330', title: 'ENGINEERING SERVICES', category: 'Services' },
  { code: '541611', title: 'ADMINISTRATIVE MANAGEMENT CONSULTING', category: 'Consulting' },
  { code: '541614', title: 'LOGISTICS CONSULTING SERVICES', category: 'Consulting' },
  { code: '561110', title: 'OFFICE ADMINISTRATIVE SERVICES', category: 'Services' },
  { code: '561210', title: 'FACILITIES SUPPORT SERVICES', category: 'Services' },
  { code: '561612', title: 'SECURITY GUARDS AND PATROL SERVICES', category: 'Services' },
  { code: '611430', title: 'PROFESSIONAL DEVELOPMENT TRAINING', category: 'Training' },
  
  // INDUSTRIAL SUPPLIES
  { code: '315990', title: 'APPAREL ACCESSORIES MFG', category: 'Textiles' },
  { code: '333924', title: 'INDUSTRIAL TRUCK & TRACTOR MFG', category: 'Industrial' },
  { code: '335910', title: 'BATTERY MANUFACTURING', category: 'Energy' },
  { code: '423830', title: 'INDUSTRIAL MACHINERY WHOLESALE', category: 'Industrial' },
  { code: '423840', title: 'INDUSTRIAL SUPPLIES WHOLESALE', category: 'Industrial' }
];

export const NaicsTerminal: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = NAICS_DATA.filter(item => 
    item.code.includes(searchTerm) || item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="intel" className="py-24 bg-neutral-900 border-b border-white/10 relative overflow-hidden">
      
      {/* Background FX */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

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

                {/* Scrollable List */}
                <div className="overflow-y-auto flex-1 pr-2 space-y-1 custom-scrollbar">
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