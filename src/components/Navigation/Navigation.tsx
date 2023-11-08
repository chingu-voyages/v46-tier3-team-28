'use client';
import { Session } from 'next-auth';
import Link from 'next/link';
import { UserOptions } from './UserOptions';
import Divider from '../divider';
import { MainLogo } from '../icons';
import { CollectionSelect } from './CollectionSelect';

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
        <div className="flex items-center">
          <Link className="font-semibold" href="/dashboard">
            <MainLogo />
          </Link>
          <Divider className="h-8 w-8 text-border sm:ml-4" />
          <CollectionSelect />
        </div>
        <UserOptions session={session} />
      </div>
    </div>
  );
}
