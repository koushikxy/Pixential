'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Services() {
  return (
    <section className="py-20 md:py-32 relative z-10 bg-transparent transition-colors duration-500">
      <div className="w-full max-w-[112.5rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold text-black dark:text-white tracking-tighter leading-[0.9]"
          >
            Our <br />
            <span className="font-accent text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 text-[1.2em] font-normal pr-8 pb-2 inline-block">Expertise</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/services" className="inline-flex items-center gap-2 pb-1 border-b-2 border-black dark:border-white text-black dark:text-white font-bold text-lg hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
              View all services
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[21rem] md:auto-rows-[25rem]">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 group relative rounded-[2.5rem] overflow-hidden bg-black shadow-xl border border-white/5 hover:border-blue-500/30 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
            <Image
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
              alt="Web Development"
              className="object-cover opacity-50 group-hover:opacity-70 transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="relative z-20 h-full flex flex-col justify-end p-7 md:p-10 transform transition-transform duration-500 group-hover:-translate-y-2">
              <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">01 / Engineering</span>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">Web Development</h3>
              <p className="text-gray-300 max-w-lg mb-6 line-clamp-2">Blazing fast, scalable architectures built on Next.js to deliver unparalleled performance and seamless user experiences.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative rounded-[2.5rem] overflow-hidden bg-black shadow-xl border border-white/5 hover:border-pink-500/30 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-tl from-pink-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
            <Image
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop"
              alt="UI/UX Branding"
              className="object-cover opacity-50 group-hover:opacity-70 transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="relative z-20 h-full flex flex-col justify-end p-7 md:p-10 transform transition-transform duration-500 group-hover:-translate-y-2">
              <span className="text-pink-400 font-bold tracking-widest uppercase text-sm mb-4">02 / Design</span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 tracking-tight">UI/UX & Branding</h3>
              <p className="text-gray-300 line-clamp-2">Creating immersive digital environments that captivate your audience.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 group relative rounded-[2.5rem] overflow-hidden bg-black shadow-xl border border-white/5 hover:border-emerald-500/30 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
            <Image
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
              alt="SEO & Growth"
              className="object-cover opacity-40 group-hover:opacity-60 transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div className="relative z-20 h-full flex flex-col justify-end p-7 md:p-10 transform transition-transform duration-500 group-hover:-translate-y-2">
              <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4">03 / Growth</span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 tracking-tight">SEO & Growth</h3>
              <p className="text-gray-300 max-w-2xl line-clamp-2">Data-driven marketing and search optimization strategies that drive real business results and revenue.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
