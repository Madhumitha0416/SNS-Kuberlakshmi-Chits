import React from 'react';
import { motion } from 'framer-motion';

const TrustBadges = () => {
  const badges = [
    "All India Association of Chit Funds",
    "Tamil Nadu Chit Fund Companies Association",
    "Mayiladuthurai Chamber of Commerce",
    "Rotary Club Kings",
    "Registered under Chit Funds Act 1982"
  ];

  return (
    <div className="bg-neutral-900 border-b border-gold-500/20 py-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-transparent to-neutral-900 z-10 pointer-events-none"></div>
      <div className="flex whitespace-nowrap animate-marquee">
        {[...badges, ...badges].map((badge, idx) => (
          <div key={idx} className="flex items-center space-x-4 mx-8 group">
            <div className="w-2 h-2 rounded-full bg-gold-500 group-hover:scale-150 transition-transform"></div>
            <span className="text-gray-400 font-medium text-lg uppercase tracking-wider group-hover:text-gold-400 transition-colors">
              {badge}
            </span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default TrustBadges;
