'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <main>
      {session ? (
        <div>
          <span>
            <h2>Welcome! {session?.user?.name ?? session?.user?.email ?? "friend"}</h2>
          </span>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
      <div>Landing Page</div>
    </main>
  );
}
