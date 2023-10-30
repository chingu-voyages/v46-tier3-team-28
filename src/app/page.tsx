'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import LandingPage from '@/components/LandingPage/LandingPage';
import Navbar from '@/components/Navbar/Navbar';
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <Navbar /> 
      <main className="home-img">
        {session ? (
          <div>
            <span>
              <h2>Welcome! {session?.user?.name ?? session?.user?.email ?? 'friend'}</h2>
            </span>
            <button onClick={() => signOut()}>Sign Out</button>
          </div>
        ) : (
          <button onClick={() => signIn()}>Sign in</button>
        )}
        <div>
          <LandingPage />
        </div>
      </main>
      <Footer />
    </div>
  );
}
