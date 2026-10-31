import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aestheticventurebd.com'),
  title: 'Be-Youth',
  description: 'Care for Your Skin, All Day Long.',
  keywords: ['Be-Youth', 'Skincare', 'Dhaka', 'Bangladesh'],
  authors: [{ name: 'Be-Youth' }],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
  openGraph: {
    type: 'website',
    siteName: 'Be-Youth',
    title: 'Be-Youth',
    description: 'Care for Your Skin, All Day Long.',
    images: [
      {
        url: '/logo.jpeg',
        width: 800,
        height: 600,
        alt: 'Be-Youth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Be-Youth',
    description: 'Care for Your Skin, All Day Long.',
    images: ['/logo.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${spaceGrotesk.variable}`}>
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
