import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://namegenius.sajanadhikari.com.np'),
  title: {
    default: 'NameGenius - AI Business Name Generator',
    template: '%s | NameGenius',
  },
  description:
    'Generate unique and available business names powered by AI. Find the perfect name for your startup with instant domain availability checks.',
  keywords: [
    'business name generator',
    'startup name generator',
    'AI name generator',
    'domain name checker',
    'company name ideas',
  ],
  authors: [{ name: 'NameGenius Team' }],
  creator: 'NameGenius',
  publisher: 'NameGenius',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://namegenius.sajanadhikari.com.np',
    title: 'NameGenius - AI Business Name Generator',
    description: 'Generate unique and available business names powered by AI',
    siteName: 'NameGenius',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NameGenius - AI Business Name Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NameGenius - AI Business Name Generator',
    description: 'Generate unique and available business names powered by AI',
    images: ['/og-image.png'],
    creator: '@namegenius',
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
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <div className="absolute right-4 top-4">
              <ThemeToggle />
            </div>
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
