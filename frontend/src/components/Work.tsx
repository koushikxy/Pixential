'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  { name: 'Aura Fintech', type: 'Web App & Branding', size: 'lg:col-span-2 lg:row-span-2 h-[400px] lg:h-[600px]', img: '/fintech.jpg' },
  { name: 'Zenith', type: 'E-Commerce Platform', size: 'lg:col-span-1 lg:row-span-1 h-[300px] lg:h-[288px]', img: '/ecommerce.jpg' },
  { name: 'Lumina', type: 'AI Analytics', size: 'lg:col-span-1 lg:row-span-1 h-[300px] lg:h-[288px]', img: '/analytics.jpg' },
  { name: 'Velocity', type: 'Marketing Campaign', size: 'lg:col-span-3 lg:row-span-1 h-[300px] lg:h-[400px]', img: '/marketing.jpg' }
];

export default function Work() {
  return (
    <section id="work" className="py-32 bg-transparent transition-colors duration-500">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display font-bold text-black dark:text-white tracking-tighter leading-[0.9]"
        >
          Featured <br />
          <span className="font-accent text-[1.2em] font-normal text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 pr-8 pb-2 inline-block">Work</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/work" className="inline-flex items-center gap-2 pb-1 border-b-2 border-black dark:border-white text-black dark:text-white font-bold text-lg hover:text-orange-500 transition-colors">
            View all projects
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>

      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-[2.5rem] overflow-hidden bg-black shadow-xl cursor-pointer border border-black/5 dark:border-white/5 ${proj.size}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" 
                style={{ backgroundImage: `url(${proj.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">
                <p className="text-white/80 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 drop-shadow-md">{proj.type}</p>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-white drop-shadow-lg">{proj.name}</h3>
              </div>
              
              <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-white/10 backdrop-blur-md border border-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-50 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">
                <svg className="w-5 h-5 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
