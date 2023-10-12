import './globals.css';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { Inter } from 'next/font/google';
import { authOptions } from './api/auth/[...nextauth]/authOptions';
import SessionProvider from './_providers/session-provider';
import Nav from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Page Pocket',
  description: 'Capture, Categorize, and Share with Ease',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Nav />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
