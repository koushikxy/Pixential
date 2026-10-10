'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function BentoValues() {
  return (
    <section className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Box 1: Performance */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-2 bg-gradient-to-br from-blue-500/10 to-transparent dark:from-blue-900/40 dark:to-cyan-900/10 rounded-[2.5rem] border border-blue-500/20 dark:border-blue-800/50 p-12 relative overflow-hidden group hover:border-blue-500/50 transition-colors shadow-2xl cursor-pointer"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] group-hover:bg-blue-600/20 transition-colors duration-700"></div>
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-display font-bold text-black dark:text-white mb-4">Fast Sites Make More Money.</h3>
            </div>
            
            {/* HTML Illustration: Speed/Performance */}
            <div className="mt-12 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full sm:w-max mx-auto md:mx-0 group-hover:scale-105 transition-transform duration-500">
              <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10" className="text-gray-100 dark:text-white/5" />
                  <motion.circle 
                    cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10" strokeDasharray="283" 
                    initial={{ strokeDashoffset: 283 }}
                    whileInView={{ strokeDashoffset: 28 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="text-green-500" 
                  />
                </svg>
                <motion.span 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 1, type: 'spring' }}
                  className="absolute text-2xl font-black text-black dark:text-white"
                >
                  99
                </motion.span>
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-2 h-2 rounded-full bg-green-500"></motion.div>
                  <span className="text-gray-800 dark:text-gray-200 font-bold">Speed</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }} className="w-2 h-2 rounded-full bg-green-500"></motion.div>
                  <span className="text-gray-800 dark:text-gray-200 font-bold">Ease of Use</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.4 }} className="w-2 h-2 rounded-full bg-green-500"></motion.div>
                  <span className="text-gray-800 dark:text-gray-200 font-bold">Quality</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Box 2: Mobile First */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-900/40 dark:to-purple-900/40 rounded-[2.5rem] border border-indigo-500/20 dark:border-indigo-800/50 p-12 relative overflow-hidden group hover:border-indigo-500/50 transition-colors shadow-2xl flex flex-col justify-between cursor-pointer"
        >
          <div className="relative z-10 mb-12">
            <h3 className="text-3xl font-display font-bold text-black dark:text-white mb-4">Perfect on Phones.</h3>
          </div>
          
          {/* HTML Illustration: Mobile Phone Mockup */}
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-48 h-72 mx-auto bg-black dark:bg-[#0a0a0a] rounded-[2rem] border-4 border-gray-800 dark:border-gray-700 shadow-2xl p-2 overflow-hidden group-hover:scale-105 transition-transform duration-500"
          >
            <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 dark:bg-gray-700 rounded-b-xl w-24 mx-auto z-20"></div>
            <div className="w-full h-full bg-white dark:bg-[#111] rounded-[1.5rem] p-3 flex flex-col gap-3 relative overflow-hidden">
              <motion.div 
                animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                className="w-full h-1/3 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl"
              ></motion.div>
              <div className="w-3/4 h-3 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
              <div className="w-1/2 h-3 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
              <div className="mt-auto flex justify-between gap-2">
                <motion.div whileHover={{ scale: 0.95 }} className="w-full h-8 bg-indigo-500 rounded-lg cursor-pointer"></motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Box 3: Global Talent */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-br from-cyan-500/10 to-transparent dark:from-cyan-900/40 dark:to-blue-900/10 rounded-[2.5rem] border border-cyan-500/20 dark:border-cyan-800/50 p-12 relative overflow-hidden group hover:border-cyan-500/50 transition-colors shadow-2xl flex flex-col items-center justify-center text-center cursor-pointer"
        >
          <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="relative z-10 mb-8 w-32 h-32 rounded-full border-2 border-dashed border-cyan-500/50 flex items-center justify-center group-hover:border-cyan-400 transition-colors duration-500"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center"
            >
               <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </motion.div>
          </motion.div>
          
          <h3 className="text-3xl font-display font-bold text-black dark:text-white mb-4 relative z-10">Global Team.</h3>
        </motion.div>

        {/* Box 4: Data Driven */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 bg-gradient-to-br from-purple-500/10 to-transparent dark:from-purple-900/40 dark:to-pink-900/10 rounded-[2.5rem] border border-purple-500/20 dark:border-purple-800/50 p-12 relative overflow-hidden group hover:border-purple-500/50 transition-colors shadow-2xl flex lg:flex-row flex-col items-center justify-between gap-12 cursor-pointer"
        >
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] group-hover:bg-purple-600/20 transition-colors duration-700"></div>
          
          <div className="relative z-10 lg:w-1/2">
            <h3 className="text-3xl font-display font-bold text-black dark:text-white mb-4">We Use Facts, Not Guesses.</h3>
          </div>
          
          {/* HTML Illustration: Data Node / Tree */}
          <div className="relative z-10 w-full lg:w-auto flex-1 flex justify-center items-center">
            <div className="flex flex-col items-center gap-6">
              <motion.div whileHover={{ scale: 1.1 }} className="px-6 py-3 bg-purple-500 text-white font-bold rounded-full shadow-lg shadow-purple-500/30 cursor-pointer">Hypothesis</motion.div>
              <div className="flex gap-4 sm:gap-16 relative w-full justify-center">
                {/* Connecting lines */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 w-px h-6 bg-purple-500/50"></div>
                <div className="absolute top-0 left-1/4 right-1/4 h-px bg-purple-500/50"></div>
                <div className="absolute top-0 left-1/4 w-px h-6 bg-purple-500/50"></div>
                <div className="absolute top-0 right-1/4 w-px h-6 bg-purple-500/50"></div>
                
                <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="mt-6 px-4 sm:px-6 py-2 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-lg text-gray-800 dark:text-gray-200 shadow-xl text-sm sm:text-base">Control</motion.div>
                <motion.div animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 15px rgba(34,197,94,0.3)", "0 0 25px rgba(34,197,94,0.6)", "0 0 15px rgba(34,197,94,0.3)"] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="mt-6 px-4 sm:px-6 py-2 bg-white dark:bg-[#111] border-2 border-green-500 rounded-lg text-green-500 font-bold text-sm sm:text-base cursor-pointer">Variant B</motion.div>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
