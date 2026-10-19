'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function WorkPage() {
  const { scrollYProgress } = useScroll();
  
  const ethosParallax = useTransform(scrollYProgress, [0, 0.5], [0, -150]);

  const projects = [
    {
      id: '01',
      title: 'Aura Fintech',
      category: 'Web App & Branding',
      color: 'from-blue-500 to-cyan-400',
      description: 'A clean dashboard that makes tracking investments simple.',
      image: '/fintech.jpg'
    },
    {
      id: '02',
      title: 'Zenith',
      category: 'E-Commerce',
      color: 'from-purple-500 to-pink-500',
      description: 'A minimal fashion store with a fast, simple checkout.',
      image: '/ecommerce.jpg'
    },
    {
      id: '03',
      title: 'Lumina',
      category: 'AI Platform',
      color: 'from-orange-400 to-rose-400',
      description: 'An analytics hub that makes AI model data easy to read.',
      image: '/analytics.jpg'
    },
    {
      id: '04',
      title: 'Velocity',
      category: 'Marketing Site',
      color: 'from-emerald-400 to-teal-500',
      description: 'A bold, fast landing page for a marketing agency.',
      image: '/marketing.jpg'
    },
    {
      id: '05',
      title: 'Nexus',
      category: 'Web3 Platform',
      color: 'from-blue-600 to-indigo-600',
      description: 'A sleek, dark-themed interface for a decentralized exchange.',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: '06',
      title: 'Oasis',
      category: 'Health Tech',
      color: 'from-green-400 to-emerald-500',
      description: 'A calming and accessible app design for mental wellness.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-transparent font-sans selection:bg-blue-500/30 selection:text-white transition-colors duration-500">
      <Navbar />
      
      <main className="flex-grow pt-32 md:pt-40">
        <section className="w-full max-w-[112.5rem] mx-auto px-4 sm:px-6 lg:px-8 mt-0 md:mt-12 mb-16 md:mb-40 relative z-10 md:min-h-[70vh] flex flex-col justify-center">
          <div className="relative w-full flex flex-col items-center justify-center text-center">
            
            <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
              <div className="absolute top-1/4 left-1/4 w-[min(31.25rem,80vw)] h-[min(31.25rem,80vw)] bg-purple-300 dark:bg-indigo-600 rounded-full opacity-60 dark:opacity-30 glow"></div>
              <div className="absolute bottom-1/4 right-1/4 w-[min(31.25rem,80vw)] h-[min(31.25rem,80vw)] bg-blue-300 dark:bg-cyan-600 rounded-full opacity-60 dark:opacity-30 transition-colors duration-500 glow"></div>
            </div>

            <motion.div 
              style={{ y: ethosParallax }}
              className="relative flex flex-col items-center w-full"
            >

              <h2 className="text-[12vw] sm:text-6xl md:text-[7rem] font-display font-bold leading-[1] tracking-tighter text-black dark:text-white flex flex-col items-center">
                <motion.span 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="block relative z-10"
                >
                  We engineer
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-400 relative z-20 py-2 font-accent font-normal pr-8 pb-2 inline-block"
                >
                  Unfair
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block font-light tracking-normal -mt-2 md:-mt-6 text-gray-400 dark:text-gray-500 relative z-0"
                >
                  Advantages.
                </motion.span>
              </h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-10 md:mt-24 text-xl md:text-3xl text-gray-600 dark:text-gray-400 max-w-4xl text-center font-medium leading-relaxed"
              >
                Bridging the gap between <span className="text-gray-900 dark:text-white font-bold">creative imagination</span> and <span className="text-gray-900 dark:text-white font-bold">engineering perfection</span> for ambitious brands.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="w-full relative z-10 mt-16 md:mt-32 mb-20">
          <div className="max-w-[112.5rem] mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex items-end justify-between">
            <h2 className="text-5xl md:text-[7rem] lg:text-[8rem] font-display font-black tracking-tighter text-gray-900 dark:text-white leading-[0.85]">
              Concept<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 italic pr-8 pb-2 inline-block">Works.</span>
            </h2>
            <div className="hidden md:flex items-center gap-4 text-gray-500 dark:text-gray-400">
               <span className="text-sm font-bold uppercase tracking-widest">Design Concepts</span>
               <div className="flex gap-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse delay-150"></div>
               </div>
            </div>
          </div>

          <div className="w-full overflow-hidden flex">
            <div className="flex gap-6 md:gap-10 w-max pb-12 pr-6 md:pr-10 animate-[marquee_60s_linear_infinite] hover:[animation-play-state:paused]">
              {[...projects, ...projects].map((project, i) => (
                <div
                  key={`${project.id}-${i}`}
                  aria-hidden={i >= projects.length}
                  className="group flex flex-col w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] flex-shrink-0"
                >
                  <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden relative shadow-lg mb-5 pointer-events-none">
                     <Image fill sizes="(min-width: 768px) 33vw, 100vw" src={project.image} alt={project.title} className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out" />
                     <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-40 mix-blend-overlay group-hover:opacity-10 transition-opacity duration-500`}></div>
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  
                  <div className="flex flex-col px-2">
                     <div className="flex items-center gap-3 mb-3">
                       <span className="text-xs font-black text-gray-900 dark:text-white">{project.id}</span>
                       <div className="h-px w-6 bg-gray-300 dark:bg-gray-700"></div>
                       <p className="text-xs md:text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{project.category}</p>
                     </div>
                     <h3 className="text-3xl font-display font-black text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-400 transition-all duration-300 pr-8 pb-2 inline-block">{project.title}</h3>
                     <p className="text-gray-600 dark:text-gray-400 text-base font-medium leading-relaxed max-w-sm">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full max-w-[112.5rem] mx-auto relative py-12 md:py-24 flex items-center justify-center overflow-hidden z-20">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-800 to-transparent"></div>
          

          <div className="relative bg-[#fafafa] dark:bg-[#0a0a0a] px-6 py-3 md:px-10 md:py-4 border border-gray-200 dark:border-white/10 rounded-full flex items-center gap-4 md:gap-6 shadow-xl z-10">
             <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500" />
             <span className="text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-gray-900 dark:text-white">Methodology</span>
             <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-400" />
          </div>
        </section>

        <section className="w-full max-w-[112.5rem] mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16 flex flex-col md:flex-row items-end justify-between gap-6"
          >
            <h2 className="text-5xl md:text-[6rem] lg:text-[7rem] font-display font-black text-gray-900 dark:text-white tracking-tighter leading-[0.85]">
              How we<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 italic pr-8 pb-2 inline-block">deliver.</span>
            </h2>
          </motion.div>

          <div className="w-full relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-cyan-400/5 to-transparent -z-10 pointer-events-none rounded-full glow"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
              {[
                { 
                  title: "Discovery", 
                  desc: "We learn your business, your customers and your goals before any design starts.", 
                  num: "01",
                  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
                  color: "from-blue-600 to-cyan-400",
                  textPos: "top"
                },
                { 
                  title: "Architecture", 
                  desc: "We sketch the structure, design every page and build it to work on any screen.", 
                  num: "02",
                  image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800",
                  color: "from-cyan-400 to-emerald-400",
                  textPos: "bottom"
                },
                { 
                  title: "Deployment", 
                  desc: "We test on real devices, launch the site and stay on to fix anything that comes up.", 
                  num: "03",
                  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
                  color: "from-emerald-400 to-blue-500",
                  textPos: "top"
                }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-4 md:gap-6 h-full justify-center"
                >
                  
                  {step.textPos === 'top' && (
                    <div className="flex flex-col px-2 md:pb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`h-[2px] w-6 bg-gradient-to-r ${step.color}`}></div>
                        <p className="text-gray-900 dark:text-white font-bold tracking-[0.2em] uppercase text-xs">Phase {step.num}</p>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-display font-black text-gray-900 dark:text-white mb-2 tracking-tighter">{step.title}</h3>
                      <p className="text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{step.desc}</p>
                    </div>
                  )}

                  <div className={`relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-xl group flex-shrink-0 ${step.textPos === 'top' ? 'mt-auto' : 'mb-auto'}`}>
                    <Image fill sizes="(min-width: 768px) 33vw, 100vw" src={step.image} alt={step.title} className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out" />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${step.color} mix-blend-overlay opacity-40 group-hover:opacity-10 transition-opacity duration-700`}></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none mix-blend-overlay">
                      <span
                        className="text-[6rem] lg:text-[8rem] font-display font-black text-white/90 leading-none drop-shadow-2xl"
                      >
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {step.textPos === 'bottom' && (
                    <div className="flex flex-col px-2 md:pt-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`h-[2px] w-6 bg-gradient-to-r ${step.color}`}></div>
                        <p className="text-gray-900 dark:text-white font-bold tracking-[0.2em] uppercase text-xs">Phase {step.num}</p>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-display font-black text-gray-900 dark:text-white mb-2 tracking-tighter">{step.title}</h3>
                      <p className="text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{step.desc}</p>
                    </div>
                  )}

                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full mt-16 md:mt-32 mb-24 md:mb-40 relative z-10 overflow-hidden py-20">
          <Link href="/contact" className="group block relative cursor-pointer">
            
            <div className="absolute top-1/2 left-0 w-[200vw] -translate-y-1/2 -rotate-3 flex overflow-hidden opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10">
              <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
                <span className="text-[12rem] md:text-[20rem] font-display font-black uppercase tracking-tighter px-8">
                  HAVE AN IDEA? LET'S BUILD IT —
                </span>
                <span className="text-[12rem] md:text-[20rem] font-display font-black uppercase tracking-tighter px-8">
                  HAVE AN IDEA? LET'S BUILD IT —
                </span>
                <span className="text-[12rem] md:text-[20rem] font-display font-black uppercase tracking-tighter px-8">
                  HAVE AN IDEA? LET'S BUILD IT —
                </span>
                <span className="text-[12rem] md:text-[20rem] font-display font-black uppercase tracking-tighter px-8">
                  HAVE AN IDEA? LET'S BUILD IT —
                </span>
              </div>
            </div>

            <div className="max-w-[112.5rem] mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">
              
              <h2 className="text-[4.5rem] sm:text-[6rem] md:text-[10rem] lg:text-[12rem] font-display font-black text-gray-900 dark:text-white tracking-tighter leading-[0.85] relative z-10 text-center md:text-left group-hover:scale-105 transition-transform duration-700 origin-center md:origin-left">
                Have an <br className="hidden md:block" /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 italic pr-8 pb-2 inline-block">idea?</span>
              </h2>
              
              <div className="relative z-20 flex items-center justify-center">
                
                <div className="absolute -inset-12 md:-inset-16 animate-[spin_10s_linear_infinite] pointer-events-none">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-gray-400 dark:text-gray-500 opacity-60 group-hover:opacity-100 group-hover:text-blue-500 transition-colors duration-500">
                    <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="transparent" />
                    <text className="text-[1.125rem] font-black tracking-[0.15em] uppercase" fill="currentColor">
                      <textPath href="#circlePath" startOffset="0%">
                        START A PROJECT • LET'S BUILD IT • START A PROJECT • LET'S BUILD IT • 
                      </textPath>
                    </text>
                  </svg>
                </div>
                
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(255,255,255,0.1)] group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-400 group-hover:text-white group-hover:shadow-[0_0_60px_rgba(59,130,246,0.4)] transition-all duration-500 relative z-10">
                  <svg className="w-10 h-10 md:w-16 md:h-16 -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                
              </div>
              
            </div>
            
          </Link>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}

