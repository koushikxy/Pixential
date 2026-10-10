'use client';

import React from 'react';
import { Hexagon, Triangle, Circle, Square, Box, Activity } from 'lucide-react';

const clients = [
  { name: 'Quantum', icon: <Hexagon className="w-6 h-6" /> },
  { name: 'GlobalTech', icon: <Triangle className="w-6 h-6" /> },
  { name: 'Nexus', icon: <Circle className="w-6 h-6" /> },
  { name: 'Aether', icon: <Square className="w-6 h-6" /> },
  { name: 'Stark', icon: <Box className="w-6 h-6" /> },
  { name: 'Pulse', icon: <Activity className="w-6 h-6" /> },
];

// Duplicate the array once so that scrolling -50% perfectly loops it.
const doubledClients = [...clients, ...clients, ...clients, ...clients];

export default function ClientLogos() {
  return (
    <section className="py-10 bg-transparent border-b border-gray-100 dark:border-white/5 overflow-hidden transition-colors duration-500">
      <div className="max-w-[1800px] mx-auto px-4 mb-8">
        <p className="text-center text-sm font-semibold tracking-widest text-gray-400 dark:text-gray-500 uppercase">
          Trusted by forward-thinking teams
        </p>
      </div>
      
      {/* Marquee Wrapper */}
      <div className="relative flex overflow-x-hidden group">
        {/* Gradient fades for the edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-[#050505] to-transparent z-10 pointer-events-none transition-colors duration-500"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-[#050505] to-transparent z-10 pointer-events-none transition-colors duration-500"></div>
        
        <div className="flex animate-marquee whitespace-nowrap items-center py-4 hover:[animation-play-state:paused] w-max">
          {doubledClients.map((client, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 mx-12 text-gray-400 dark:text-gray-600 hover:text-black dark:hover:text-white transition-all duration-300 cursor-pointer grayscale opacity-70 hover:opacity-100 hover:grayscale-0"
            >
              {client.icon}
              <span className="text-xl font-bold tracking-tight">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
