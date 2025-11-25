import React from 'react';
import { GraphicType } from '../types';

export const TacticalGraphic: React.FC<{ type: GraphicType }> = ({ type }) => {
  if (type === 'cube') {
    return (
      <div className="w-20 h-20 relative perspective-1000 pointer-events-none">
        <div className="w-full h-full relative preserve-3d animate-spin-iso">
           {/* Faces - Using inline styles for precise transforms */}
           <div className="absolute inset-0 border border-current opacity-30 bg-white/5 backdrop-blur-[1px]" style={{ transform: 'translateZ(40px)' }}></div>
           <div className="absolute inset-0 border border-current opacity-30 bg-white/5 backdrop-blur-[1px]" style={{ transform: 'rotateY(180deg) translateZ(40px)' }}></div>
           <div className="absolute inset-0 border border-current opacity-30 bg-white/5 backdrop-blur-[1px]" style={{ transform: 'rotateY(90deg) translateZ(40px)' }}></div>
           <div className="absolute inset-0 border border-current opacity-30 bg-white/5 backdrop-blur-[1px]" style={{ transform: 'rotateY(-90deg) translateZ(40px)' }}></div>
           <div className="absolute inset-0 border border-current opacity-30 bg-white/5 backdrop-blur-[1px]" style={{ transform: 'rotateX(90deg) translateZ(40px)' }}></div>
           <div className="absolute inset-0 border border-current opacity-30 bg-white/5 backdrop-blur-[1px]" style={{ transform: 'rotateX(-90deg) translateZ(40px)' }}></div>
           
           {/* Internal Core */}
           <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-current opacity-20 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>
      </div>
    );
  }
  
  if (type === 'rings') {
     return (
        <div className="w-20 h-20 relative perspective-1000 flex items-center justify-center pointer-events-none">
           <div className="absolute w-full h-full border border-current opacity-40 rounded-full animate-rot-x border-t-transparent border-b-transparent"></div>
           <div className="absolute w-[80%] h-[80%] border-2 border-current opacity-30 rounded-full animate-rot-y border-r-transparent border-l-transparent"></div>
           <div className="absolute w-[60%] h-[60%] border border-current opacity-50 rounded-full animate-rot-z border-t-transparent"></div>
           <div className="w-2 h-2 bg-current rounded-full shadow-[0_0_10px_currentColor]"></div>
        </div>
     )
  }

  if (type === 'planes') {
     return (
        <div className="w-20 h-20 relative perspective-1000 pointer-events-none">
            <div className="w-full h-full preserve-3d animate-spin-iso flex items-center justify-center">
                <div className="absolute w-full h-full border border-current opacity-30 bg-white/5" style={{ transform: 'translateZ(24px)' }}>
                   <div className="w-full h-[1px] bg-current opacity-20 absolute top-1/2"></div>
                   <div className="h-full w-[1px] bg-current opacity-20 absolute left-1/2"></div>
                </div>
                <div className="absolute w-full h-full border border-current opacity-30 bg-white/5" style={{ transform: 'translateZ(0px)' }}>
                   <div className="w-[80%] h-[80%] border border-current opacity-10 absolute top-[10%] left-[10%]"></div>
                </div>
                <div className="absolute w-full h-full border border-current opacity-30 bg-white/5" style={{ transform: 'translateZ(-24px)' }}>
                   <div className="absolute bottom-1 right-1 w-2 h-2 bg-current opacity-50"></div>
                </div>
            </div>
        </div>
     )
  }

  return null;
}