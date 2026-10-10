'use client';
import React from 'react';
import Navbar from '../../components/Navbar';
import Process from '../../components/Process';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent font-sans selection:bg-purple-500/30 selection:text-white transition-colors duration-500">
      <Navbar />
      
      <main className="flex-grow pt-40">
        {/* Header Section */}
        <section className="relative w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 mb-40 z-10 min-h-[50vh] flex flex-col justify-center text-center items-center">
          
          {/* Creative Gradient Mesh Background (Matched to Homepage) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-300 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-[128px] opacity-60 dark:opacity-30 animate-pulse transition-colors duration-500"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-300 dark:bg-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-[128px] opacity-60 dark:opacity-30 transition-colors duration-500"></div>
          </div>

          <div className="max-w-5xl relative">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[12vw] sm:text-6xl md:text-[7rem] font-display font-bold text-black dark:text-white tracking-tighter leading-[1] mb-8"
            >
              What We <br />
              <span className="font-accent font-normal text-[1.2em] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 pr-8 pb-2 inline-block">
                Do.
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-3xl text-gray-600 dark:text-gray-400 font-medium tracking-tight max-w-3xl leading-relaxed mx-auto"
            >
              We combine beautiful design with expert engineering to build websites that help your business stand out and grow.
            </motion.p>
          </div>
        </section>

        {/* Visual Bento Grid Services */}
        <section className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[350px] md:auto-rows-[450px]">
            
            {/* Service 1: Engineering (Span 2) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-2 group relative rounded-[3rem] overflow-hidden bg-black flex flex-col justify-end p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              {/* Using high quality unsplash image */}
              <img 
                src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop" 
                alt="Web Engineering" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">01 / Engineering</span>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tighter">
                  Web Development
                </h2>
                <p className="text-gray-300 max-w-xl mb-6 font-medium text-lg hidden md:block">We build blazing-fast, scalable web applications using modern frameworks that are optimized for performance and security.</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase">React / Next.js</span>
                  <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase">E-Commerce</span>
                  <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase">CMS Integration</span>
                </div>
              </div>
            </motion.div>

            {/* Service 2: Design (Span 1) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-1 group relative rounded-[3rem] overflow-hidden bg-black flex flex-col justify-end p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                alt="UI/UX Design" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-pink-400 font-bold tracking-widest uppercase text-sm mb-4 block">02 / Design</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tighter">
                  UI/UX & Branding
                </h2>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase">User Experience</span>
                  <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase">Motion Graphics</span>
                </div>
              </div>
            </motion.div>

            {/* Service 3: Growth (Span 3) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-3 group relative rounded-[3rem] overflow-hidden bg-black flex flex-col justify-end p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              <img 
                src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=2564&auto=format&fit=crop" 
                alt="Growth & SEO" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div>
                  <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">03 / Growth</span>
                  <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter mb-4">
                    SEO & Conversion
                  </h2>
                  <p className="text-gray-300 max-w-2xl font-medium text-lg hidden md:block">We don't just build websites; we ensure they rank on Google and convert visitors into paying customers through data-driven strategies.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase">Technical SEO</span>
                  <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase">Analytics</span>
                  <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase">CRO</span>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        <div className="mt-40">
          <Process />
        </div>

        {/* Creative CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 mt-40 mb-32 z-10"
        >
          <div className="group relative w-full rounded-[4rem] bg-gray-100 dark:bg-[#050505] overflow-hidden flex flex-col items-center justify-center p-16 sm:p-24 md:p-40 text-center shadow-2xl border border-gray-200 dark:border-white/5 hover:border-purple-500/30 transition-colors duration-700">
            
            {/* Animated Background Gradients & Noise */}
            <div className="absolute inset-0 z-0 opacity-20 dark:opacity-40 group-hover:opacity-40 dark:group-hover:opacity-80 transition-opacity duration-1000">
              <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/40 rounded-full mix-blend-screen dark:mix-blend-screen filter blur-[120px] animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/40 rounded-full mix-blend-screen dark:mix-blend-screen filter blur-[120px] animate-[spin_15s_linear_infinite_reverse]"></div>
              {/* Vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#f3f4f6_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] z-10"></div>
            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md mb-12 transform transition-transform duration-700 group-hover:-translate-y-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-gray-700 dark:text-white text-sm font-bold tracking-widest uppercase">Available for new projects</span>
              </div>
              
              <h2 className="text-[12vw] sm:text-7xl md:text-[9rem] font-display font-bold text-black dark:text-white tracking-tighter leading-[0.85] mb-16 transform transition-transform duration-700 group-hover:-translate-y-4">
                Have an <br />
                <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 pr-8 pb-2 inline-block">
                  Idea?
                </span>
              </h2>

              <Link href="/contact" className="group/btn relative overflow-hidden inline-flex items-center justify-center px-12 py-6 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold text-xl md:text-2xl transition-transform duration-300 hover:scale-105 active:scale-95 shadow-[0_0_0_0_rgba(0,0,0,0.1)] dark:shadow-[0_0_0_0_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_rgba(168,85,247,0.4)] transform transition-transform duration-700 group-hover:-translate-y-2">
                {/* Button hover wipe effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] rounded-full z-0"></span>
                
                <span className="relative z-10 flex items-center gap-4 transition-colors duration-300 group-hover/btn:text-white">
                  Let's Talk
                  <div className="w-8 h-8 rounded-full bg-white/20 dark:bg-black/10 group-hover/btn:bg-white/20 flex items-center justify-center transition-colors duration-300">
                    <svg className="w-5 h-5 transform transition-transform duration-500 group-hover/btn:rotate-45 text-white dark:text-black group-hover/btn:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </span>
              </Link>
            </div>
          </div>
        </motion.section>

      </main>
      
      <Footer />
    </div>
  );
}

