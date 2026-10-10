'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Discovery', desc: 'We take the time to learn about your business, your market, and what your customers actually need.', color: 'from-blue-500/10 dark:from-blue-900/40' },
  { num: '02', title: 'Design', desc: 'We create beautiful, easy-to-use designs that make your business look professional and trustworthy.', color: 'from-purple-500/10 dark:from-purple-900/40' },
  { num: '03', title: 'Development', desc: 'We build your website from scratch using modern technology so it loads fast and works perfectly.', color: 'from-pink-500/10 dark:from-pink-900/40' },
  { num: '04', title: 'Growth', desc: 'We help you launch successfully and use proven SEO strategies to get more eyes on your website.', color: 'from-emerald-500/10 dark:from-emerald-900/40' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, type: "spring" as const, bounce: 0.4 }
  }
};

export default function Process() {
  return (
    <section className="py-24 bg-transparent relative z-10 transition-colors duration-500">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-bold text-black dark:text-white tracking-tighter leading-[0.9]"
        >
          How we <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 pr-8 pb-2 inline-block">make magic.</span>
        </motion.h2>
      </div>

      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, idx) => (
            <motion.div 
              variants={itemVariants}
              key={idx} 
              className={`group relative overflow-hidden bg-white/40 dark:bg-[#0a0a0a]/40 backdrop-blur-xl p-8 sm:p-12 rounded-[2rem] border border-gray-200 dark:border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 mb-8 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-500 pr-8 pb-2 inline-block">
                  {step.num}
                </div>
                <h3 className="text-3xl font-bold text-black dark:text-white mb-4">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
