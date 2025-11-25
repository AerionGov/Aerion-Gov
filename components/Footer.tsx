import React from 'react';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 bg-black text-neutral-500 text-sm border-t border-white/10">
      <div className="max-w-[1800px] mx-auto grid md:grid-cols-4 gap-12 border-b border-white/10 pb-16 mb-16">
        
        <div className="col-span-1">
          <div className="flex items-center gap-3 mb-8 text-white">
            <Shield className="w-6 h-6" />
            <span className="font-bold text-lg tracking-tighter">AERION</span>
          </div>
          <p className="leading-relaxed text-neutral-400 font-light mb-8 max-w-[250px]">
            Providing the industrial backbone for national security and public infrastructure.
          </p>
          <div className="font-mono text-[10px] uppercase tracking-widest space-y-2 text-neutral-600">
            <p>WASHINGTON D.C.</p>
            <p>EST. 2024</p>
          </div>
        </div>

        <div className="col-span-1 flex flex-col space-y-4">
          <span className="text-white font-bold uppercase tracking-widest text-xs mb-4">Sitemap</span>
          {['Mission', 'Capabilities', 'Intel / NAICS', 'Our Clients'].map(item => (
            <a key={item} href={`#${item.toLowerCase().split(' ')[0]}`} className="hover:text-white transition-colors text-xs uppercase tracking-wider font-mono">{item}</a>
          ))}
        </div>

        <div className="col-span-1 flex flex-col space-y-4">
          <span className="text-white font-bold uppercase tracking-widest text-xs mb-4">Legal</span>
          <a href="#privacy-policy" className="hover:text-white transition-colors text-xs uppercase tracking-wider font-mono">Privacy Policy</a>
          <a href="#terms-of-service" className="hover:text-white transition-colors text-xs uppercase tracking-wider font-mono">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors text-xs uppercase tracking-wider font-mono">Supplier Code</a>
          <a href="#" className="hover:text-white transition-colors text-xs uppercase tracking-wider font-mono">Accessibility</a>
        </div>

        <div className="col-span-1">
          <span className="text-white font-bold uppercase tracking-widest text-xs mb-8 block">Certifications</span>
          <div className="flex flex-wrap gap-2">
            {[
              'SBA Small Business', 
              'SAM.gov Active', 
              'ITAR Compliant', 
              'NIST 800-171',
              'Minority-Owned Business',
              'Self Certified Small Disadvantaged Business',
              'Subcontinent Asian (Asian-Indian) American Owned'
            ].map(tag => (
              <span key={tag} className="px-3 py-1 border border-white/10 text-[10px] uppercase tracking-wider hover:bg-white hover:text-black transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
      
      <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-widest text-neutral-600">
         <span className="mb-4 md:mb-0">© 2024 AERION GOVERNMENT SOLUTIONS. ALL RIGHTS RESERVED.</span>
         <div className="flex gap-8">
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> SYSTEM ONLINE</span>
            <span>ENCRYPTED: TLS 1.3</span>
         </div>
      </div>
    </footer>
  );
};