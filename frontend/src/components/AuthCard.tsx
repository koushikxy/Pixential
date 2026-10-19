import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';

export const authInput =
  'mt-1.5 block w-full pl-11 py-3.5 rounded-xl bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 text-base text-black dark:text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-600/15 focus:border-blue-600 dark:focus:border-cyan-400 dark:focus:ring-cyan-400/15 transition';

export const authButton =
  'w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:brightness-110 transition disabled:opacity-60';

const milestones = [
  { name: 'Discovery call', done: true },
  { name: 'Design approved', done: true },
  { name: 'Development', done: false, active: true },
  { name: 'Launch', done: false },
];

export default function AuthCard({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="portal min-h-screen grid lg:grid-cols-[1.1fr_1fr] bg-gray-50 dark:bg-black">
      <div className="relative hidden lg:flex flex-col justify-between p-12 overflow-hidden bg-gray-950 text-white">
        <Image src="/fintech.jpg" alt="" fill priority sizes="55vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-black/70 to-cyan-950/80"></div>
        <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] rounded-full bg-blue-600/30 glow"></div>

        <Link href="/" className="relative flex items-center text-3xl w-max">
          <span className="font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Pix</span>
          <span className="font-medium tracking-tight">ential</span>
          <span className="font-black text-cyan-400">.</span>
        </Link>

        <div className="relative max-w-lg">
          <h2 className="text-5xl font-display font-bold tracking-tight leading-[1.05] mb-4">Your project, all in one place.</h2>
          <p className="text-lg text-gray-300 mb-10">Track progress, share files and see what is next, without chasing emails.</p>

          <div className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-cyan-300 font-bold">Example project</p>
                <p className="text-lg font-bold">Website redesign</p>
              </div>
              <span className="text-sm font-bold text-cyan-300">50%</span>
            </div>
            <div className="h-2 rounded-full bg-white/10 mb-5">
              <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
            </div>
            <ul className="space-y-3">
              {milestones.map((m) => (
                <li key={m.name} className="flex items-center gap-3 text-sm">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${m.done ? 'bg-cyan-400 text-black' : m.active ? 'border-2 border-cyan-400' : 'border-2 border-white/20'}`}
                  >
                    {m.done && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                    {m.active && <span className="w-2 h-2 rounded-full bg-cyan-400"></span>}
                  </span>
                  <span className={m.done || m.active ? 'text-white' : 'text-gray-400'}>{m.name}</span>
                  {m.active && <span className="ml-auto text-xs font-bold text-cyan-300">In progress</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="relative text-sm text-gray-400">&copy; {new Date().getFullYear()} Pixential</p>
      </div>

      <div className="relative flex flex-col px-5 sm:px-10 py-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,#000_40%,transparent_80%)]"></div>
        <div className="absolute top-1/4 -right-24 w-80 h-80 rounded-full bg-cyan-400/20 glow"></div>
        <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-blue-500/20 glow"></div>

        <Link href="/" className="relative inline-flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 w-max">
          <ArrowLeft className="w-4 h-4" />
          Back to website
        </Link>

        <div className="relative flex-1 flex items-center justify-center py-8">
          <div className="w-full max-w-md rounded-3xl bg-white/90 dark:bg-[#0a0a0a]/90 border border-gray-200 dark:border-white/10 shadow-2xl shadow-gray-300/40 dark:shadow-none p-7 sm:p-10">
            <Link href="/" className="lg:hidden flex items-center text-2xl mb-6 w-max">
              <span className="font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Pix</span>
              <span className="font-medium tracking-tight text-gray-900 dark:text-white">ential</span>
              <span className="font-black text-cyan-500">.</span>
            </Link>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-black dark:text-white tracking-tight">{title}</h1>
            {subtitle && <p className="mt-2 text-gray-500 dark:text-gray-400">{subtitle}</p>}
            <div className="mt-8">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
