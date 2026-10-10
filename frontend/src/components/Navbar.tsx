'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' }
  ];

  // Custom link wrapper to intercept same-page navigation and smooth scroll to top
  const NavLink = ({ href, children, className, onClick, style }: { href: string, children: React.ReactNode, className?: string, onClick?: () => void, style?: React.CSSProperties }) => {
    const isSamePage = pathname === href;
    
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isSamePage) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      if (onClick) onClick();
    };

    return (
      <Link href={href} scroll={!isSamePage} onClick={handleClick} className={className} style={style}>
        {children}
      </Link>
    );
  };

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav className="pointer-events-auto bg-white/95 dark:bg-black/80 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-full h-16 flex items-center justify-between shadow-2xl transition-all w-[90%] max-w-5xl pl-6 md:pl-8 pr-2">
          
          <NavLink href="/" onClick={() => setIsOpen(false)} className="flex items-center group transition-transform hover:scale-[1.02] duration-300">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 ">Pix</span>
            <span className="text-xl md:text-2xl font-medium tracking-tight text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">ential</span>
            <span className="text-xl md:text-2xl font-black text-cyan-500">.</span>
          </NavLink>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map(link => (
              <NavLink key={link.name} href={link.path} className="relative group px-4 py-2 text-[15px] font-semibold text-gray-700 dark:text-gray-300 transition-colors rounded-full">
                {/* Glass Pill Background */}
                <span className="absolute inset-0 bg-gray-100/80 dark:bg-white/10 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] backdrop-blur-md z-0"></span>
                
                {/* Roll-up Text */}
                <div className="relative z-10 flex flex-col h-[20px] overflow-hidden">
                  <span className="leading-[20px] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
                    {link.name}
                  </span>
                  <span className="leading-[20px] absolute top-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0 text-blue-600 dark:text-cyan-400">
                    {link.name}
                  </span>
                </div>
              </NavLink>
            ))}
          </div>
          
          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <div className="h-5 w-px bg-gray-200 dark:bg-white/10 hidden lg:block"></div>
            
            {/* Login / Profile Icon */}
            <NavLink href="/login" className="hidden lg:flex items-center rounded-full bg-gray-100 dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-cyan-500/10 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group shadow-sm hover:shadow-md border border-transparent hover:border-blue-200 dark:hover:border-cyan-500/30">
              <div className="flex items-center justify-center w-10 h-10 shrink-0">
                 <svg className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                 </svg>
              </div>
              <div className="max-w-0 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:max-w-[80px]">
                 <span className="block pr-4 whitespace-nowrap text-[14px] font-bold text-blue-600 dark:text-cyan-400">
                   Login
                 </span>
              </div>
            </NavLink>
            
            {/* CTA Button */}
            <NavLink href="/contact" className="hidden sm:flex relative group items-center justify-center bg-black dark:bg-white text-white dark:text-black px-5 md:px-7 py-2.5 rounded-full text-[13px] md:text-[15px] font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <span className="relative z-10 flex items-center gap-2 transform transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-x-2">
                Start a Project
              </span>
              <svg className="absolute right-3 md:right-4 w-4 h-4 md:w-5 md:h-5 text-white dark:text-black opacity-0 -translate-x-4 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:opacity-100 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NavLink>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors mr-1"
            >
              <span className={`w-5 h-[2px] bg-black dark:bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
              <span className={`w-5 h-[2px] bg-black dark:bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-[2px] bg-black dark:bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
            </button>
          </div>
        </nav>
      </div>

      {/* Full Screen Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-3xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] md:hidden flex flex-col justify-center items-center ${
          isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'
        }`}
      >
        <div className="flex flex-col items-center gap-8 w-full px-6">
          {navLinks.map((link, i) => (
            <NavLink 
              key={link.name} 
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-display font-black text-black dark:text-white tracking-tighter hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              style={{
                transitionDelay: isOpen ? `${i * 100}ms` : '0ms',
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isOpen ? 1 : 0,
                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
            >
              {link.name}
            </NavLink>
          ))}
          
          <div 
            className="w-full h-px bg-gray-200 dark:bg-white/10 my-4 max-w-[200px]"
            style={{
              transitionDelay: isOpen ? '400ms' : '0ms',
              transform: isOpen ? 'scaleX(1)' : 'scaleX(0)',
              opacity: isOpen ? 1 : 0,
              transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
            }}
          ></div>
          
          <div 
            className="flex items-center gap-6"
            style={{
              transitionDelay: isOpen ? '500ms' : '0ms',
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isOpen ? 1 : 0,
              transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
            }}
          >
            <ThemeToggle />
            <NavLink 
              href="/login" 
              onClick={() => setIsOpen(false)}
              className="font-bold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
            >
              Login
            </NavLink>
          </div>

          <NavLink 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="mt-4 w-full max-w-[250px] relative group flex items-center justify-center bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full text-lg font-bold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
            style={{
              transitionDelay: isOpen ? '600ms' : '0ms',
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isOpen ? 1 : 0,
              transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
            }}
          >
            <span className="relative z-10 flex items-center gap-2 transform transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-x-3">
              Start a Project
            </span>
            <svg className="absolute right-6 w-6 h-6 text-white dark:text-black opacity-0 -translate-x-4 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:opacity-100 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NavLink>
        </div>
      </div>
    </>
  );
}

