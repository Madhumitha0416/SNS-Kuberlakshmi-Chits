import React from 'react';
import aiacfLogo from '../../assets/images/AIACF.png';

const ChitFundBadge = ({ className = '', size = 'md' }) => {
  const isSmall = size === 'sm';

  return (
    <div
      className={`relative flex flex-col items-center justify-center bg-gradient-to-b from-[#2a2a2a] via-[#1a1a1a] to-[#0f0f0f] border border-gold-500/40 rounded-xl shadow-lg shadow-gold-500/5 select-none shrink-0 transition-all duration-300 hover:scale-[1.02] hover:border-gold-500/60 hover:shadow-gold-500/10 group ${
        isSmall
          ? 'w-[105px] min-[360px]:w-[120px] sm:w-[135px] pt-1.5 pb-2 px-2 min-[360px]:px-2.5 sm:px-3'
          : 'w-[155px] lg:w-[120px] xl:w-[160px] pt-2 pb-3 lg:pt-1 lg:pb-1.5 xl:pt-2 xl:pb-3 px-3 lg:px-2 xl:px-3'
      } ${className}`}
    >
      {/* Medallion Logo Wrapper */}
      <div className="relative flex items-center justify-center shrink-0">
        {/* Luxury Gold Glow Aura behind the logo */}
        <div 
          className={`absolute inset-0 rounded-full bg-gold-500/20 blur-md group-hover:bg-gold-500/35 transition-all duration-300 opacity-80 pointer-events-none ${
            isSmall 
              ? 'w-7 h-7 min-[360px]:w-8 h-8 sm:w-9 sm:h-9' 
              : 'w-10 h-10 lg:w-8 lg:h-8 xl:w-10 xl:h-10'
          }`}
        ></div>
        
        {/* Padded circular outer medallion container */}
        <div 
          className={`relative z-10 rounded-full bg-white border border-gold-500/40 p-[1px] flex items-center justify-center shadow-md overflow-hidden ${
            isSmall 
              ? 'w-7 h-7 min-[360px]:w-8 h-8 sm:w-9 sm:h-9' 
              : 'w-10 h-10 lg:w-8 lg:h-8 xl:w-10 xl:h-10'
          }`}
        >
          <img 
            src={aiacfLogo} 
            alt="AIACF Logo" 
            className="w-full h-full object-contain rounded-full"
          />
        </div>
      </div>

      {/* Horizontal Divider */}
      <div className="w-[85%] border-t border-gold-500/30 my-1 sm:my-1.5 group-hover:border-gold-500/50 transition-colors"></div>

      {/* Badge Text - responsive single/double line layout to ensure 100% containment within card borders */}
      <div 
        className={`w-full text-center font-poppins font-bold uppercase tracking-wide text-white group-hover:text-gold-400 transition-colors leading-tight px-1.5 overflow-hidden ${
          isSmall 
            ? 'text-[7px] min-[360px]:text-[8px] sm:text-[9.5px]' 
            : 'text-[9px] lg:text-[6px] xl:text-[8px]'
        }`}
      >
        {/* Desktop View: Wide single-line layout */}
        <div className="lg:block hidden whitespace-nowrap">
          REGISTERED UNDER <span className="text-gold-500">CHITFUND ACT</span>
        </div>
        
        {/* Mobile/Tablet View: Elegant two-line layout that guarantees absolute containment */}
        <div className="lg:hidden block">
          REGISTERED UNDER <br />
          <span className="text-gold-500">CHITFUND ACT</span>
        </div>
      </div>
    </div>
  );
};

export default ChitFundBadge;
