'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <motion.button
      whileHover={{ rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors overflow-hidden"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ y: isDark ? 24 : 0, opacity: isDark ? 0 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="absolute"
      >
        <Sun className="h-[18px] w-[18px] text-gray-700" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ y: isDark ? 0 : -24, opacity: isDark ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="absolute"
      >
        <Moon className="h-[18px] w-[18px] text-gray-300" />
      </motion.div>
    </motion.button>
  );
}
