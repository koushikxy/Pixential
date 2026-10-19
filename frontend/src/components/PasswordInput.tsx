'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & { withIcon?: boolean };

export default function PasswordInput({ className = '', withIcon = false, ...props }: Props) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative">
      {withIcon && <Lock className="absolute left-4 top-1/2 -translate-y-1/2 mt-0.5 w-5 h-5 text-gray-400 pointer-events-none" />}
      <input {...props} type={visible ? 'text' : 'password'} className={`${className} pr-12`} />
      <button
        type="button"
        onClick={() => setVisible(!visible)}
        aria-label={visible ? 'Hide password' : 'Show password'}
        title={visible ? 'Hide password' : 'Show password'}
        className="absolute right-1.5 top-1/2 -translate-y-1/2 mt-0.5 w-10 h-10 flex items-center justify-center rounded-lg text-gray-500 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-cyan-400 dark:hover:bg-white/10 transition-colors"
      >
        {visible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
      </button>
    </div>
  );
}
