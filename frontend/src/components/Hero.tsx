'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30, mass: 1 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30, mass: 1 });

  const floatX1 = useTransform(springX, [-0.5, 0.5], [-40, 40]);
  const floatY1 = useTransform(springY, [-0.5, 0.5], [-40, 40]);
  
  const floatX2 = useTransform(springX, [-0.5, 0.5], [60, -60]);
  const floatY2 = useTransform(springY, [-0.5, 0.5], [60, -60]);

  const floatX3 = useTransform(springX, [-0.5, 0.5], [-80, 80]);
  const floatY3 = useTransform(springY, [-0.5, 0.5], [80, -80]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const titleText = "Websites That Feel Like".split(" ");

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative sm:min-h-screen pb-20 sm:pb-0 flex items-start justify-center overflow-hidden pt-36 sm:pt-[12.5rem] md:pt-[15.625rem] bg-transparent transition-colors duration-500 perspective-1000"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
        <motion.div 
          style={{ x: floatX1, y: floatY1 }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[37.5rem] max-h-[37.5rem] bg-purple-400 dark:bg-indigo-600 rounded-full opacity-50 dark:opacity-40 glow"
        />
        <motion.div 
          style={{ x: floatX2, y: floatY2 }}
          className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] max-w-[37.5rem] max-h-[37.5rem] bg-blue-400 dark:bg-cyan-600 rounded-full opacity-50 dark:opacity-40 glow"
        />
      </div>

      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full hidden sm:flex items-center justify-center mix-blend-overlay dark:mix-blend-color-dodge opacity-15 dark:opacity-10 select-none pointer-events-none px-4">
          <h2 className="text-[9vw] sm:text-[10vw] font-display font-black tracking-normal leading-none uppercase text-center w-full">
            PIXENTIAL
          </h2>
        </div>

        <motion.div 
          style={{ x: floatX3, y: floatY3, rotate: -15 }}
          className="absolute top-[15%] left-[5%] md:top-[20%] md:left-[10%] w-32 h-48 md:w-48 md:h-64 rounded-3xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-2xl overflow-hidden hidden sm:block"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
          <Image priority fill sizes="15rem" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop" alt="" className="object-cover opacity-80 mix-blend-overlay"/>
        </motion.div>

        <motion.div 
          style={{ x: floatX1, y: floatY2, rotate: 10 }}
          className="absolute bottom-[10%] right-[5%] md:bottom-[20%] md:right-[10%] w-40 h-40 md:w-56 md:h-56 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-2xl overflow-hidden flex items-center justify-center hidden sm:flex"
        >
          <div className="w-3/4 h-3/4 rounded-full border border-dashed border-white/50 animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute w-1/2 h-1/2 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full mix-blend-multiply blur-xl animate-pulse"></div>
        </motion.div>
      </div>
      
      <div className="relative z-10 w-full max-w-[112.5rem] mx-auto px-4 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/60 backdrop-blur-xl mb-8 sm:mb-10 shadow-lg"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200 tracking-widest uppercase">Accepting new projects</span>
        </motion.div>

        <h1 className="text-[12vw] sm:text-6xl md:text-[8rem] lg:text-[10rem] font-display font-bold text-black dark:text-white tracking-tighter leading-[0.85] mb-8 overflow-hidden">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="flex flex-wrap justify-center gap-x-4 md:gap-x-8"
          >
            {titleText.map((word, i) => (
              <motion.span 
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 100, rotate: 10 },
                  visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", bounce: 0.4, duration: 1 } }
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.4 }}
            className="mt-2 md:mt-6"
          >
            <span className="font-accent text-[1.2em] font-normal tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-500 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 pr-8 pb-4 inline-block drop-shadow-2xl">
              Magic.
            </span>
          </motion.div>
        </h1>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.8 } }
          }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 sm:mb-14"
        >
          {['Lightning Fast', 'Stunning Design', 'Conversion Focused'].map((tag, i) => (
             <motion.span 
               key={i} 
               variants={{
                 hidden: { opacity: 0, scale: 0.5 },
                 visible: { opacity: 1, scale: 1, transition: { type: "spring", duration: 0.8 } }
               }}
               className="px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-gray-200 dark:border-white/10 text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 tracking-wider sm:tracking-widest uppercase bg-white/30 dark:bg-white/5 shadow-sm"
             >
               {tag}
             </motion.span>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8"
        >
          <Link href="/contact" className="group relative flex items-center gap-3 h-16 px-10 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            <span>Start a project</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          
          <Link href="/work" className="group relative flex items-center gap-3 h-16 px-10 rounded-full border border-black/10 dark:border-white/20 bg-transparent text-black dark:text-white font-bold text-lg hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300">
            <span>View our work</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>

    </section>
  );
}
