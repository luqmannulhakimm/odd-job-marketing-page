import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://oddjob.my'),
  title: 'oddjob.my — Premium Malaysian Domain for Sale',
  description:
    'oddjob.my is available for acquisition from RM15,000. Contact the owner directly by phone or WhatsApp.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: '/',
    siteName: 'oddjob.my',
    title: 'oddjob.my — Premium Malaysian Domain for Sale',
    description: 'A short, direct .my domain available from RM15,000.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'oddjob.my — Premium Malaysian domain for sale, offers from RM15,000',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'oddjob.my — Premium Malaysian Domain for Sale',
    description: 'A short, direct .my domain available from RM15,000.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-MY">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
