'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { contactEmail, portalEnabled, socials } from '../data/site';

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
      
      <div className="w-full bg-blue-600 py-4 transform -rotate-1 scale-105 shadow-md z-20 relative flex overflow-hidden whitespace-nowrap">
        <div className="flex w-max animate-[marquee_120s_linear_infinite]">
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
        </div>
      </div>

      <div className="max-w-[112.5rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
        
        <div className="absolute top-20 right-1/4 w-[min(25rem,80vw)] h-[min(25rem,80vw)] bg-blue-500/10 dark:bg-blue-600/20 rounded-full pointer-events-none glow"></div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 pt-16 border-t border-gray-200 dark:border-white/10 relative z-10">
          
          <div className="lg:col-span-4">
            <div className="flex items-end mb-6 w-max">
              <span className="text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Pix</span>
              <span className="text-4xl font-medium tracking-tight text-gray-900 dark:text-white">ential</span>
              <span className="text-4xl font-black text-cyan-500">.</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-sm text-lg leading-relaxed">
              We design and build fast, modern websites and web apps that help businesses grow.
            </p>
            <a href={`mailto:${contactEmail}`} className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
              {contactEmail}
            </a>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400 font-medium">
              <li><FooterLink href="/work" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Work</FooterLink></li>
              <li><FooterLink href="/services" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Services</FooterLink></li>
              <li><FooterLink href="/about" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">About Us</FooterLink></li>
              <li><FooterLink href="/pricing" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Pricing</FooterLink></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-widest text-sm">More</h4>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400 font-medium">
              {portalEnabled && <li><FooterLink href="/login" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Client Login</FooterLink></li>}
              <li><FooterLink href="/privacy" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Privacy Policy</FooterLink></li>
              <li><FooterLink href="/contact" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Contact</FooterLink></li>
            </ul>
          </div>

          {socials.length > 0 && (
            <div className="lg:col-span-2">
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-widest text-sm">Socials</h4>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400 font-medium">
                {socials.map((social) => (
                  <li key={social.name}>
                    <a href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pb-8 text-sm font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase relative z-10 border-t border-gray-200 dark:border-white/5 pt-6 mt-6 mx-4 sm:mx-6 lg:mx-8">
        <div>&copy; {new Date().getFullYear()} Pixential</div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <FooterLink href="/privacy" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</FooterLink>
        </div>
      </div>
    </footer>
  );
}

