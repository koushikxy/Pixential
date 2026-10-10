'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function FooterLink({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) {
  const pathname = usePathname();
  const isSamePage = pathname === href;
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isSamePage) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Link href={href} onClick={handleClick} scroll={!isSamePage} className={className}>
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-black text-gray-900 dark:text-white pt-0 pb-0 border-t border-gray-100 dark:border-white/5 transition-colors duration-500 overflow-hidden">
      
      {/* 1. Perfectly Smooth Infinite Marquee */}
      <div className="w-full bg-blue-600 py-4 transform -rotate-1 scale-105 shadow-md z-20 relative flex overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ ease: "linear", duration: 120, repeat: Infinity }}
          className="flex w-max"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              {Array(10).fill("").map((_, j) => (
                <div key={j} className="flex items-center gap-8 px-4 text-xl md:text-2xl font-black uppercase tracking-widest text-white italic">
                  <span>Let's build something amazing</span>
                  <span className="text-cyan-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l2.4 7.6H22l-6.2 4.5 2.4 7.6-6.2-4.5-6.2 4.5 2.4-7.6-6.2-4.5h7.6z"/>
                    </svg>
                  </span>
                  <span>Available for new projects</span>
                  <span className="text-cyan-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l2.4 7.6H22l-6.2 4.5 2.4 7.6-6.2-4.5-6.2 4.5 2.4-7.6-6.2-4.5h7.6z"/>
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
        
        {/* Subtle Glow Background for the CTA area */}
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>

        {/* 2. Top CTA Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-24 gap-12 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-gray-900 dark:text-white leading-[0.9] tracking-tighter">
              Got an idea? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 italic pr-4 pb-2 inline-block">
                Let's build it.
              </span>
            </h2>
          </div>
          
          <div className="flex flex-col items-start lg:items-end gap-6 w-full lg:w-auto">
            <div className="flex items-center gap-3 bg-gray-50 dark:bg-white/5 px-6 py-3 rounded-full border border-gray-200 dark:border-white/10 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest">Accepting Projects</span>
            </div>
            
            <FooterLink 
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
            >
              Say Hi
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </FooterLink>
          </div>
        </div>

        {/* 3. Link Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 pt-16 border-t border-gray-200 dark:border-white/10 relative z-10">
          
          <div className="lg:col-span-4">
            <div className="flex items-end mb-6 group cursor-pointer w-max">
              <span className="text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 ">Pix</span>
              <span className="text-4xl font-medium tracking-tight text-gray-900 dark:text-white">ential</span>
              <span className="text-4xl font-black text-cyan-500">.</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-sm text-lg leading-relaxed">
              Websites That Feel Like Magic. We design and build platforms that look amazing and help your business scale.
            </p>
            <form className="relative max-w-sm group">
              <input type="email" placeholder="Subscribe to our insights" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-900 dark:text-white transition-all" />
              <button type="button" className="absolute right-2 top-2 bottom-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 rounded-lg text-sm font-bold transition-all hover:bg-blue-600 dark:hover:bg-cyan-400 hover:text-white dark:hover:text-gray-900 flex items-center justify-center">
                Subscribe
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400 font-medium">
              <li><FooterLink href="/work" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Work</FooterLink></li>
              <li><FooterLink href="/services" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Services</FooterLink></li>
              <li><FooterLink href="/about" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">About Us</FooterLink></li>
              <li><FooterLink href="#" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Careers</FooterLink></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-widest text-sm">Resources</h4>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400 font-medium">
              <li><FooterLink href="#" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Insights</FooterLink></li>
              <li><FooterLink href="/work" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Case Studies</FooterLink></li>
              <li><FooterLink href="#" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Open Source</FooterLink></li>
              <li><FooterLink href="/contact" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Contact</FooterLink></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-widest text-sm">Socials</h4>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400 font-medium">
              <li>
                <a href="#" className="group flex items-center gap-3 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.007 4.15H5.059z" />
                  </svg>
                  Twitter (X)
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-3 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-3 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-3 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright Line */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pb-8 text-sm font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase relative z-10 border-t border-gray-200 dark:border-white/5 pt-6 mt-6 mx-4 sm:mx-6 lg:mx-8">
        <div>&copy; {new Date().getFullYear()} Pixential</div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <FooterLink href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</FooterLink>
          <FooterLink href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</FooterLink>
        </div>
      </div>
    </footer>
  );
}



