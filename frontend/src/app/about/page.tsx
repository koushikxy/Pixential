'use client';
import React, { useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FAQ from '../../components/FAQ';
import MissionStatement from '../../components/MissionStatement';
import AgencyExperience from '../../components/AgencyExperience';
import BentoValues from '../../components/BentoValues';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div className="min-h-screen flex flex-col bg-transparent font-sans selection:bg-blue-500/30 selection:text-white transition-colors duration-500">
      <Navbar />
      
      <main className="flex-grow pt-40">
        {/* Header Section */}
        <section className="relative w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 mb-40 z-10 min-h-[50vh] flex flex-col justify-center text-center items-center">
          
          {/* Creative Gradient Mesh Background (Matched to Homepage) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-300 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-[128px] opacity-60 dark:opacity-30 animate-pulse transition-colors duration-500"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-300 dark:bg-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-[128px] opacity-60 dark:opacity-30 transition-colors duration-500"></div>
          </div>

          <div className="max-w-5xl relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[12vw] sm:text-6xl md:text-[7rem] font-display font-bold text-black dark:text-white tracking-tighter leading-[1] mb-8"
            >
              We give you the <br />
              <span className="font-accent font-normal text-[1.2em] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 pr-8 pb-2 inline-block">
                winning edge.
              </span>
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex justify-center gap-4 flex-wrap mt-8"
            >
              <div className="px-6 py-3 rounded-full border border-black/10 dark:border-white/10 text-xl font-bold bg-white/50 dark:bg-black/50 backdrop-blur-md">No Templates.</div>
              <div className="px-6 py-3 rounded-full border border-black/10 dark:border-white/10 text-xl font-bold bg-white/50 dark:bg-black/50 backdrop-blur-md">No Excuses.</div>
              <div className="px-6 py-3 rounded-full border border-black/10 dark:border-white/10 text-xl font-bold bg-white/50 dark:bg-black/50 backdrop-blur-md">Just Results.</div>
            </motion.div>
          </div>
        </section>

        {/* Mission / Who We Are Section */}
        <MissionStatement />

        {/* Philosophy Section (Interactive Scroll) */}
        <AgencyExperience />
        {/* Bento Box Values Grid */}
        <BentoValues />

        <FAQ />

      </main>
      
      <Footer />
    </div>
  );
}

