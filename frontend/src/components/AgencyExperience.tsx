'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function AgencyExperience() {
  return (
    <section className="w-full max-w-[112.5rem] mx-auto px-4 sm:px-6 lg:px-8 mb-40 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky top-40">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-[10vw] sm:text-5xl md:text-7xl font-display font-black text-black dark:text-white mb-8 leading-none tracking-tighter"
            >
              Not just another <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 italic pr-8 pb-2 inline-block">agency.</span>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <div className="flex items-center gap-6">
                <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-200 dark:from-gray-600 dark:to-gray-800 pr-8 pb-2 inline-block">
                  100%
                </div>
                <div className="text-xl md:text-2xl font-bold leading-tight max-w-[12.5rem] text-gray-800 dark:text-gray-200">
                  Hand-coded. <br />
                  Zero boring templates.
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-16 mt-12 lg:mt-0">
          
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white dark:bg-[#0a0a0a] rounded-[3rem] p-10 md:p-16 border border-gray-200 dark:border-white/10 shadow-2xl relative overflow-hidden group transition-all duration-500 hover:shadow-blue-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none overflow-hidden translate-x-1/3 -translate-y-1/3">
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-full h-full border-2 border-dashed border-blue-500/30 rounded-full flex items-center justify-center"
              >
                <div className="w-48 h-48 border-2 border-blue-500/40 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
                </div>
              </motion.div>
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <span className="text-blue-600 dark:text-blue-400 text-3xl font-black">01</span>
              </div>
              <h3 className="text-4xl font-display font-bold text-black dark:text-white mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Design That Works</h3>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg">We put everything exactly where it needs to be so visitors naturally click and buy. No fluff, just pure conversion-focused design.</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 text-sm md:text-base font-bold bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-sm group-hover:border-blue-500/30 transition-colors">Research-backed</span>
                <span className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 text-sm md:text-base font-bold bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-sm group-hover:border-blue-500/30 transition-colors">High Conversion</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white dark:bg-[#0a0a0a] rounded-[3rem] p-10 md:p-16 border border-gray-200 dark:border-white/10 shadow-2xl relative overflow-hidden group transition-all duration-500 hover:shadow-purple-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute top-10 right-10 w-48 h-48 opacity-10 md:opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-700">
              <div className="w-full h-full bg-black rounded-xl border border-white/10 p-4 flex flex-col gap-2 transform rotate-12">
                <div className="flex gap-1.5 mb-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="w-3/4 h-2.5 bg-purple-500/50 rounded-full"></div>
                <div className="w-full h-2.5 bg-white/20 rounded-full"></div>
                <div className="w-5/6 h-2.5 bg-white/20 rounded-full"></div>
                <div className="w-1/2 h-2.5 bg-purple-500/50 rounded-full mt-2"></div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <span className="text-purple-600 dark:text-purple-400 text-3xl font-black">02</span>
              </div>
              <h3 className="text-4xl font-display font-bold text-black dark:text-white mb-6 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Top-Tier Coding</h3>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg">We write clean, modern code so your website never breaks and loads in a flash. Built with the same tech stack as industry giants.</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 text-sm md:text-base font-bold bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-sm group-hover:border-purple-500/30 transition-colors">Next.js Framework</span>
                <span className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 text-sm md:text-base font-bold bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-sm group-hover:border-purple-500/30 transition-colors">Instant Loads</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white dark:bg-[#0a0a0a] rounded-[3rem] p-10 md:p-16 border border-gray-200 dark:border-white/10 shadow-2xl relative overflow-hidden group transition-all duration-500 hover:shadow-pink-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-20 pointer-events-none">
              <motion.div 
                animate={{ x: [0, 10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 w-32 h-32 bg-pink-500/40 rounded-full blur-xl"
              ></motion.div>
              <motion.div 
                animate={{ x: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/40 rounded-full blur-xl"
              ></motion.div>
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <span className="text-pink-600 dark:text-pink-400 text-3xl font-black">03</span>
              </div>
              <h3 className="text-4xl font-display font-bold text-black dark:text-white mb-6 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">No Secrets</h3>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg">No confusing tech words, no hidden fees. We just talk clearly, collaborate closely, and get the job done right.</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 text-sm md:text-base font-bold bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-sm group-hover:border-pink-500/30 transition-colors">Clear Pricing</span>
                <span className="px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 text-sm md:text-base font-bold bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-sm group-hover:border-pink-500/30 transition-colors">True Partnership</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
