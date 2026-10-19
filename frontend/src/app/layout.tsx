import type { Metadata, Viewport } from 'next';
import { Inter, Syne, Caveat } from 'next/font/google';
import './globals.css';
import LocalBusinessSEO from '../components/LocalBusinessSEO';
import { AuthProvider } from '../context/AuthContext';
import { ThemeProvider } from '../components/ThemeProvider';
import AmbientBackground from '../components/AmbientBackground';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const syne = Syne({ subsets: ['latin'], variable: '--font-syne' });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' });

const description = 'Pixential designs and builds fast, modern websites and web apps for growing businesses.';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://pixential.in'),
  title: { default: 'Pixential | Web Design & Development', template: '%s | Pixential' },
  description,
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: 'Pixential', title: 'Pixential | Web Design & Development', description, locale: 'en_IN', url: '/' },
  twitter: { card: 'summary_large_image', title: 'Pixential | Web Design & Development', description },
  icons: { icon: '/logo.svg', apple: '/apple-icon.png' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
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
