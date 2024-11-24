import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Firda Revisjon & Rådgiving AS',
  description: 'Din pålitelige partner innen revisjon og regnskap',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body className={inter.className}>{children}</body>
    </html>
  );
}