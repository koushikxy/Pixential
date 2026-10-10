'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function MissionStatement() {
  return (
    <section className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 mb-40 relative z-10 pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Label */}
        <div className="lg:col-span-4 relative">
          <div className="lg:sticky top-40">
            <span className="text-blue-600 dark:text-cyan-400 font-bold tracking-widest uppercase mb-4 block">
              The Mission
            </span>
            <div className="hidden lg:block w-24 h-px bg-gray-300 dark:bg-white/20 mt-8"></div>
          </div>
        </div>

        {/* Right Column: Massive Raw Typography */}
        <div className="lg:col-span-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-black dark:text-white leading-tight tracking-tight">
              We started Pixential because we were tired of seeing amazing businesses settling for <br className="hidden md:block"/>
              <span className="relative inline-block mt-2">
                <span className="relative z-10 line-through decoration-red-500 decoration-[4px] md:decoration-[6px] text-gray-400 dark:text-gray-600">
                  slow, boring websites.
                </span>
                {/* Creative raw visual element */}
                <motion.span 
                  animate={{ rotate: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-8 -top-6 md:-right-10 md:-top-10 text-3xl md:text-4xl opacity-50 hidden sm:block"
                >
                  🥱
                </motion.span>
              </span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-black dark:text-white leading-tight tracking-tight">
              Your website should be your <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 italic pr-8 pb-2 inline-block">
                hardest working employee.
              </span>
              <motion.span 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block text-blue-600 dark:text-cyan-400 align-middle ml-2"
              >
                <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 leading-relaxed tracking-tight">
              Our mission is to bridge the gap between creative design and top-tier engineering, bringing <span className="font-bold text-black dark:text-white border-b-2 md:border-b-4 border-blue-600">enterprise-grade technology</span> to businesses ready to scale.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
