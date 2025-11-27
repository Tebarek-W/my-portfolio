import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Tebarek Wachamo - Full Stack Developer',
    template: '%s | Alex Johnson'
  },
  description: 'Full-stack developer specializing in React, Next.js, Node.js, and modern web technologies. Building exceptional digital experiences.',
  keywords: ['full-stack developer', 'react', 'next.js', 'typescript', 'web development'],
  authors: [{ name: 'Tebarek Wachamo' }],
  creator: 'Tebarek Wachamo',
  metadataBase: new URL('https://alexjohnson.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexjohnson.dev',
    title: 'Tebarek Wachamo - Full Stack Developer',
    description: 'Full-stack developer building exceptional digital experiences',
    siteName: 'Tebarek Wachamo Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tebarek Wachamo - Full Stack Developer',
    description: 'Full-stack developer building exceptional digital experiences',
    creator: '@TebarekWachamo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}