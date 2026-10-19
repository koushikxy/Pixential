import React from 'react';
import { Mail } from 'lucide-react';

export default function EmailInput({ className = '', ...props }: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>) {
  return (
    <div className="relative">
      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 mt-0.5 w-5 h-5 text-gray-400 pointer-events-none" />
      <input {...props} type="email" className={`${className} pr-4`} />
    </div>
  );
}
