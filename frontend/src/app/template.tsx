'use client';

import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 1. First Curtain (Brand Blue) - Sweeps UP */}
      <motion.div
        className="fixed inset-0 bg-blue-600 z-[9999] pointer-events-none origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
      
      {/* 2. Second Curtain (Theme Background) - Sweeps UP with delay */}
      <motion.div
        className="fixed inset-0 bg-gray-100 dark:bg-black z-[9998] pointer-events-none origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      />

      {/* 3. Page Content Slide Up & Fade In */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.1
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
