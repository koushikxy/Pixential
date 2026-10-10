'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "They made everything so easy to understand. Our new website is beautiful and we're finally getting calls from Google.",
    name: "Dr. Sarah Jenkins",
    role: "Founder, Smile Dental",
    image: "https://i.pravatar.cc/150?img=44"
  },
  {
    quote: "We just wanted a simple site that worked on phones. They delivered exactly that, incredibly fast. Great team.",
    name: "Marcus Thorne",
    role: "Owner, Elite Roofing",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "The team was friendly, transparent with pricing, and built us a site that our clients actually compliment us on.",
    name: "Elena Rodriguez",
    role: "Partner, City Law",
    image: "https://i.pravatar.cc/150?img=47"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-transparent relative z-10 transition-colors duration-500">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-bold text-black dark:text-white tracking-tighter"
        >
          Don't just take our <br className="md:hidden" />
          <span className="font-accent text-[1.2em] font-normal text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 pr-8 pb-2 inline-block">word for it</span>
        </motion.h2>
      </div>

      <div className="w-full relative overflow-hidden flex flex-col gap-6 -mx-4 px-4 sm:mx-0 sm:px-0 mt-20 group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-[#050505] to-transparent z-20 pointer-events-none transition-colors duration-500"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-[#050505] to-transparent z-20 pointer-events-none transition-colors duration-500"></div>
        
        <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap hover:[animation-play-state:paused] w-max gap-6 py-4">
          {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((test, i) => (
            <div 
              key={i}
              className="relative bg-white/50 dark:bg-[#0a0a0a]/50 backdrop-blur-md p-10 md:p-12 rounded-[2.5rem] border border-gray-200 dark:border-white/10 hover:border-emerald-500/30 hover:-translate-y-2 transition-all duration-500 shadow-xl w-[400px] md:w-[500px] flex-shrink-0 cursor-grab active:cursor-grabbing whitespace-normal flex flex-col justify-between h-[350px] md:h-[400px]"
            >
              <div className="absolute top-8 right-8 text-6xl text-emerald-500/20 dark:text-emerald-500/10 font-serif leading-none transition-colors duration-500">
                "
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-10 relative z-10 font-medium line-clamp-4">
                "{test.quote}"
              </p>
              <div className="flex items-center gap-5 mt-auto">
                <img src={test.image} alt={test.name} className="w-14 h-14 rounded-full shadow-md object-cover" />
                <div>
                  <h4 className="font-bold text-black dark:text-white text-lg">{test.name}</h4>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
