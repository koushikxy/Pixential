'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { question: "How long does it take?", answer: "Usually between 4 to 8 weeks, depending on how big and special the website is. We'll give you a clear timeline before we start." },
  { question: "Do you help after the website is done?", answer: "Yes! We can keep your website updated, secure, and running fast every single month, so you don't have to worry about a thing." },
  { question: "Will people find me on Google?", answer: "Yes! We build the website specifically so Google loves it and shows it to your customers first. It's built right into the code." },
  { question: "Do I completely own my website?", answer: "100%. Once it's paid for, the entire website belongs fully to you. No hostages, no hidden license fees." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-r from-blue-600/20 to-cyan-500/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        {/* Left: Creative Heading */}
        <div className="lg:col-span-5 lg:sticky top-40">
          <div className="relative">
            <span className="text-blue-600 dark:text-cyan-400 font-bold tracking-widest uppercase mb-4 block">
              Curiosity
            </span>
            <h2 className="text-[12vw] sm:text-7xl lg:text-[6rem] font-display font-black text-black dark:text-white tracking-tighter leading-[0.9] mb-8">
              Ask us <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 italic font-medium pr-8 pb-2 inline-block">anything.</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-medium max-w-md">
              We believe in total transparency. Here are the answers to the most common questions we get.
            </p>
            
            {/* Visual Element */}
            <div className="mt-12 w-24 h-24 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center relative overflow-hidden group hidden md:flex">
              <div className="absolute inset-0 bg-blue-600 dark:bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
              <svg className="w-8 h-8 text-black dark:text-white group-hover:text-white dark:group-hover:text-black relative z-10 transition-colors duration-500 animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Right: Interactive FAQ List */}
        <div className="lg:col-span-7">
          <div className="border-t border-gray-200 dark:border-white/10">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 dark:border-white/10 group">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-8 md:py-12 flex justify-between items-center focus:outline-none text-left"
                >
                  <div className="flex items-center gap-6 md:gap-12 w-full">
                    <span className={`text-2xl md:text-4xl font-black transition-colors duration-500 ${openIndex === i ? 'text-blue-600 dark:text-cyan-400' : 'text-gray-300 dark:text-gray-700'}`}>
                      0{i + 1}
                    </span>
                    <span className={`text-2xl md:text-4xl font-display font-bold transform transition-all duration-500 flex-1 ${openIndex === i ? 'text-black dark:text-white translate-x-2 md:translate-x-4' : 'text-gray-800 dark:text-gray-300 group-hover:translate-x-2 md:group-hover:translate-x-4'}`}>
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Creative Toggle Icon */}
                  <div className={`relative w-12 h-12 rounded-full border transition-colors duration-500 flex items-center justify-center shrink-0 ml-4 ${openIndex === i ? 'border-blue-600 dark:border-cyan-400 bg-blue-600/5 dark:bg-cyan-400/10' : 'border-gray-200 dark:border-white/10 group-hover:border-gray-400 dark:group-hover:border-white/30'}`}>
                    <span className={`absolute w-4 h-[2px] bg-current transition-all duration-500 ${openIndex === i ? 'text-blue-600 dark:text-cyan-400 rotate-180' : 'text-black dark:text-white'}`}></span>
                    <span className={`absolute w-4 h-[2px] bg-current transition-all duration-500 ${openIndex === i ? 'text-blue-600 dark:text-cyan-400 rotate-180 opacity-0' : 'text-black dark:text-white rotate-90'}`}></span>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, y: -10 }}
                      animate={{ height: 'auto', opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0, y: -10 }}
                      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 pl-14 md:pl-24 pr-4">
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
