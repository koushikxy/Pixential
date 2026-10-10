'use client';

import React, { useRef, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

const PricingCard = ({ title, price, description, features, popular = false, delay = 0 }: any) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`h-full ${popular ? 'z-10 lg:scale-105' : ''}`}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay + 0.8 }}
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0)}
        className={`relative h-full flex flex-col rounded-[2.5rem] border ${popular ? 'border-blue-500/50 bg-gray-900 shadow-2xl' : 'border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] hover:border-blue-500/30'} p-8 md:p-10 overflow-hidden group transition-all duration-500`}
      >
      {/* Interactive Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />
      
      {popular && (
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
      )}

      {/* Content */}
      <div className="relative z-10 flex-grow">
        {popular && (
          <motion.span 
            animate={{ boxShadow: ['0 0 15px rgba(37,99,235,0.5)', '0 0 30px rgba(6,182,212,0.8)', '0 0 15px rgba(37,99,235,0.5)'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="bg-blue-600 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6 inline-block"
          >
            Most Popular
          </motion.span>
        )}
        <h3 className={`text-2xl sm:text-3xl font-black mb-3 ${popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{title}</h3>
        <p className={`mb-8 text-sm font-medium h-10 ${popular ? 'text-gray-400' : 'text-gray-500'}`}>{description}</p>
        
        <div className="mb-8">
          <span className={`text-4xl sm:text-5xl font-black ${popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{price}</span>
          {price !== "Custom" && <span className={`text-base sm:text-lg font-medium ${popular ? 'text-gray-400' : 'text-gray-500'}`}> /project</span>}
        </div>
        
        <button className={`w-full py-4 rounded-full font-bold transition-all duration-300 mb-10 overflow-hidden relative group/btn ${popular ? 'bg-white text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]' : 'bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white border border-transparent hover:border-blue-500'}`}>
           <span className="relative z-10 flex items-center justify-center gap-2 transform transition-transform duration-500 group-hover/btn:-translate-x-2">
             {price === "Custom" ? "Contact Us" : "Get Started"}
           </span>
           <svg className="absolute right-8 top-1/2 -translate-y-1/2 w-5 h-5 opacity-0 -translate-x-4 transition-all duration-500 group-hover/btn:opacity-100 group-hover/btn:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
           </svg>
        </button>

        <div className="space-y-4">
          {features.map((feature: string, i: number) => (
            <motion.div 
              key={i} 
              initial="rest"
              whileHover="hover"
              animate="rest"
              className={`flex items-start gap-3 cursor-default group/feature ${popular ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}
            >
              <motion.div 
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.5, backgroundColor: popular ? '#22d3ee' : '#3b82f6' }
                }}
                className={`w-2 h-2 mt-1.5 rounded-full shrink-0 ${popular ? 'bg-cyan-500' : 'bg-blue-500'}`}
              ></motion.div>
              {/* FIXED: The text color on hover for popular card is explicitly white so it stays visible */}
              <span className={`text-sm font-medium leading-relaxed transition-colors ${popular ? 'group-hover/feature:text-white' : 'group-hover/feature:text-gray-900 dark:group-hover/feature:text-white'}`}>{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
      </motion.div>
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
        {/* Creative Gradient Mesh Background (Matched to Homepage) */}
        <div className="fixed inset-0 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-300 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-[128px] opacity-60 dark:opacity-30 animate-pulse transition-colors duration-500"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-300 dark:bg-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-[128px] opacity-60 dark:opacity-30 transition-colors duration-500"></div>
        </div>

        {/* Hero Section */}
        <section className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center relative z-10 min-h-[40vh] flex flex-col justify-center items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12vw] sm:text-6xl md:text-[7rem] font-display font-bold text-black dark:text-white tracking-tighter leading-[1] mb-8"
          >
            Simple Prices.<br />
            <motion.span 
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="font-accent font-normal text-[1.2em] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 bg-[length:200%_auto] inline-block pr-8 pb-2"
            >
              Big Results.
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-3xl text-gray-600 dark:text-gray-400 font-medium tracking-tight max-w-3xl leading-relaxed mx-auto"
          >
            Premium engineering and design mapped precisely to the scale of your ambition. Built for businesses ready to dominate globally.
          </motion.p>
        </section>

        {/* Pricing Cards */}
        <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            <PricingCard 
              title="Starter"
              price="₹25,000"
              description="Perfect for local businesses and startups needing a premium digital presence."
              delay={0.2}
              features={[
                "Custom UI/UX Design (Up to 5 Pages)",
                "Mobile-First Responsive Layout",
                "Basic SEO Setup & Optimization",
                "Contact Forms & Lead Generation",
                "Ultra-Fast Load Speeds (Next.js)",
                "1 Month Post-Launch Support",
                "Delivery in 2-3 Weeks"
              ]}
            />

            <PricingCard 
              title="Professional"
              price="₹60,000"
              description="For growing brands needing high performance, content management, and scaling."
              popular={true}
              delay={0.4}
              features={[
                "Everything in Starter",
                "Up to 15 Pages Custom Design",
                "Headless CMS (Sanity/Strapi)",
                "Advanced Technical SEO & Schema",
                "Analytics & Conversion Tracking",
                "Premium Animations & Micro-interactions",
                "3 Months Priority Support"
              ]}
            />

            <PricingCard 
              title="Enterprise"
              price="Custom"
              description="For massive scale, complex platforms, and bespoke web applications."
              delay={0.6}
              features={[
                "Unlimited Custom Pages",
                "Complex Backend & API Integrations",
                "E-Commerce / Payment Gateways",
                "Advanced Security & Scalability",
                "Dedicated Account Manager",
                "24/7 SLA Support & Monitoring",
                "Full Team Allocation"
              ]}
            />

          </div>
        </section>

        {/* What's Included Section */}
        <section className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10">
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
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 mb-40 relative z-10">
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
              { q: "Can I update the website myself?", a: "Yes! If you choose our Professional plan, we integrate a Headless CMS (like Sanity) that allows you to easily edit text, add blogs, and change images without writing any code." }
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
