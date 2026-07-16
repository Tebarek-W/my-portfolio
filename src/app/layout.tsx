import type { Metadata } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from 'react-hot-toast';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Tebarek Wachamo - Software Engineer & Full Stack Developer',
    template: '%s | Tebarek Wachamo'
  },
  description: 'Full-stack developer specializing in React, Next.js, Node.js, and modern web technologies. Building exceptional digital experiences.',
  keywords: ['software engineer', 'nestjs', 'nest.js', 'full-stack developer', 'react', 'next.js', 'typescript', 'web development'],
  authors: [{ name: 'Tebarek Wachamo' }],
  creator: 'Tebarek Wachamo',
  metadataBase: new URL('https://tebarek.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tebarek.dev',
    title: 'Tebarek Wachamo - Software Engineer & Full Stack Developer',
    description: 'Full-stack developer building exceptional digital experiences',
    siteName: 'Tebarek Wachamo Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tebarek Wachamo - Software Engineer & Full Stack Developer',
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${dmSans.variable}`}
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              className: 'font-sans text-sm',
              style: {
                borderRadius: '12px',
                background: 'var(--color-surface-raised)',
                color: 'var(--color-ink)',
                border: '1px solid var(--color-border)',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
