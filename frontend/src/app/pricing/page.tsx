'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { plans } from '../../data/site';

const PricingCard = ({ plan, delay }: { plan: (typeof plans)[number]; delay: number }) => {
  const { id, title, price, description, features, popular } = plan;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`h-full ${popular ? 'z-10 lg:scale-105' : ''}`}
    >
      <div
        className={`relative h-full flex flex-col rounded-[2.5rem] border ${popular ? 'border-blue-500/50 bg-gray-900 shadow-2xl' : 'border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] hover:border-blue-500/30'} p-8 md:p-10 overflow-hidden transition-colors duration-300`}
      >
        {popular && <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>}

        <div className="relative z-10 flex-grow">
          {popular && (
            <span className="bg-blue-600 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6 inline-block shadow-[0_0_20px_rgba(37,99,235,0.5)]">
              Most Popular
            </span>
          )}
          <h3 className={`text-2xl sm:text-3xl font-black mb-3 ${popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{title}</h3>
          <p className={`mb-8 text-base font-medium lg:min-h-[3rem] ${popular ? 'text-gray-400' : 'text-gray-500'}`}>{description}</p>

          <div className="mb-8">
            <span className={`text-4xl sm:text-5xl font-black ${popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{price}</span>
            {price !== 'Custom' && <span className={`text-base sm:text-lg font-medium ${popular ? 'text-gray-400' : 'text-gray-500'}`}> /project</span>}
          </div>

          <Link
            href={`/contact?plan=${id}`}
            className={`group/btn flex items-center justify-center gap-2 w-full py-4 rounded-full font-bold transition-colors duration-300 mb-10 ${popular ? 'bg-white text-black hover:bg-cyan-400' : 'bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600'}`}
          >
            {price === 'Custom' ? 'Get a Quote' : 'Get Started'}
            <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature} className={`flex items-start gap-3 ${popular ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>
                <span className={`w-2 h-2 mt-2 rounded-full shrink-0 ${popular ? 'bg-cyan-500' : 'bg-blue-500'}`}></span>
                <span className="text-base font-medium leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const FAQItem = ({ q, a, i }: { q: string; a: string; i: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="group bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-6 md:px-8 md:py-6 text-base md:text-lg font-bold text-gray-900 dark:text-white flex justify-between items-center outline-none text-left"
      >
        {q}
        <motion.span 
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-blue-500 text-2xl font-normal leading-none"
        >
          +
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 md:px-8 md:pb-6 text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed border-t border-gray-100 dark:border-white/5 pt-4 font-medium">
          {a}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent font-sans selection:bg-blue-500/30 selection:text-white transition-colors duration-500">
      <Navbar />
      
      <main className="flex-grow pt-40">
        <div className="fixed inset-0 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-[min(31.25rem,80vw)] h-[min(31.25rem,80vw)] bg-purple-300 dark:bg-indigo-600 rounded-full opacity-60 dark:opacity-30 glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[min(31.25rem,80vw)] h-[min(31.25rem,80vw)] bg-blue-300 dark:bg-cyan-600 rounded-full opacity-60 dark:opacity-30 transition-colors duration-500 glow"></div>
        </div>

        <section className="w-full max-w-[112.5rem] mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center relative z-10 min-h-[40vh] flex flex-col justify-center items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12vw] sm:text-6xl md:text-[7rem] font-display font-bold text-black dark:text-white tracking-tighter leading-[1] mb-8"
          >
            Simple Prices.<br />
            <span className="font-accent font-normal text-[1.2em] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 inline-block pr-8 pb-2">
              Big Results.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-3xl text-gray-600 dark:text-gray-400 font-medium tracking-tight max-w-3xl leading-relaxed mx-auto"
          >
            Clear, fixed prices for most websites. Bigger projects get a custom quote after a short call.
          </motion.p>
        </section>

        <section className="w-full max-w-[87.5rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-2xl lg:max-w-none mx-auto">
            
            {plans.map((plan, i) => (
              <PricingCard key={plan.id} plan={plan} delay={0.1 + i * 0.1} />
            ))}
          </div>
        </section>

        <section className="w-full max-w-[112.5rem] mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 dark:text-white tracking-tighter mb-4">Included in every plan</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">We never compromise on the baseline quality of your product.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { title: "Responsive Design", desc: "Looks perfect on mobile, tablet, and desktop.", icon: "📱", color: "from-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:to-cyan-500/10", border: "border-blue-500/20 hover:border-blue-500/50" },
              { title: "SEO Optimized", desc: "Built with best practices to rank on Google.", icon: "🔍", color: "from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10", border: "border-purple-500/20 hover:border-purple-500/50" },
              { title: "Fast Loading", desc: "Optimized assets and modern frameworks.", icon: "⚡", color: "from-amber-500/20 to-orange-500/20 dark:from-amber-500/10 dark:to-orange-500/10", border: "border-amber-500/20 hover:border-amber-500/50" },
              { title: "SSL Security", desc: "Free SSL certificate setup and configuration.", icon: "🔒", color: "from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/10 dark:to-teal-500/10", border: "border-emerald-500/20 hover:border-emerald-500/50" },
            ].map((feat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative bg-gradient-to-br ${feat.color} rounded-[2.5rem] p-8 border ${feat.border} overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl`}
              >
                <div className="absolute inset-0 bg-white dark:bg-[#0a0a0a] opacity-60 dark:opacity-80 -z-10"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 origin-left">{feat.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feat.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-base font-medium leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="w-full max-w-[112.5rem] mx-auto px-4 sm:px-6 lg:px-8 mb-40 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 dark:text-white tracking-tighter mb-4">Frequently Asked Questions</h2>
          </motion.div>
          
          <div className="space-y-4">
            {[
              { q: "How long does a website take to build?", a: "A standard Starter website usually takes 2-3 weeks. More complex Professional or Enterprise projects can take 6-12 weeks depending on the features required." },
              { q: "Do you provide domain and hosting?", a: "We can recommend the best hosting platforms (like Vercel or AWS) and help you set everything up, but the billing for those services will be directly under your name so you retain full ownership." },
              { q: "What is your payment structure?", a: "We typically require a 50% deposit to begin work, with the remaining 50% due upon project completion and launch." },
              { q: "Can I update the website myself?", a: "Yes! With the Professional plan we add a CMS, so you can edit text, add blog posts and change images without touching code." }
            ].map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} i={i} />
            ))}
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
