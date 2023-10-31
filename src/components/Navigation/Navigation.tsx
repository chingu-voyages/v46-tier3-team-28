'use client';
import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';

export default function Navigation({ session }: { session: Session }) {
  return (
    <div>
      {session ? (
        <div className="flex space-x-8">
          <span>
            <h2>Welcome! {session?.user?.name ?? session?.user?.email ?? 'friend'}</h2>
          </span>
          <button onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</button>
        </div>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </div>
  );
}
