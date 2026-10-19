'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowRight } from 'lucide-react';
import { fetchAPI } from '../utils/api';
import { budgets, contactEmail, portalEnabled, socials } from '../data/site';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [budget, setBudget] = useState(budgets[3].value);

  useEffect(() => {
    const plan = new URLSearchParams(window.location.search).get('plan');
    const match = budgets.find((b) => b.plan && b.plan === plan);
    if (match) setBudget(match.value);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setStatus('submitting');
    try {
      if (portalEnabled) await fetchAPI('/leads', { method: 'POST', body: { ...formData, budget } });
      else {
        const res = await fetch('/__forms.html', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ 'form-name': 'contact', ...formData, budget }).toString(),
        });
        if (!res.ok) throw new Error('Failed to fetch');
      }
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      setStatus('success');
    } catch (err) {
      setError((err as Error).message === 'Failed to fetch' ? `Could not send right now. Please email us at ${contactEmail}.` : (err as Error).message);
      setStatus('idle');
    }
  };

  const inputClasses = "w-full bg-transparent border-b-2 border-gray-300 dark:border-white/20 py-4 text-xl text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-blue-600 dark:focus:border-cyan-400 transition-colors duration-300 rounded-none";

  return (
    <section id="contact" className="pt-36 pb-24 md:py-32 relative overflow-hidden bg-transparent transition-colors duration-500">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[62.5rem] max-h-[62.5rem] bg-gradient-to-tr from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-cyan-600/20 rounded-full pointer-events-none -z-10 glow"></div>
      
      <div className="w-full max-w-[112.5rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h3 className="text-5xl md:text-7xl font-display font-bold text-black dark:text-white tracking-tighter leading-[1]">
              Ready to create <br />
              <span className="font-accent text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 text-[1.1em] font-normal italic pr-8 pb-2 inline-block">magic?</span>
            </h3>
            <p className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
              We're currently accepting new projects. Tell us what you need and we will reply within 24 hours.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="h-full min-h-[25rem] flex flex-col items-start justify-center bg-gray-50 dark:bg-white/5 rounded-[2rem] p-12 border border-gray-200 dark:border-white/10"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30 mb-8">
                    <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-4xl font-display font-bold text-black dark:text-white mb-4">Message received.</h3>
                  <p className="text-xl text-gray-600 dark:text-gray-400 font-medium max-w-md mb-10">We'll review your project details and get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="group flex items-center gap-3 pb-2 border-b-2 border-black dark:border-white text-black dark:text-white font-bold text-lg hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-600 dark:hover:border-cyan-400 transition-colors"
                  >
                    Start another inquiry
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-12"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative">
                      <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${(focusedField === 'firstName' || formData.firstName) ? '-top-6 text-sm text-blue-600 dark:text-cyan-400 font-bold' : 'top-4 text-xl text-gray-400 dark:text-gray-500'}`}>
                        First Name
                      </label>
                      <input 
                        type="text" 
                        required 
                        onFocus={() => setFocusedField('firstName')}
                        onBlur={() => setFocusedField(null)} value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className={inputClasses} 
                      />
                    </div>
                    <div className="relative">
                      <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${(focusedField === 'lastName' || formData.lastName) ? '-top-6 text-sm text-blue-600 dark:text-cyan-400 font-bold' : 'top-4 text-xl text-gray-400 dark:text-gray-500'}`}>
                        Last Name
                      </label>
                      <input 
                        type="text" 
                        required 
                        onFocus={() => setFocusedField('lastName')}
                        onBlur={() => setFocusedField(null)} value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className={inputClasses} 
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${(focusedField === 'email' || formData.email) ? '-top-6 text-sm text-blue-600 dark:text-cyan-400 font-bold' : 'top-4 text-xl text-gray-400 dark:text-gray-500'}`}>
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      required 
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={inputClasses} 
                    />
                  </div>
                  
                  <div className="relative pt-2 pb-6 border-b border-transparent">
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Which plan fits?</p>
                    <p className="text-sm text-gray-500 mb-4">
                      See what each plan includes on the <Link href="/pricing" className="underline hover:text-blue-600 dark:hover:text-cyan-400">pricing page</Link>.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {budgets.map((b) => (
                        <label key={b.value} className="cursor-pointer">
                          <input type="radio" name="budget" value={b.value} checked={budget === b.value} onChange={() => setBudget(b.value)} className="peer sr-only" />
                          <div className="px-5 py-3 rounded-full border border-gray-300 dark:border-white/20 text-gray-600 dark:text-gray-400 font-medium peer-checked:bg-black peer-checked:text-white dark:peer-checked:bg-white dark:peer-checked:text-black dark:peer-checked:border-white peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500 transition-colors hover:border-gray-500 dark:hover:border-white/50">
                            {b.value}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative pt-4">
                    <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${(focusedField === 'message' || formData.message) ? '-top-2 text-sm text-blue-600 dark:text-cyan-400 font-bold' : 'top-8 text-xl text-gray-400 dark:text-gray-500'}`}>
                      Tell us about your project...
                    </label>
                    <textarea 
                      required 
                      rows={1}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className={`${inputClasses} resize-none overflow-hidden min-h-[60px]`}
                      onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = 'auto';
                        target.style.height = target.scrollHeight + 'px';
                      }}
                    ></textarea>
                  </div>
                  
                  <div className="pt-8">
                    {error && <p className="mb-6 text-red-600 dark:text-red-400 font-medium">{error}</p>}
                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="group relative inline-flex items-center gap-4 h-20 px-12 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold text-xl overflow-hidden disabled:opacity-70 transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]"
                    >
                      <div className="absolute inset-0 w-0 bg-blue-600 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"></div>
                      
                      <span className="relative z-10 flex items-center transition-colors duration-300 group-hover:text-white">
                        {status === 'submitting' ? 'Sending...' : 'Send Request'}
                      </span>
                      
                      <div className="relative z-10 overflow-hidden w-6 h-6 flex items-center justify-center">
                        {status === 'submitting' ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          <>
                            <svg className="absolute w-6 h-6 transform group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] text-white dark:text-black group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            <svg className="absolute w-6 h-6 transform -translate-x-6 translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                          </>
                        )}
                      </div>
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="bg-gray-50 dark:bg-[#0a0a0a] rounded-[2.5rem] p-8 md:p-14 border border-gray-200 dark:border-white/5 shadow-xl h-full flex flex-col justify-between">
              
              <div className="space-y-12">
                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Contact Details</h4>
                  <div className="flex flex-col gap-2">
                    <span className="text-xl font-medium text-gray-600 dark:text-gray-400">Koushik Maity</span>
                    <a href={`mailto:${contactEmail}`} className="group inline-flex items-center gap-4 text-2xl md:text-3xl font-bold text-black dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors break-all">
                      {contactEmail}
                      <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Headquarters</h4>
                  <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-300 font-medium leading-relaxed">
                    Koramangala, <br />
                    Bangalore, Karnataka <br />
                    India 560034
                  </p>
                </div>
              </div>

              {socials.length > 0 && (
                <div className="mt-16 pt-12 border-t border-gray-200 dark:border-white/10">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">Follow Us</h4>
                  <div className="flex flex-wrap gap-4">
                    {socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full border border-gray-300 dark:border-white/10 text-gray-800 dark:text-gray-300 font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
              
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

