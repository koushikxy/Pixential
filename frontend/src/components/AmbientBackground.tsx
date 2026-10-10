'use client';

import { motion } from 'framer-motion';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-20"></div>

      {/* Premium Film Grain / Noise Overlay */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.06] mix-blend-overlay pointer-events-none z-[-15]" 
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
      ></div>

      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-500/20 dark:bg-blue-600/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1], 
          opacity: [0.2, 0.5, 0.2],
          x: [0, -70, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-500/20 dark:bg-purple-600/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1], 
          opacity: [0.2, 0.4, 0.2],
          x: [0, 30, 0],
          y: [0, 60, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-cyan-500/20 dark:bg-cyan-600/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"
      />
    </div>
  );
}
