import type { Metadata } from 'next';
import { Inter, Syne, Caveat } from 'next/font/google';
import './globals.css';
import LocalBusinessSEO from '../components/LocalBusinessSEO';
import { AuthProvider } from '../context/AuthContext';
import { ThemeProvider } from '../components/ThemeProvider';
import AmbientBackground from '../components/AmbientBackground';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const syne = Syne({ subsets: ['latin'], variable: '--font-syne' });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' });

export const metadata: Metadata = {
  title: 'Digital Web Agency',
  description: 'We build high-performance, optimized web solutions for local businesses.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${syne.variable} ${caveat.variable}`}>
      <head>
        <LocalBusinessSEO />
      </head>
      <body className="transition-colors duration-300 min-h-screen flex flex-col font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <AuthProvider>
            <AmbientBackground />
            <main className="flex-grow flex flex-col min-h-screen">{children}</main>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
