'use client';
import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { nameToInitials } from '@/lib/utils';
import { UserOptions } from './UserOptions';

export default function Navigation({ session }: { session: Session }) {
  return (
    <div className="bg-background border-b">
      <div className="flex flex-row justify-between h-16 items-center max-w-screen-xl mx-auto">
        {/* {session ? (
          <div className="flex space-x-8">
            <span>
              <h2>Welcome! {session?.user?.name ?? session?.user?.email ?? 'friend'}</h2>
            </span>
            <button onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</button>
          </div>
        ) : (
          <button onClick={() => signIn()}>Sign in</button>
        )} */}
        <div>
          <Link href="/dashboard">PagePocket</Link>
        </div>
        <UserOptions session={session} />
      </div>
    </div>
  );
}
