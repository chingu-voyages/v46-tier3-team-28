import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PagePocket',
  description: 'Effortlessly Save, Categorize, and Share Your Favorite URLs with Our Versatile Bookmarking App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Nav/>
        {children}
        </main>
      </body>
    </html>
  );
}
