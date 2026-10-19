import Link from 'next/link';
import Navbar from '../components/Navbar';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center text-center px-5 pt-32 pb-20">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400">404</p>
        <h1 className="mt-4 text-5xl md:text-7xl font-display font-bold tracking-tighter text-black dark:text-white">Page not found</h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-md">The page you are looking for does not exist or has moved.</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link href="/" className="px-8 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold hover:bg-blue-600 dark:hover:bg-cyan-400 transition-colors">
            Go to homepage
          </Link>
          <Link href="/contact" className="px-8 py-4 rounded-full border border-black/10 dark:border-white/20 text-black dark:text-white font-bold hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            Contact us
          </Link>
        </div>
      </main>
    </div>
  );
}
